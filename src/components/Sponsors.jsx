import sponsors from '../data/sponsors.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Sponsors() {
    return (
        <div>
            <img
                className="d-block w-100"
                src="https://picsum.photos/2000"
                alt=""
                style={{ height: "calc(50vh + 10vw)" }}
            />
            <h1 className="text-center m-3"><strong>University District</strong></h1>
            <Container className="justify-content-center">
                <Row className="justify-content-center">
                    {sponsors.forEach((sponsor) => {
                        if (sponsor.location === "University District") {
                            return (
                                <Col className="text-center p-2 m-2" xs={5} md={3} lg={2} style={{ display: "flex" }}>
                                    <div style={{ alignSelf: "center" }}>
                                        <a href={sponsor.website}>
                                            <img className="mx-auto" src={sponsor.img} style={{ width: `calc(100% - 7vw + 20px)` }} alt="logo"></img>
                                        </a>
                                        <h5>{sponsor.name}</h5>
                                        <h6 style={{ color: "#808080" }}>{sponsor.offers}</h6>
                                    </div>
                                </Col>
                            )
                        }
                    })}
                </Row>
            </Container>
            <h1 className="text-center m-3"><strong>Other Locations</strong></h1>
            <Container className="justify-content-center">
                <Row className="justify-content-center">
                    {sponsors.forEach((sponsor) => {
                        if (sponsor.location !== "University District") {
                            return (
                                <Col className="text-center p-2 m-2" xs={5} md={3} lg={2} style={{ display: "flex" }}>
                                    <div style={{ alignSelf: "center" }}>
                                        <a href={sponsor.website}>
                                            <img className="mx-auto" src={sponsor.img} style={{ width: `calc(100% - 7vw + 20px)` }} alt="logo"></img>
                                        </a>
                                        <h5>{sponsor.name}</h5>
                                        <h6 style={{ color: "#808080" }}>{sponsor.offers}</h6>
                                    </div>
                                </Col>
                            )
                        }
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;