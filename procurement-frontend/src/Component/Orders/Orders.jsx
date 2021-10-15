import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup, Table } from 'react-bootstrap';
import OrderService from '../../Services/OrderService';
import './Orders.css'


export default class OrderTable extends Component {
    constructor(props) {
        super(props);
        this.retrieveOrderList = this.retrieveOrderList.bind(this); 

        this.state = {
            orderDetails: []
        }
    }

    componentDidMount() {
        this.retrieveOrderList();
    }

    retrieveOrderList = () => {
        OrderService.getAllOrders().then(response => {
            this.setState({
                orderDetails: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    navigateViewPage(e, orderId) {
        console.log("Pet ID:", orderId);
        window.location = `/orderDetails/${orderId}`
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Order Information</h1>
                    </div>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                        </Col>
                    </Row>
                    <div class="table-box">
                        {/* Table Header Start */}
                        <div class="table-row table-head">
                            <div class="table-cell first-cell">
                                <p>Order Id</p>
                            </div>
                            <div class="table-cell">
                                <p>Created By</p>
                            </div>
                            <div class="table-cell">
                                <p>Deadline</p>
                            </div>
                            <div class="table-cell">
                                <p>Total Cost(Rs)</p>
                            </div>
                            <div class="table-cell">
                                <p>Status</p>
                            </div>
                            <div class="table-cell">
                                <p>Actions</p>
                            </div>
                        </div>
                        {/* Table Header End */}
                        {/* Table Data Row Start */}
                        {this.state.orderDetails.map(
                            order =>
                                <div class="table-row" key={order.id}>
                                    <div class="table-cell first-cell">
                                    <p>{order.orderId}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{order.itemName}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{order.deadLine.split('T')[0]}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{order.totalCost}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{order.status}</p>
                                    </div>
                                    <div class="table-cell last-cell">
                                    <Button onClick={e => this.navigateViewPage(e, order.id)} variant="dark" type="submit">
                                                View
                                            </Button>
        
                                    </div>
                                </div>
                                )}
                        {/* Table Data Row End */}
                    </div>
                </Row>
            </div>
        )
    }
}