import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function ComingSoonCard() {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");

  function handleHeight() {
    if (ref.current) {
      setHeight(`${ref.current.clientWidth}px`);
    }
  }

  // Set height on component mount and resize
  useEffect(() => {
    handleHeight();
    window.addEventListener("resize", handleHeight);

    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  return (
    <div ref={ref} style={{ padding: "0.6vw", height: height }}>
      <Card className="upcoming-events-card">
        {/* Overlay for text */}
        <div className="upcoming-events-overlay">
          {/* Image Placeholder */}
          <div className="col-sm-12 col-lg-12 h-100">
            <Card.Img
              variant="top"
              className="upcoming-events-img"
              //   src=" ../images/events/keraton/2022/6.jpeg"
              src=" ../images/keraton/2023/keraton 1.jpeg"
              alt="Placeholder for upcoming event"
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
              {/* Event Title */}
              <h3
                className="events-title"
                style={{ fontSize: `calc(15px + 0.6vw)` }}
              >
                More Events <br></br>Coming Soon!
              </h3>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
