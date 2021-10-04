import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup, Table } from 'react-bootstrap';

import './Orders.css'


export default class OrderTable extends Component {

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
                                <p>Deadline Period</p>
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

                        {/* Table Data Row End */}
                    </div>
                </Row>
            </div>
        )
    }
}