import React from 'react';
import Card from 'react-bootstrap/Card';

function UpcomingEventsCard(props) {

    const ref = React.useRef(null);
    const [height, setHeight] = React.useState("0px");
    
    function handleHeight() {
        setHeight("" + ref.current.clientWidth + "px");
    }
    // set width of card equal to height
    // so that card is square
    React.useEffect(() => {
        window.addEventListener('resize', handleHeight);
        return () => {
            window.removeEventListener('resize', handleHeight);
        }
    });

    return (
        <div ref={ref} style={{ padding: "0.6vw", height: `${height}` }} onLoad={() => { handleHeight() }}>
            <Card className="upcoming-events-card">
                {/* Text and dark filter overlay on top of image */}
                <div className="upcoming-events-overlay">
                    {/* Event Image */}
                    <div class="col-sm-12 col-lg-12 h-100">
                        <Card.Img variant="top" className="upcoming-events-img" src={props.img}/>
                    </div>
                    <div>
                        <div className="upcoming-events-content text-center" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {/* Event Name */}
                            <h3 className="events-title" style={{ fontSize: `calc(15px + 0.6vw)` }}>
                                {props.title}
                            </h3>
                        </div>

                        <div className="upcoming-events-content">
                            <div className="row" style={{ paddingRight: `calc(14px)`, paddingLeft: `calc(14px)` }}>
                                {/* Event Date */}
                                <div className="text-center div-upcoming-events-date">
                                    <p className="upcoming-events-month">{props.month}</p>
                                    <p className="upcoming-events-date">{props.date}</p>
                                </div>

                                <div className="div-upcoming-events-content" style={{ paddingRight: `2vw` }}>
                                    <div>
                                        {/* Time and Location */}
                                        <div className="align-middle align-self-center" style={{ display: "flex", flex: "1" }}>
                                            <div className="align-self-center align-middle no-hover">
                                                <i className="fas fa-clock upcoming-events-icon"></i>
                                            </div>
                                            <div className="align-self-center align-middle" style={{ paddingLeft: "8px" }}>
                                                <p className="upcoming-events-icon-text">
                                                    {props.time}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="align-middle align-self-center" style={{ display: "flex", flex: "1" }}>
                                            <div className="align-self-center align-middle no-hover">
                                                <i className="fas fa-map-marker-alt upcoming-events-icon"></i>
                                            </div>
                                            <div className="align-self-center align-middle" style={{ paddingLeft: "8px" }}>
                                                <p className="upcoming-events-icon-text">
                                                    {props.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default UpcomingEventsCard;