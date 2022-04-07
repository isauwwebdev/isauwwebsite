import React from 'react';

import KeratonVideo from './KeratonVideo';
import KeratonAbout from './KeratonAbout';
import KeratonPerformers from './KeratonPerformers';
import KeratonFood from './KeratonFood';
import KeratonActivities from './KeratonActivities';
import Sponsors from './Sponsors';
import KeratonGetInvolved from './KeratonGetInvolved'

function Keraton() {
    return (
        <div>
            <KeratonVideo></KeratonVideo>
            <KeratonAbout></KeratonAbout>
            <KeratonPerformers></KeratonPerformers>
            <KeratonFood></KeratonFood>
            <KeratonActivities></KeratonActivities>
            <KeratonGetInvolved></KeratonGetInvolved>
        </div>
    );
}

export default Keraton;
