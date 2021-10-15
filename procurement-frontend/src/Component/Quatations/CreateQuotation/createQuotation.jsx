import React, { Component } from 'react'
import { Row, Col, Button, Form, Card, Alert , InputGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QuotationService from '../../../Services/QuotationService';
import OrderService from '../../../Services/OrderService';

export default class Createquotation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,  
            orderId: '',
            deadLine: '',
            totalCost: '',
            status: '',
            materials:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        OrderService.getOrderById(this.state.id).then((res) => {
            let order = res.data;
            this.setState({
                orderId: order.orderId,
                deadLine: order.deadLine,
                totalCost: order.totalCost,
                status: order.status,
                materials: order.materials
                
            });
            console.log(order);
        })
            .catch(e => {
                console.log(e);
            });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }
    onSubmit(e) {
         
        e.preventDefault();
        let Quotation = {
            quotationId: this.state.quotationId,
            estimatedAmount: this.state.estimatedAmount,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            unitCost : this.state.unitCost,
            quantity : this.state.quantity,
        };
        console.log("DETAILS ADDED SUCCESSFUL ", Quotation);
        QuotationService.createQuotation(Quotation).then(res =>{
            this.props.history.push('/submitQuotation')
            if(res.data != null){
                this.setState({"show":true});
                setTimeout(() => this.setState({"show" :false}) , 3000)

            }else{
                this.setState({"show" :false})
            }

        })

    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div >
                <div id='createConference' style= {{paddingLeft : "3cm" , paddingRight : "3cm" , marginTop :'-1.5cm'}}>
                    <div className='section-title text-center'>
                        <h3>Create Quotation</h3>
                    </div>
                    <Card style={{  marginLeft:'0rem', borderWidth: '0.5rem', marginTop:'-1cm' }}>
                    <Card.Body >
                            <Card.Title><b>Order details</b></Card.Title>
                            <p>Order Id: {this.state.orderId}</p>
                            <p>Created By: Mr.Harsha Karunarathna</p>
                            <p>Date: {this.state.deadLine.split('T')[0]}</p>
                            <p>Calculated Cost: {this.state.totalCost}</p>
                            <p>Materials: {this.state.materials}</p>

                            {/* <p>Status: {this.state.status}</p> */}
                        </Card.Body>
                        </Card>
                    <Row className="landing">
                        <Col >
                            <Form onSubmit={this.onSubmit} style={{ width: "80%", marginLeft: "10%" }}>
                                <Form.Group >
                                    <Form.Label>Quotation ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confTopic"
                                        name="quotationId"
                                        placeholder="ID"
                                        value={this.state.quotationId}
                                        onChange={this.onChange} />
                                        
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Estimated Amount</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="confTopic"
                                        name="estimatedAmount"
                                        placeholder="Amount"
                                        value={this.state.estimatedAmount}
                                        onChange={this.onChange} />
                                        
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Date From</Form.Label>
                                    <Form.Control
                                        type="date"
                                        id="dateFrom"
                                        name="dateFrom"
                                        placeholder="MM/YY"
                                        value={this.state.dateFrom}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Date To</Form.Label>
                                    <Form.Control
                                        type="date"
                                        id="dateTo"
                                        name="dateTo"
                                        placeholder="MM/YY"
                                        value={this.state.dateTo}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Unit Cost</Form.Label>
                                    <Form.Control
                                         type="text"
                                        id="exdate"
                                        name="unitCost"
                                        placeholder="Rs 100"
                                        value={this.state.unitCost}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                         type="text"
                                        id="exdate"
                                        name="quantity"
                                        placeholder="1"
                                        value={this.state.quantity}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button type="submit" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Submit</Button> {''}
                                    <Link to='/'>  <Button type="back" style={{ backgroundColor: '#37474F', paddingRight: 10 }}>Go Back</Button></Link>
                                </Form.Group>
                            </Form>
                        </Col>
                        
                    </Row>
                </div >
            </div >
        )
    }
}
