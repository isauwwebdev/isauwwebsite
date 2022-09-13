import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import products from '../../data/products.json';

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
            setPosition((windowTop) / scrollSensitivity - (16384 / windowWidth));
        });

        window.addEventListener('load', () => {
            var windowTop = window.scrollY;
            setWindowWidth(window.innerWidth);
            setPosition((windowTop) / scrollSensitivity - (16384 / windowWidth));
        });

        window.addEventListener('resize', () => {
            var windowTop = window.scrollY;
            setWindowWidth(window.innerWidth);
            setPosition((windowTop) / scrollSensitivity - (16384 / windowWidth));
        });
    });

    // only put insta image posts into an array (do not include videos)
    const postArray = [];
    props.feeds.forEach((feed) => {
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
        <div style={{ overflow: "hidden" }} className="my-5">
            <div id="move" className="move-section" style={{ marginBottom: `calc(-1 * (8px + 1vw))` }}>
                <div className="move-bg" style={{ right: `calc(${windowWidth}px / 1.95)`, transform: `translateX(calc(${position}px))` }}>
                <img src="../images/instagram/bag.jpeg" className="insta-product" alt="Instagram Post 1"></img>
                </div>
            </div>
            <div className="move-section">
                <div className="move-bg" style={{ left: `calc(${windowWidth}px / 1.95)`, transform: `translateX(calc(-1 * (${position}px)))` }}>
                <img src="../images/instagram/mask.jpeg" className="insta-product" alt="Instagram Post 2"></img>
                </div>
            </div>
            <div className="move-section" style={{ marginTop: `calc(-1 * (14px + 2.5vw))` }}>
                <div className="move-bg" style={{ right: `calc(${windowWidth}px / 1.775)`, transform: `translateX(calc(${position}px))` }}>
                    <img src={products[0].img} className="insta-product" alt="Instagram Post 3"></img>
                </div>
            </div>
        </div>
    );
}

export default InstaFeed;