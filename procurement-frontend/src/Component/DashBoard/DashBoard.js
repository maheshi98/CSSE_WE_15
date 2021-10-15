import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FaStethoscope, FaDog } from 'react-icons/fa';
import { GiDogHouse, GiDogBowl } from 'react-icons/gi';
import { BsTable, BsList } from "react-icons/bs";
import './DashBoard.css';

export default class Dashboard extends Component {
    render() {
        return (

            <div className="container">
                <Row style={{ marginBottom: "5%" }}>
                    <div class="text-center">
                        <h1 class="head-title">ADMIN DASHBOARD</h1>
                    </div>
                    <div class="container-fluid auto-space auto-space-vertical pt-0" style={{marginLeft:'10rem'}}>
                        <div class="row">
                            <div class="four col-sm-6 col-md-3 my-2">
                                <div class="counter-box colored">
                                    <i class="fa fa-calendar"><BsList /></i> <span class="counter">20</span>
                                    <p>Qutations</p>
                                    <Link to='/submitQuotation'> <Button onClick={this.shoot} variant="dark" type="submit">
                                                View
                                            </Button> {''}</Link>
                                </div>
                            </div><br/>
                            <div class="four col-sm-6 col-md-3 my-2">
                                <div class="counter-box colored">
                                    <i class="fa fa-group"><BsTable /></i> <span class="counter">30</span>
                                    <p>Pending Order List</p>
                                    <Link to='/orderInfo'> <Button onClick={this.shoot} variant="dark" type="submit">
                                                View
                                            </Button> {''}</Link>
                                </div>
                            </div><br/>
                            <div class="four col-sm-6 col-md-3 my-2">
                                <div class="counter-box colored">
                                    <i class="fa fa-github"><BsList/></i> <span class="counter">40</span>
                                    <p>Approved Order List</p>
                                    <Link to='/approvedOrder'> <Button onClick={this.shoot} variant="dark" type="submit">
                                                View
                                            </Button> {''}</Link>
                                </div>
                            </div>
                            </div>
                            </div>
                </Row>
            </div>
        );
    }
}
