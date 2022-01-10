import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

function UpcomingEventsHome(props) {

    const [hover, setHover] = React.useState(false);

    return (
        <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
            <a href="https://www.google.com" style={{ display: "block" }} >
                <Container style={{ marginBottom: "10%", padding: "auto"}}>
                    {/* Text and dark filter overlay on top of image */}
                    <div className="upcoming-events-overlay-homepage" style={{ borderRadius: "0px", boxShadow: "0 0 0"}}>
                        {/* Event Image */}
                        <Card.Img variant="top" src={props.img} style={{ borderRadius: "0px", filter: hover ? "blur(4px)" : "none", transition: "1s all ease-in-out" }} />
                        <div>
                            <div className="upcoming-events-content text-center" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0", boxRadius: "0px" }}>
                                {/* Event Name */}
                                <h3 className="events-title" style={{ transform: hover ? "scale(1.15)" : "none", transition: "1.5s all ease-in-out", transitionDelay: "150ms" }}>{props.title}</h3>
                            </div>

                            <div className="upcoming-events-content" style={{ opacity: hover ? 0 : 1, transition: "0.5s all ease-in-out", boxShadow: "0 0 0", borderRadius: "0px"}}>
                                <div className="row" style={{ margin: "10px", animation: "fadeIn 1s" }}>
                                    {/* Event Date */}
                                    <div className="text-center div-upcoming-events-date">
                                        <p className="upcoming-events-month">{props.month}</p>
                                        <p className="upcoming-events-date">{props.date}</p>
                                    </div>

                                    <div className="div-upcoming-events-content" style={{ display: "flex", alignItems: "center", boxShadow: "0 0 0", borderRadius: "0px" }}>
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
                                                        {props.loc}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </a>
        </div>
    );
}

export default UpcomingEventsHome;