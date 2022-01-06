import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import products from '../data/products.json';

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
    const [position, setPosition] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const scrollSensitivity = 35.0;

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            var windowTop = window.scrollY;
            // var elementTop = 0;
            // if (document.getElementById("move")) {
            //     elementTop = document.getElementById("move").getBoundingClientRect().top;
            // }
            setPosition((windowTop) / scrollSensitivity);
        });

        window.addEventListener('load', () => {
            setWindowWidth(window.innerWidth);
            console.log("load: " + windowWidth)
        });

        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
            console.log("resize: " + windowWidth)
        });
    });

    // only put insta image posts into an array (do not include videos)
    const postArray = [];
    props.feeds.map((feed) => {
        const { id, caption, media_type, media_url } = feed

        switch (media_type) {
            case "VIDEO":
                break;
            default:
                var post = (
                    <img
                        width='auto'
                        height='auto'
                        id={id}
                        src={media_url}
                        alt={caption}
                        className="insta-img"
                    />
                );
                postArray.push(
                    <React.Fragment>
                        {post}
                    </React.Fragment>
                );
        }
    });

    return (
        <div style={{ overflow: "hidden" }}>
            <div id="move" className="move-section" style={{ marginBottom: `calc(-1 * (9.6px + 2vw))` }}>
                <div className="move-bg" style={{ right: `calc(${windowWidth}px / 2.0)`, transform: `translateX(calc(${position}px))` }}>
                    {postArray[0]}
                </div>
            </div>
            <div className="move-section">
                <div className="move-bg" style={{ left: `calc(${windowWidth}px / 2.0)`, transform: `translateX(calc(-1 * (${position}px)))` }}>
                    {postArray[1]}
                </div>
            </div>
            <div className="move-section" style={{ marginTop: `calc(-1 * (14px + 2.5vw))` }}>
                <div className="move-bg" style={{ right: `calc(${windowWidth}px / 2.1)`, transform: `translateX(calc(${position}px))` }}>
                    <img src={products[0].img} style={{ maxHeight: `calc(112px + 20vw)`, height: "auto", width: `calc(112px + 20vw)`, objectFit: "cover", backgroundColor: "none", borderRadius: "16px" }}></img>
                </div>
            </div>
        </div>
    );
}

export default InstaFeed;