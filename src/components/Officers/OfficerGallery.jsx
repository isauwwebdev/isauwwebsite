import React from 'react';
import OfficerCard from "./OfficerCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function OfficerGallery(props) {
    const { officerData } = props;

    const officerCards = officerData.map((officer, i) => {
        return (
            <Col className="my-2">
                <OfficerCard
                    officerName={officer.name}
                    officerRole={officer.role}
                    officerMajor={officer.major}
                    officerImg={officer.img[0].src} 
                    officerPosition={officer.position}
                    />
            </Col>
        );
    })

    return (
        <Row>
            {officerCards}
        </Row>
    )
}

export default OfficerGallery;