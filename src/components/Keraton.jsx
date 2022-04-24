import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import KeratonCountdown from './KeratonCountdown';
import KeratonVideo from './KeratonVideo';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonActivities from './KeratonActivities';
<<<<<<< HEAD
import KeratonGetInvolved from './KeratonGetInvolved'
import KeratonVendors from './KeratonVendors';
=======
import KeratonFAQ from './KeratonFAQ';
>>>>>>> 052ebad06c160fcd097617bbc193832e6ad839d6


function Keraton() {

    return (
        <div>
            <KeratonVideo></KeratonVideo>
            <KeratonAbout></KeratonAbout>
<<<<<<< HEAD
            <KeratonVendors></KeratonVendors>
=======
            <KeratonPerformers></KeratonPerformers>
            <KeratonFAQ></KeratonFAQ>
>>>>>>> 052ebad06c160fcd097617bbc193832e6ad839d6
        </div>
    );
}

export default Keraton;
