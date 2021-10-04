import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Image, Form, CardGroup } from 'react-bootstrap';
import login from '../../assets/proc2.jpg';
import './Login.css';
//import LoginService from '../../../Services/LoginService';

export default class Login extends Component {
    constructor(props) {
        super(props);

        //         this.state = {
        //           currentUser: [],
        //           userInvalid: [],

        //           email: null,
        //           password: null,
        //           error: null,
        //           isFound: false,
        //           isValid: false,

        //         };
        //       }
        //       handleChange = this.handleChange.bind(this);
        //       shoot = this.shoot.bind(this);


        //   componentDidMount() {

        // }
        //  handleChange(event) {
        //   this.setState({
        //     [event.target.name]: event.target.value,
        //   });


        // }
        // shoot(event) {

        //   event.preventDefault();

        //   LoginService.getUser(this.state.email).then(res => {
        //     this.state.isFound = true;
        //     let user = res.data;
        //     console.log('User => ' + JSON.stringify(user));

        //     if (user == null) {
        //       this.state.isFound = false;
        //       alert("Invalid Credentials!!");
        //       return;
        //     }

        //     if (this.state.email == user.email && this.state.password == user.password) {
        //       this.state.isFound = true;
        //       window.sessionStorage.setItem("UserId", user.email);
        //       this.state.isValid = true;
        //       this.state.currentUser = user;
        //       this.props.history.push('/admin');

        //     } else {

        //       //window.sessionStorage.setItem("UserId", "NF");
        //       this.state.isValid = false;
        //     }
        //     if (this.state.isValid == true) {
        //       if (this.state.isValid == false && this.state.isFound == true) {
        //         this.state.isFound = true;
        //         alert("Password does not match with the given email!");

        //       }
        //     }

        //   });
    }
    render() {
        return (
            <div>
                <CardGroup>
                    <Row><Col>
                        <Card border="light" style={{ width: '50rem' }}>
                            <div id='createaccessory' style={{ paddingLeft: "3cm", paddingRight: "3cm" }}>
                                <div className='section-title text-center'>
                                    <h3> LOG IN</h3>
                                </div>
                                <Card.Body>
                                    {/* <Row className="landing">
                    <Col> */}
                                    <Form style={{ width: "80%", marginTop: '5%' }}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label><h5>Email address</h5></Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                            //value={this.state.email} 
                                            //onChange={this.handleChange} 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label><h5>Password</h5></Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            //value={this.state.password}
                                            //onChange={this.handleChange} 
                                            />
                                        </Form.Group>
                                        <br />
                                        <Form.Group>
                                            <Link to='/dashboard'> <Button onClick={this.shoot} variant="primary" type="submit">
                                                Log In
                                            </Button> {''}</Link>
                                        </Form.Group>
                                    </Form>
                                    {/* </Col>
                    <Col >
                        
                </Row>  */}
                                </Card.Body>
                            </div>
                        </Card></Col><Col>
                            <Card style={{ width: '50rem' }}>
                                {/* <Image src={login} thumbnail style={{ border: "none", width:"5cm" , marginTop:"-4cm"}} />   */}
                            </Card></Col></Row>
                </CardGroup>
            </div >

        )
    }
}