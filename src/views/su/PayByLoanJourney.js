'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Journey from "./Journey";
import Base from "./views/Statics.Common";
import './scss/vendors/ploanjourney.css';
import {Router, Route, browserHistory} from 'react-router';


export default class PayByLoanJourney extends Component {
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
    this.findAccountBalanceByUserId();
    //his.props.dispatch(push('/some/path'));
  }

  findJourneyByUserIdAndStatus() {
    axios.get(Base.API1 + '/journeys').then(res => {
      this.setState({
        journeys: res.data
      });
    });
  }

  submit(){

  }
  findAccountBalanceByUserId(){
    axios.get(Base.API1 + 'journeys').then(res =>{
      this.setState({
        journeys: res.data
      });
    });
  }

  render() {

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

            <div class="amount">
              <br/>
              <h5>&nbsp;&nbsp;Journey Total: </h5>
              <h5>&nbsp;&nbsp;Account Balance: </h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              { //<button type="button"
                   //   onClick="document.getElementById('demo').innerHTML = Date()">
              //</button>
              //<p id="demo"></p>
                }
              <button onClick={() => browserHistory.push(`/theme/FinalBalanceLoan`)}>GET A LOAN</button>

            </div>

            </div>
        </div>

      </div>
    </div>


  }

}
