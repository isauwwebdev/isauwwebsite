import { React, useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KeratonCountdown(props) {
    const { keratonDate } = props;

    const Completionist = () => <h2 className="keraton-completed">Keraton has passed!</h2>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <DisplayBlocks timeArray={[days, hours, minutes, seconds]} stringArray={[days === 1 ? "day" : "days", hours === 1 ? "hour" : "hours", minutes === 1 ? "minute" : "minutes", seconds === 1 ? "second" : "seconds"]} />
        }
    };
    return (
        <div>
            <Countdown
                date={keratonDate}
                renderer={renderer}
            />
        </div>
    )
}

function DisplayBlocks(props) {
    const { timeArray, stringArray } = props;
    const displayTime = timeArray.map((time, i) => {
        return (
            <Col className="col-3">
                <TimeBlock time={time} stringArray={stringArray} index={i}></TimeBlock>
            </Col>
        )
    });
    return (
        <Row className="countdown-row justify-content-center my-3">
            {displayTime}
        </Row>
    )
}

function TimeBlock(props) {
    const { time, stringArray, index } = props;
    return (
        <Card className="keraton-countdown-card">
            <Card.Title className="countdown-title">{time}</Card.Title>
            <Card.Title className="countdown-sub-title">{stringArray[index].toUpperCase()}</Card.Title>
        </Card>
    )
}

export default KeratonCountdown;