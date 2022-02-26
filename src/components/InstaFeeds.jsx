import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Feed from './Feed';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try {
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }

        // manually call the fetch function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <InstaGrid feeds={feeds} limit={props.limit}></InstaGrid>
    );
}

function InstaGrid(props) {
    // putting images into an array
    const postArray = props.feeds.map((feed) => {
        return <Feed key={feed.id} feed={feed} />
    });

    const grid = [];
    for (let i = 0; i < props.limit; i += 3) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            if (i < props.limit) {
                row.push(postArray[i+j]);
            }
        }
        grid.push(row);
    }

    return (
        // Creating 3 column grid
        <div className="instagramGrid">
            {grid.map((row) => {
                return (
                    <Row>
                        {row.map((post) => {  
                            return (
                                <Col className="p-1 view overlay z-depth-1-half zoom">
                                    {post}
                                    <div className="mask rgba-white-light waves-effect waves-light"></div>                                    
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
        </div>
    );   
}

export default InstaFeeds;