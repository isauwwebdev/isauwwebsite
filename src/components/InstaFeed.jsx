import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InstaFeed = ({ token, ...props }) => {
    const [feeds, setFeedsData] = useState([]);
    // use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost() {
            try {
                axios
                    .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
                    .then((res) => {
                        setFeedsData(res.data.data)
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
    // put posts into an array
    const postArray = props.feeds.map((feed) => {
        const { id, caption, media_type, media_url } = feed
        let post;

        switch (media_type) {
            case "VIDEO":
                post = (
                    <video
                        width='100%'
                        height='auto'
                        src={media_url}
                        type="video/mp4"
                        controls playsinline>
                    </video>
                )
                return (
                    <React.Fragment>
                        <Col className="p-1">
                            {post}
                        </Col>
                    </React.Fragment>
                );
            default:
                post = (
                    <img
                        width='100%'
                        height='auto'
                        id={id}
                        src={media_url}
                        alt={caption}
                    />
                );
                return (
                    <React.Fragment>
                        <Col className="p-1 view overlay z-depth-1-half zoom">
                            {post}
                            <div className="mask rgba-white-light waves-effect waves-light"></div>
                        </Col>
                    </React.Fragment>
                );
        }
    });

    const grid = [];
    for (let i = 0; i < props.limit; i += 3) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            if (i < props.limit) {
                row.push(postArray[i + j]);
            }
        }
        grid.push(row);
    }

    return (
        // create 3 column grid
        <section className="my-5">
            {grid.map((row) => {
                return (
                    <Row>
                        {row.map((post) => {
                            return (
                                <React.Fragment>
                                    {post}
                                </React.Fragment>
                            )
                        })}
                    </Row>
                )
            })}
        </section>
    );
}

export default InstaFeed;