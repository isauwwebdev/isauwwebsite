import React from 'react';

function Photo(props) {
  return (
    <div className="view overlay z-depth-1-half zoom">
      <img alt="" className="img-fluid" src={props.imageSource} />
      <div className="mask rgba-white-light waves-effect waves-light"></div>
    </div>
  );
}

export default Photo;