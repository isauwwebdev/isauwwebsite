import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import React from 'react'
import questions from '../data/keraton-FAQ.json';

function KeratonFAQ() {  
    const questionItems = questions.map((item) => {
        return (
            <Item item={item}/>
        )
    }) 
    return (
        <div className="keraton-faq" style={{ "background-color": "#031B28", paddingTop: "5rem", paddingBottom: "5rem" }}>
            <Container>
                <h1 className="py-3 keraton-section-header">FAQ</h1>
                <Accordion defaultActiveKey="0" flush className="keraton-faq-accordion">
                    {questionItems}
                </Accordion>
            </Container>
        </div>
    )
}

function Item(props) {
    const { item } = props;
    return (
        <Accordion.Item eventKey={String(item.id)} className="keraton-faq-item">
            <Accordion.Header className="keraton-faq-item-header">{item.question}</Accordion.Header>
            <Accordion.Body className="keraton-faq-item-body">{item.link && <a href={item.link} target="_blank" rel="noreferrer" ><img src={item.icon} style={{width: `calc(20px + 0.4vw)`, marginRight: `calc(2px + 0.2vw)`, paddingBottom: "8px"}}></img></a>} {item.answer}</Accordion.Body>
        </Accordion.Item>
    )
}

export default KeratonFAQ