import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function NotFoundPage() {
    return (
      <div className="navSolid2" style={{position: "relative"}}>
         <img
           className="not-found-page-image"
           src="../images/page-not-found.png"
           alt=""
           style={{height: "calc(40vh + 10vw)"}}
         />
      <Carousel.Caption>
        <h1 className="not-found-page" style={{fontWeight: "bold", fontSize: "calc(2vw + 30px)"}}>404</h1>
        <h1 className="not-found-page">Page Not Found</h1>
      </Carousel.Caption>
    </div>
    );
}

export default NotFoundPage;
