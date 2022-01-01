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

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            var windowTop = window.scrollY;
            var elementTop = 0;
            if (document.getElementById("move")) {
                elementTop = document.getElementById("move").getBoundingClientRect().top;
            }
            setPosition((windowTop - elementTop) / 10.0);
        });
    });

    // put instafeed posts into an array
    const postArray = props.feeds.map((feed) => {
        const { id, caption, media_type, media_url } = feed
        let post;

        switch (media_type) {
            case "VIDEO":
                post = (
                    <video
                        width='auto'
                        height='auto'
                        src={media_url}
                        type="video/mp4"
                        style={{ borderRadius: "16px" }}
                        controls playsinline>
                    </video>
                )
                return (
                    <React.Fragment>
                        {post}
                    </React.Fragment>
                );
            default:
                post = (
                    <img
                        width='auto'
                        height='auto'
                        id={id}
                        src={media_url}
                        alt={caption}
                        style={{ borderRadius: "16px" }}
                    />
                );
                return (
                    <React.Fragment>
                        {post}
                    </React.Fragment>
                );
        }
    });

    return (
        <div>
            <div id="move" className="move-section">
                <div class="bg-move" style={{ left: `calc(10% + ${position}px)`, padding: "4vh" }}>
                    {postArray[0]}
                </div>
            </div>
            <div className="move-section">
                <div class="bg-move" style={{ right: `calc(-15% + ${position}px)`, padding: "4vh" }}>
                    {postArray[1]}
                </div>
            </div>
            <div id="move" className="move-section">
                <div class="bg-move" style={{ left: `calc(10% + ${position}px)` }}>
                    <img src={products[0].img} style={{ maxHeight: "48vh", height: "auto", width: "48vh", objectFit: "cover" }}></img>
                </div>
            </div>
        </div>
    );
}

export default InstaFeed;