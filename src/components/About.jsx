import Container from 'react-bootstrap/Container'
import Officers from "./Officers";
import VisionMission from "./VisionMission";

function About() {
    return (
        <div>
            <img
                className="d-block w-100"
                src="https://picsum.photos/2000"
                alt=""
                style={{ height: "calc(50vh + 10vw)" }}
            />
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