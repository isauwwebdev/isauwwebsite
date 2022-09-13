import Container from 'react-bootstrap/Container'
import Officers from "./Officers";
import VisionMission from "./VisionMission";

function About() {
    return (
        <div>
            <div className="navbar-overlay" style={{position: "relative"}}>
                <img
                    className="d-block w-100"
                    src="../images/officers/isauw-group.jpg"
                    alt=""
                    style={{ height: "calc(50vh + 10vw)" }}
                />
            </div>
            <Container>
                <VisionMission />
            </Container>
            <Container className="text-center" style={{ gridAutoRows: "1fr" }}>
                <Officers />
            </Container>
        </div>
    );
};

export default About;