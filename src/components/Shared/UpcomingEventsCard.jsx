import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";

function UpcomingEventsCard(props) {
  const ref = useRef(null);
  // ...existing code...

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
    <div
      ref={ref}
      // style={{ padding: "0.6vw" }}
      className="p-[0.5vw] h-[400px] sm:h-[400px] lg:h-[500px]"
    >
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
              <div className="m-4">
                <div className="flex flex-wrap items-center">
                  {/* Start 1st div */}
                  <div>
                    <div className="text-center div-upcoming-events-date align-self-center my-auto">
                      <p className="upcoming-events-month">{month}</p>
                      <p className="upcoming-events-date">{date}</p>
                    </div>

                    <div className="div-upcoming-events-content">
                      <div className="align-middle">
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
                          className="align-middle align-self-center pt-2"
                          style={{ display: "flex", flex: "1" }}
                        >
                          <div className="align-self-top align-top no-hover">
                            <i className="fas fa-map-marker-alt upcoming-events-icon"></i>
                          </div>
                          <div className="align-self-center align-middle pl-2 w-[170px] break-normal break-words text-left">
                            <p className="upcoming-events-icon-text">
                              {props.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End first div */}
                  </div>

                  <div className="w-full sm:w-auto m-auto mt-2 mt-md-auto pr-2 sm:pr-0">
                    {/* Start 2nd div */}
                    <div className="w-full m-auto justify-center mx-auto align-middle">
                      <a
                        className="event-card-keraton-button btn btn-dark w-full sm:w-auto"
                        href={props.link}
                        role="button"
                      >
                        Sign Up
                      </a>
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

                    {/* End 2nd div */}
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
