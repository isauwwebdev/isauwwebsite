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
        <div className="keraton-faq">
            <h1 className="pt-5 keraton-faq-header">Frequently Asked Questions</h1>
            <h2 className="mb-5 keraton-faq-header2">FAQs</h2>
            <Container>
                <Accordion defaultActiveKey="0" flush className="py-5 keraton-faq-accordion">
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
            <Accordion.Body className="keraton-faq-item-body">{item.answer}</Accordion.Body>

        </Accordion.Item>
    )
}

export default KeratonFAQ