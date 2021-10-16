import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row } from 'react-bootstrap';
import OrderService from '../../Services/OrderService';

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            orderId: '',
            deadLine: '',
            totalCost: '',
            approvedBy: '',
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

    approve(e) {

        e.preventDefault();
        let order = {
            orderId: this.state.orderId,
            deadLine: this.state.deadLine,
            totalCost: this.state.totalCost,
            approvedBy: window.sessionStorage.getItem("UserId"),
            status: "APPROVED",
        };
        console.log("DETAILS ADDED SUCCESSFUL ", order);
        OrderService.changeStatus(this.state.id, order).then(res => {
            this.setState({ "updateShow": true });
            setTimeout(() => this.setState({ "updateShow": false }), 3000)
            let pet;
            this.setState({ pet: res.data });
            alert("Successfuly UPDATED!")
        })

    }

    reject(e) {

        e.preventDefault();
        let order = {
            orderId: this.state.orderId,
            deadLine: this.state.deadLine,
            totalCost: this.state.totalCost,
            approvedBy: window.sessionStorage.getItem("UserId"),
            status: "REJECTED",
        };
        console.log("DETAILS ADDED SUCCESSFUL ", order);
        OrderService.changeStatus(this.state.id, order).then(res => {
            this.setState({ "updateShow": true });
            setTimeout(() => this.setState({ "updateShow": false }), 3000)
            let pet;
            alert("Successfuly REJECTED!")
        })

    }
    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

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
                        </Card.Body>
                        <Card.Body>
                            <Card.Title><b>Requested Materials</b></Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title><b>Site Information</b></Card.Title>
                            
                            <Button type= "submit" onClick={e => this.approve(e)} variant="primary">Approve</Button>{' '}
                            <Button type= "submit" onClick={e => this.reject(e)} variant="danger">Reject</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )
    }
}