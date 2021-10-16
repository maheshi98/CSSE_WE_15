import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
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

    //retrieve Quotation List
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

    navigateViewPage(e, orderId, quotationId) {
        console.log("Pet ID:", orderId);
        window.location = `/viewQuotation/${orderId}/${quotationId}`
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
                                <p>Unit Cost(Rs)</p>
                            </div>
                            <div class="table-cell">
                                <p>Quantity</p>
                            </div>
                            <div class="table-cell">
                                <p>Estimated Amount(Rs)</p>
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
                                        <p>{quotation.supplierName}</p>
                                    </div>
                                    <div class="table-cell">
                                        <p>{quotation.dateFrom} - {quotation.dateTo}</p>
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
                                            <Button onClick={e => this.navigateViewPage(e, quotation.id , quotation.orderId.id)} variant="dark" type="submit" size="sm">
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