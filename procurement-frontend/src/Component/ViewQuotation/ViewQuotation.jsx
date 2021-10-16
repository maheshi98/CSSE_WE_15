import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
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
    approve(e) {

        e.preventDefault();
        let invoice = {
            invoiceId: this.state.invoiceId,
            supplierName: this.state.supplierName,
            estimatedAmount: this.state.estimatedAmount,
            unitCost: this.state.supplierName,
            materialName: this.state.materialName,
            quantity: this.state.quantity,
            approvedBy: window.sessionStorage.getItem("UserId"),
            status: "APPROVED",
        };
        console.log("DETAILS ADDED SUCCESSFUL ", invoice);
        OrderService.changeStatus(this.state.id, invoice).then(res => {
            this.setState({ "updateShow": true });
            setTimeout(() => this.setState({ "updateShow": false }), 3000)
            let pet;
            this.setState({ pet: res.data });
            alert("Successfuly UPDATED!")
        })

    }

    reject(e) {

        e.preventDefault();
        let invoice = {
            invoiceId: this.state.invoiceId,
            supplierName: this.state.supplierName,
            estimatedAmount: this.state.estimatedAmount,
            unitCost: this.state.supplierName,
            materialName: this.state.materialName,
            quantity: this.state.quantity,
            approvedBy: window.sessionStorage.getItem("UserId"),
            status: "REJECTED",
        };
        console.log("DETAILS ADDED SUCCESSFUL ", invoice);
        OrderService.changeStatus(this.state.id, invoice).then(res => {
            this.setState({ "updateShow": true });
            setTimeout(() => this.setState({ "updateShow": false }), 3000)
            let pet;
            this.setState({ pet: res.data });
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
                        <h1 class="head-title">Quotations</h1>
                    </div>

                    <div style={{ marginLeft: '0rem' }}>
                        <Card style={{ width: '50rem', marginTop: '1rem', marginBottom: '1rem' }} >
                            <Row><Col>
                                <Card.Body style={{ marginLeft: '0rem' }}>
                                    <Card.Title><b>Order Details</b></Card.Title>
                                    <div style={{ textAlign: 'initial', marginLeft: '5rem' }}>
                                        <p>Order Id: Quo001</p>
                                        <p>Created By: Mr.Harsha Karunarathna</p>
                                        <p>Date: 2021-01-03</p>
                                        <p>Calculated Cost(Rs): Rs.5000</p>
                                        <p>Status: Approved</p></div>
                                </Card.Body>
                                <Card.Body style={{ marginLeft: '0rem' }}>
                                    <Card.Title><b>Requested Materials</b></Card.Title>
                                    <div style={{ textAlign: 'initial', marginLeft: '5rem' }}>
                                        <p>Cement: </p></div>
                                </Card.Body>
                                <Card.Body style={{ marginLeft: '0rem' }}>
                                    <Card.Title><b>Site Information</b></Card.Title>
                                    <div style={{ textAlign: 'initial', marginLeft: '5rem' }}>
                                        <p>Site ID: SID78H43</p>
                                        <p>Mananger Name: Mr.Harsha Karunarathna</p>
                                        <p>Phone Number: 0775897465</p>
                                        <p>Location: Colombo 10</p></div>
                                </Card.Body>
                            </Col><Col>
                                    <div style={{ marginTop: '1rem' }}>
                                        <Card.Title><b>Submitted Quotations By Supplier</b></Card.Title>
                                        <Card.Body style={{ marginLeft: '0rem', borderWidth: '0.5rem' }}>
                                            <div style={{ textAlign: 'initial', marginLeft: '2rem' }}>
                                                <p>Estimated Amount(Rs): </p>
                                                <p>Unit Cost(Rs): </p>
                                                <p>Quantity: </p>
                                            </div>
                                            <Button onClick={e => this.approve(e)} variant="primary">Approve</Button>{' '}
                                            <Button onClick={e => this.reject(e)} variant="danger">Reject</Button>
                                        </Card.Body></div>
                                </Col></Row>
                        </Card>
                    </div>
                </Row>
            </div>
        )
    }
}