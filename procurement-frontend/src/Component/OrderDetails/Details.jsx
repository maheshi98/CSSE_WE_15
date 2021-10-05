import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup, Table } from 'react-bootstrap';
import OrderService from '../../Services/OrderService';

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            orderId: '',
            deadLine: '',
            totalCost: '',
            status: '',
        }

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

        OrderService.getOrderById(this.state.id).then((res) => {
            let order = res.data;
            this.setState({
                orderId: order.orderId,
                deadLine: order.deadLine,
                totalCost: order.totalCost,
                status: order.status,
                
            });
            console.log(order);
        })
            .catch(e => {
                console.log(e);
            });

    }
    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleEvent() { }

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Order Information</h1>
                    </div>
                    <Card style={{ width: '50rem', marginTop:'1rem', marginBottom:'1rem' }} >
                        <Card.Body>
                            <Card.Title><b>Order Details</b></Card.Title>
                            <p>Order Id: {this.state.orderId}</p>
                            <p>Created By: </p>
                            <p>Date: {this.state.deadLine}</p>
                            <p>Calculated Cost: {this.state.totalCost}</p>
                            <p>Status: {this.state.status}</p>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title><b>Requested Materials</b></Card.Title>
                            <p>Cement: </p>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title><b>Site Information</b></Card.Title>
                            <p>Site ID: </p>
                            <p>Mananger Name: </p>
                            <p>Phone Number: </p>
                            <p>Location: </p>
                            <Button variant="primary">Approve</Button>{' '}
                            <Button variant="danger">Reject</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )
    }
}