import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row } from 'react-bootstrap';
import OrderService from '../../Services/OrderService';
import QuotationService from '../../Services/QuotationService';


export default class ViewQuotation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            orId: this.props.match.params.orderId,
            orderId: '',
            deadLine: '',
            totalCost: '',
            approvedBy: '',
            status: '',
            materials:'',
            order:null,
            quotation:[],

            quotationId:'',
            estimatedAmount:'',
            dateFrom:'',
            dateTo:'',
            unitCost:'',
            quantity:'',

        }

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

        OrderService.getOrderById(this.state.orId).then((res) => {
            console.log(this.state.orId)
            let order = res.data;
            this.setState({
                orderId: order.orderId,
                deadLine: order.deadLine,
                totalCost: order.totalCost,
                status: order.status,
                materials: order.materials,
            });
            console.log(this.order);
        })
            .catch(e => {
                console.log(e);
            });

            QuotationService.getQuotationById(this.state.id).then((res) => {
                console.log(this.state.id)
                let quotation = res.data;
                this.setState({
            quotationId: quotation.quotationId,
            estimatedAmount:quotation.estimatedAmount,
            dateFrom:quotation.dateFrom,
            dateTo:quotation.dateTo,
            unitCost:quotation.unitCost,
            quantity:quotation.quantity,
                });
                console.log(this.quotation);
            })
                .catch(e => {
                    console.log(e);
                });

                QuotationService.getInvoiceByOrder(this.state.orId).then((res) => {
                    let invoice = res.data;
                    console.log(invoice)
                    this.setState({
                    });
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
                    <div style={{ marginLeft: '0rem' }}>
                        <Card style={{ width: '50rem', marginTop: '1rem', marginBottom: '1rem' }} >
                            <Card.Body style={{ marginLeft: '0rem' }}>
                                <Card.Title><b>Order Details</b></Card.Title>
                                <div style={{ textAlign: 'initial', marginLeft: '15rem' }}>
                                <p>Order Id: {this.state.orderId}</p>
                                <p>Created By: Mr.Harsha Karunarathna</p>
                                <p>Date: {this.state.deadLine.split('T')[0]}</p>
                                <p>Calculated Cost: {this.state.totalCost}</p>
                                <p>Status: {this.state.status}</p></div>
                            </Card.Body>
                            <Card.Body style={{ marginLeft: '0rem' }}>
                                <Card.Title><b>Requested Materials</b></Card.Title>
                                <div style={{ textAlign: 'initial', marginLeft: '15rem' }}>
                                    <p>{this.state.materials} </p></div>
                            </Card.Body>
                            <Card.Body style={{ marginLeft: '0rem' }}>
                                <Card.Title><b>Quotation Information</b></Card.Title>
                                <div style={{ textAlign: 'initial', marginLeft: '15rem' }}>
                                    <p>Site ID: SID78H43</p>
                                    <p>Mananger Name: Mr.Harsha Karunarathna</p>
                                    <p>Phone Number: 0775897465</p>
                                    <p>Location: Colombo 10</p></div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        )
    }
}