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
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }

        // manually call the fecth function 
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
    const limit = props.limit;
    const feeds = props.feeds;
    // putting images into an array
    const imgArray = feeds.map((feed) => {
        return <Feed key={feed.id} feed={feed} />
    });
    console.log(imgArray);
    let index = 0;
    const imgGrid = [];
    for(let i = 0; i < limit / 3; i++) {
        const imgRow = [];
        for(let i = 0; i < 3; i++) {
            if(index < limit) {
                imgRow.push(imgArray[index]);
                index++;
            }
        }
        imgGrid.push(imgRow);
    }
    return (
        // Creating 3 column grid
        <GridMaker img={imgGrid}></GridMaker>
    );   
}

function GridMaker(props) {
    const imgGrid = props.img;
    const makeRows = (imgGrid || []).map((img) => {
        // Making row of 3 images
        return <RowMaker img={img}></RowMaker>
    });
    return (
        <div className="instagramGrid">
            {makeRows}
        </div>
    );
}

function RowMaker(props) {
    const imgRow = props.img;
    const makeCols = (imgRow || []).map((img) => {
        // Making columns for where the image will be
        return <ColMaker img={img}></ColMaker>
    });
    return (
        <Row>
            {makeCols}
        </Row>
    );
}

function ColMaker(props) {
    const img = props.img;
    return (
        <Col className="p-1">{img}</Col>
    );
}

export default InstaFeeds;