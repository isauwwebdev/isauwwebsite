import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'

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
            imgRow.push(imgArray[index]);
            index++;
        }
        imgGrid.push(imgRow);
    }
    return <Grid img={imgGrid}></Grid>;
    
}

function Grid(props) {
    const imgGrid = props.img;
    const makeRows = (imgGrid || []).map((img) => {
        return <Row img={img}></Row>
    });
    return (
        <div className="grid">
            {makeRows}
        </div>
    );
}

function Row(props) {
    const imgRow = props.img;
    const makeCols = (imgRow || []).map((img) => {
        return <Col img={img}></Col>
    });
    return (
        <div className="row">
            {makeCols}
        </div>
    );
}

function Col(props) {
    const img = props.img;
    return (
        <div className="col-3">{img}</div>
    );
}


export default InstaFeeds;