import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import KeratonCountdown from './KeratonCountdown';
import KeratonVideo from './KeratonVideo';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonGames from './KeratonGames';
import KeratonFAQ from './KeratonFAQ';
import KeratonVendors from './KeratonVendors';
import KeratonSponsors from './KeratonSponsors';

function Keraton() {

    return (
        <div style={{overflowX: "hidden"}}>
            <KeratonVideo></KeratonVideo>
            <KeratonAbout></KeratonAbout>
            <KeratonPerformers></KeratonPerformers>
            <KeratonVendors></KeratonVendors>
            <KeratonGames></KeratonGames>
            <KeratonFAQ></KeratonFAQ>
            <KeratonSponsors></KeratonSponsors>
        </div>
    );
}

export default Keraton;
