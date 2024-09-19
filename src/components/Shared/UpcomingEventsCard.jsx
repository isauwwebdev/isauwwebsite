import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";

function UpcomingEventsCard(props) {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");

  function handleHeight() {
    if (ref.current) {
      setHeight(`${ref.current.clientWidth}px`);
    }
  }

  // Changes to render immediately instead of using onLoad()
  useEffect(() => {
    handleHeight(); // Set height on component mount
    window.addEventListener("resize", handleHeight);

    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };

  let month = (
    <Moment filter={toUpperCaseFilter} parse="MM/DD/YYYY" format="MMM">
      {props.date}
    </Moment>
  );
  let date = (
    <Moment filter={toUpperCaseFilter} parse="MM/DD/YYYY" format="DD">
      {props.date}
    </Moment>
  );

  return (
    <div ref={ref} style={{ padding: "0.6vw", height: height }}>
      <Card className="upcoming-events-card">
        {/* Text and dark filter overlay on top of image */}
        <div className="upcoming-events-overlay">
          {/* Event Image */}
          <div className="col-sm-12 col-lg-12 h-100">
            <Card.Img
              variant="top"
              className="upcoming-events-img"
              src={props.img}
              alt={props.alt || "Event image"}
            />
          </div>
          <div>
            <div
              className="upcoming-events-content text-center"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Event Name */}
              <h3
                className="events-title"
                style={{ fontSize: `calc(15px + 0.6vw)` }}
              >
                {props.title}
              </h3>
            </div>

            <div className="upcoming-events-content">
              <div
                className="row"
                style={{
                  paddingRight: `calc(12px)`,
                  paddingLeft: `calc(12px)`,
                }}
              >
                {/* Event Date */}
                <div className="text-center div-upcoming-events-date">
                  <p className="upcoming-events-month">{month}</p>
                  <p className="upcoming-events-date">{date}</p>
                </div>

                <div className="div-upcoming-events-content" style={{}}>
                  <div>
                    {/* Time and Location */}
                    <div
                      className="align-middle align-self-center"
                      style={{ display: "flex", flex: "1" }}
                    >
                      <div className="align-self-center align-middle no-hover">
                        <i className="fas fa-clock upcoming-events-icon"></i>
                      </div>
                      <div
                        className="align-self-center align-middle"
                        style={{ paddingLeft: "8px" }}
                      >
                        <p className="upcoming-events-icon-text">
                          {props.time}
                        </p>
                      </div>
                    </div>
                    <div
                      className="align-middle align-self-center"
                      style={{ display: "flex", flex: "1" }}
                    >
                      <div className="align-self-center align-middle no-hover">
                        <i className="fas fa-map-marker-alt upcoming-events-icon"></i>
                      </div>
                      <div
                        className="align-self-center align-middle"
                        style={{ paddingLeft: "8px" }}
                      >
                        <p className="upcoming-events-icon-text">
                          {props.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {props.title === "Keraton" ? (
                  <div className="div-upcoming-events-button">
                    <a
                      className="event-card-keraton-button btn btn-dark"
                      href="/keraton"
                      role="button"
                    >
                      Learn More
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {props.title === "Seattle Stamp Quest" ? (
                  <div className="div-upcoming-events-button">
                    <a
                      className="event-card-keraton-button btn btn-dark"
                      href="/sign-up-stamp-quest"
                      role="button"
                    >
                      Sign Up{" "}
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {props.title === "Seathrough" ? (
                  <div className="div-upcoming-events-button">
                    <a
                      className="event-card-keraton-button btn btn-dark"
                      href="/sign-up-seathrough"
                      role="button"
                    >
                      Sign Up{" "}
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default UpcomingEventsCard;
