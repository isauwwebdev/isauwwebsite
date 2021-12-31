import React from 'react';

function WhoWeAre() {
    return (
        <section className="my-5 about-us">
            <img src="../images/indonesia-map.png" style={{position: 'absolute', zIndex: '-1', right: '0', top: '125%', width: '70%', opacity: '0.6'}}/>
            <div className="row">
                <div className="col-6">
                    <h1 className="my-3"><strong>Our Purpose</strong></h1>
                    <p className="my-3 div-margin-btm">ISAUW is a non-profit cultural organization
                        with the purpose of uniting the Indonesian community within the University of Washington as well as promoting our Indonesian culture to
                        the Greater Seattle Area community.</p>
                    <p className="my-3">Since 2001, we have established a platform for Indonesian students at the University of Washington to
                        create a unifying community based on common interest in Indonesian culture.</p>
                </div>
            </div>
        </section>
    );
}

export default WhoWeAre;