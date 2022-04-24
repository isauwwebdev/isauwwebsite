import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import KeratonCountdown from './KeratonCountdown';
import KeratonVideo from './KeratonVideo';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonActivities from './KeratonActivities';
import KeratonFAQ from './KeratonFAQ';


function Keraton() {

    return (
        <div>
            <KeratonVideo></KeratonVideo>
            <KeratonAbout></KeratonAbout>
            <KeratonPerformers></KeratonPerformers>
            <KeratonFAQ></KeratonFAQ>
        </div>
    );
}

export default Keraton;
