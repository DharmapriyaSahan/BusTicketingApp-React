'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios, {AxiosRequestConfig as res} from "axios";
import Journey from "./Journey";
import Base from "./views/Statics.Common";
import {Router, Route, browserHistory} from 'react-router';
import './scss/vendors/initialpayment.css';


export default class InitialPayment extends Component {
  static get propTypes() {
    return {
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      amount:'',

    }
  }

  onSubmit(event){
    event.preventDefault();
    alert(res.data.amount);
  }
  onamountChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.amount = event.target.value;
  }

  render() {

    return <div id="page-wrapper">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">Initial Deposit</h1>
        </div>

      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">

            </div><form onSubmit={event => this.onSubmit(event)}>

            <div class="amount">
              <br/>
              <h5>&nbsp;&nbsp;*Please enter your deposit amount &nbsp;&nbsp; below. </h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <h5 align="center">LKR<input type="text" onChange={event => this.onamountChange(event)}/></h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              { //<button type="button"
                //   onClick="document.getElementById('demo').innerHTML = Date()">
                //</button>
                //<p id="demo"></p>
              }
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit">PAY</button>
            </div>
            </form>
          </div>
        </div>

      </div>
    </div>


  }

}


