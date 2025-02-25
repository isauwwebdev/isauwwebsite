import React from "react";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import Moment from "react-moment";

function PastEventsCard(props) {
  const toUpperCaseFilter = (d) => {
    return d.toUpperCase();
  };
  let date = (
    <Moment
      filter={toUpperCaseFilter}
      parse="MM/DD/YYYY"
      format="ddd, MMM DD YYYY"
    >
      {props.date}
    </Moment>
  );

  return (
    <div className="past-events-card flex flex-col items-center w-full">
      <div className="w-[85%] rounded-2xl p-6 flex flex-col mx-auto min-h-[60vh] justify-center">
        <Container className="w-full max-w-6xl">
          <Slider {...props.settings}>
            {props.img.map((image) => (
              <img src={image.src} className="past-events-img" alt=""></img>
            ))}
          </Slider>
        </Container>
        {/*Event Details */}
        <div className="text-left mt-6 mb-6 w-[85%] mx-auto">
          <p className="inline-block px-2 py-1 border-1 border-gray-800 rounded-full text-[8px] font-medium uppercase tracking-wide text-black">
            {date}
          </p>

          <h2 className="text-2xl md:text-3xl font-extrabold text-black mt-2">
            {props.title}
          </h2>

          <p className="text-sm text-gray-900 pb-6 mt-2">{props.text}</p>

          {/* Line here */}
          <hr className="border-t border-[#D3D3D3] mt-4" />
        </div>
      </div>
    </div>
  );
}

export default PastEventsCard;
