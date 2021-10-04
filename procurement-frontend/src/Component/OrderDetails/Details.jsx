import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup, Table } from 'react-bootstrap';

export default class Details extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Order Information</h1>
                    </div>
                    <Card>
                        <Card.Body>
                            <Card.Title><b>Order Details</b></Card.Title>
                            <p>Order Id:</p>
                            <p>Created By:</p>
                            <p>Date:</p>
                            <p>Calculaated Cost:</p>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Card.Body>
                            <Card.Title><b>Requested Materials</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Card.Body>
                            <Card.Title><b>Site Information</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Button variant="primary">Approve</Button>{' '}
                    <Button variant="danger">Reject</Button>
                </Row>
            </div>
        )
    }
}