import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup, Table } from 'react-bootstrap';
import OrderService from '../../Services/OrderService';
import './ApprovedOrder.css';


export default class ApprovedOrder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.retrieveApproveOrderList = this.retrieveApproveOrderList.bind(this); 

    //     this.state = {
    //         ApproveOrderDetails: []
    //     }
    // }

    // componentDidMount() {
    //     this.retrieveApproveOrderList();
    // }

    // retrieveApproveOrderList = () => {
    //     OrderService.getApprovedOrders().then(response => {
    //         this.setState({
    //             orderDetails: response.data
    //         });
    //         console.log(response.data);
    //     })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

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
                                <p>Approved By</p>
                            </div>
                            <div class="table-cell">
                                <p>Approved Date</p>
                            </div>
                            <div class="table-cell">
                                <p>Site Id</p>
                            </div>
                            <div class="table-cell">
                                <p>Actions</p>
                            </div>
                        </div>
                        {/* Table Header End */}
                        {/* Table Data Row Start */}
                        {/* {this.state.ApproveOrderDetails.map(
                            approveOrder =>
                                <div class="table-row" key={approveOrder.id}>
                                    <div class="table-cell first-cell">
                                    <p>{approveOrder.orderId}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{approveOrder.itemName}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{approveOrder.deadLine}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{approveOrder.totalCost}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{approveOrder.status}</p>
                                    </div>
                                    <div class="table-cell last-cell">
                                    <Button variant="dark" type="submit">
                                                View & Create Quotation
                                            </Button>
        
                                    </div>
                                </div>
                                )} */}
                        {/* Table Data Row End */}
                    </div>
                </Row>
            </div>
        )
    }
}