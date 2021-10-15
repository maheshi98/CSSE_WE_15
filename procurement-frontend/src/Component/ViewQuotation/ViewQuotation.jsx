import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup, Table } from 'react-bootstrap';
import OrderService from '../../Services/OrderService';

export default class ViewQuotation extends Component {
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
                        <h1 class="head-title">Quotations</h1>
                    </div>
                    <div style={{  marginLeft:'0rem' }}>
                    <Card style={{ width: '50rem', marginTop:'1rem', marginBottom:'1rem' }} >
                        <Card.Body style={{  marginLeft:'0rem' }}>
                            <Card.Title><b>Quotations</b></Card.Title>
                            <p>Order Id: Quo001</p>
                            <p>Created By: Mr.Harsha Karunarathna</p>
                            <p>Date: 2021-01-03</p>
                            <p>Calculated Cost: Rs.5000</p>
                            <p>Status: Approved</p>
                        </Card.Body>
                        <Card.Body style={{  marginLeft:'0rem' }}>
                            <Card.Title><b>Requested Materials</b></Card.Title>
                            <p>Cement: </p>
                        </Card.Body>
                        <Card.Body style={{  marginLeft:'0rem' }}>
                            <Card.Title><b>Site Information</b></Card.Title>
                            <p>Site ID: SID78H43</p>
                            <p>Mananger Name: Mr.Harsha Karunarathna</p>
                            <p>Phone Number: 0775897465</p>
                            <p>Location: Colombo 10</p>
                        </Card.Body>
                    </Card>
                    </div>
                </Row>
            </div>
        )
    }
}