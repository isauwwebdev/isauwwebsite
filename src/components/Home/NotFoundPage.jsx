import React from 'react';

function NotFoundPage() {
    return (
      <div className="navbar-overlay" style={{position: "relative"}}>
        <img
          className="not-found-page-image"
          src="../images/husky.png"
          alt=""
          style={{height: "calc(40vh + 10vw)"}}
        />
         <center className="not-found-page">404 Page Not Found</center>
      </div>
    );
}

export default NotFoundPage;
