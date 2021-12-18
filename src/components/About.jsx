import AboutUs from "./AboutUs";
import Container from 'react-bootstrap/Container'
import Officers from "./Officers";

function About() {
    return (
        <div>
            <AboutUs />
            <Container className="text-center" style={{ gridAutoRows: "1fr" }}>
                <Officers />
            </Container>
        </div>
    );
};

export default About;