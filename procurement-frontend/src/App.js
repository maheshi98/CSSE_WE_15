import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './Component/Home/Footer/index';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import OrderTable from './Component/Orders/Orders';
import DashBoard from './Component/DashBoard/DashBoard';
import Details from './Component/OrderDetails/Details';
import ApprovedOrder from './Component/ApprovedOrders/ApprovedOrder';
import Quotation from './Component/Quatations/Quotations';

export default class App extends Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  render() {
      return (
          <div className= "body" style={{backgroundColor : '#ddddff'}}>
              <BrowserRouter>
                  <Switch>
                      <Route exact path='/' component={Login} />
                      <Route exact path='/dashboard' component={DashBoard} />
                      <Route exact path='/orderInfo' component={OrderTable} />
                      <Route exact path='/orderDetails/:id' component={Details} />
                      <Route exact path='/approvedOrder' component={ApprovedOrder} />
                      <Route exact path='/submitQuotation' component={Quotation} />
                  </Switch>
              </BrowserRouter>
      <Footer/>
    </div>
  );
}

}
