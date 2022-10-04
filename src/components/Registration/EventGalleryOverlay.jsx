import React from 'react';
import events from '../../data/events.json';
import Carousel from 'react-bootstrap/Carousel';

function EventGalleryOverlay(props) {
    const { eventName } = props;
    // const lastOccuredEvent = events.find((event) => {
    //     return event === eventName;
    // });

    const eventPictureOverlay = (event) => {
        let srcPath = "../images/officers/isauw-group.jpg";
        if (event === "Seattle 101") {
            srcPath = "../images/events/seattle 101/1.png"
        } else if (event === "SeaThrough") {
            srcPath = "../images/events/seathrough/1.jpeg"
        } else if (event === "Friendsgiving") {
            srcPath = "../images/events/friendsgiving/1.jpg"
        } else if (event === "Winter Ball") {
            srcPath = "../images/events/winter ball/1.jpg"
        }
        return srcPath;
    }

    // const eventPictures = (event) => {
    //     let altTag = { eventName } + " gallery photo";
    //     return event.img.map((srcPath) => {
    //         return (
    //             <div>
    //                 <Carousel.Item interval={4000}>
    //                     <div className="navbar-overlay">
    //                         <img
    //                             className="d-block w-100 h-100"
    //                             src={srcPath}
    //                             alt={altTag}
    //                         />
    //                     </div>
    //                 </Carousel.Item>
    //             </div>
    //         )
    //     });
    // }

    return (
        // <Carousel touch={true} style={{ height: "calc(50vh + 10vw)" }}>
        //     {eventPictures(lastOccuredEvent)}
        // </Carousel>
        <div className="navbar-overlay" style={{ position: "relative" }}>
            <img
                className="d-block w-100"
                src={eventPictureOverlay(eventName)}
                alt="upcoming event picture"
                style={{ height: "calc(50vh + 10vw)" }}
            />
        </div>
    )
}

export default EventGalleryOverlay;