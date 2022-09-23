import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function NotFoundPage() {
    return (
      <div className="navSolid" style={{position: "relative"}}>
         <img
           className="not-found-page-image"
           src="../images/page-not-found.png"
           alt=""
           style={{height: "calc(40vh + 10vw)"}}
         />
      <Carousel.Caption style={{top: "100%", bottom: "65%", left: "5%", right: "5%"}}>
        <h1 className="not-found-page" style={{zIndex: "100"}}>404 Page Not Found</h1>
      </Carousel.Caption>
    </div>
    );
}

export default NotFoundPage;
