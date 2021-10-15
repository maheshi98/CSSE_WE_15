import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup, Table } from 'react-bootstrap';
import QuotationService from '../../Services/QuotationService';
import './Quotations.css';


export default class Quotation extends Component {
    constructor(props) {
        super(props);
        this.retrieveQuotationList = this.retrieveQuotationList.bind(this);

        this.state = {
            quotationDetails: []
        }
    }

    componentDidMount() {
        this.retrieveQuotationList();
    }

    retrieveQuotationList = () => {
        QuotationService.getAllQuotation().then(response => {
            this.setState({
                quotationDetails: response.data
            });
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            });
    }

    navigateViewPage(e, orderId) {
        console.log("Pet ID:", orderId);
        window.location = `/viewQuotation/${orderId}`
    }
    render() {
        return (
            <div className="container">
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Submitted Quotations</h1>
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
                                <p>Date Period</p>
                            </div>
                            <div class="table-cell">
                                <p>Unit Cost</p>
                            </div>
                            <div class="table-cell">
                                <p>Quantity</p>
                            </div>
                            <div class="table-cell">
                                <p>Estimated Amount</p>
                            </div>
                            <div class="table-cell">
                                <p>Actions</p>
                            </div>
                        </div>
                        {/* Table Header End */}
                        {/* Table Data Row Start */}
                        {this.state.quotationDetails.map(
                            quotation =>
                                <div class="table-row" key={quotation.id}>
                                    <div class="table-cell first-cell">
                                        <p>{quotation.quotationId}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{'Saman Perea'}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{quotation.dateFrom.split('T')[0]} - {quotation.dateTo.split('T')[0]}</p>
                                    </div>
                                    <div class="table-cell ">
                                        <p>{quotation.unitCost}</p>
                                    </div>
                                    <div class="table-cell ">
                                        <p>{quotation.quantity}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{quotation.estimatedAmount}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{quotation.status}</p>
                                    </div>
                                    <div class="table-cell last-cell">
                                        <div style={{ marginLeft: '-7rem' }}>
                                            <Button onClick={e => this.navigateViewPage(e, quotation.id)} variant="dark" type="submit" size="sm">
                                                View Quotation
                                            </Button>
                                        </div>
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