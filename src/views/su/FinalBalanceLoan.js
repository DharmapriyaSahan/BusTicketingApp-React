'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Journey from "./Journey";
import Base from "./views/Statics.Common";
import './scss/vendors/balancewithloan.css';


export default class FinalBalanceLoan extends Component {
  static get propTypes() {
    return {
      journeys: PropTypes.array
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      journeys: []
    }
    this.findJourneyByUserIdAndStatus();
    this.findAccountBalanceByUserId()
  }

  findJourneyByUserIdAndStatus() {
    axios.get(Base.API1 + '/journeys').then(res => {
      this.setState({
        journeys: res.data
      });
    });
  }

  findAccountBalanceByUserId(){
    axios.get(Base.API1 + 'journeys').then(res =>{
      this.setState({
        journeys: res.data
      });
    });
  }

  render() {
    this.journeys = this.journeys;
    return <div id="page-wrapper">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header"> Journey Total</h1>
        </div>

      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">

            </div>

            <div class="balance">
              <br/>
              <h5>&nbsp;Journey Total: </h5>
              <h5>&nbsp;Account Balance: </h5>
              <label>&nbsp;*Please note that you need to recharge your account in-order to get on board next time.</label>
            </div>
            <br/>
            <div class="location">
              <br/>
              <h5>&nbsp;From : </h5>
              <h5>&nbsp;To :</h5>
            </div>
            <br/>
            <div class="time">
              <br/>
              <h5>&nbsp;Started time:</h5>
              <h5>&nbsp;End Time:</h5>
            </div>

          </div>
        </div>

      </div>
    </div>


  }

}
