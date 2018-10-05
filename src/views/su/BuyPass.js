'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Journey from "./Journey";
import Base from "./views/Statics.Common";
import {Router, Route, browserHistory} from 'react-router';
import './scss/vendors/buypass.css';


export default class BuyPass extends Component {
  static get propTypes() {
    return {

    }
  }


  constructor(props) {
    super(props);
    this.state = {
      journeys: []
    }
    //this.onSubmit = this.onSubmit(bind);
    //his.props.dispatch(push('/some/path'));
  }


  onSubmit(event){
      event.preventDefault();
      alert('You successfully purchase 7-DAY PASS.+{this.state.amount}')
  }

  render() {

    return <div id="page-wrapper">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header"> BUY 7-DAY PASS</h1>
        </div>

      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">

            </div>
            <form onSubmit={event => this.onSubmit(event)}>
            <div class="amount">
              <h3>&nbsp;&nbsp;WELCOME TO SRI LANKA! </h3>
              <h5>&nbsp;&nbsp;*Here you wiil be able to purchase 7 day pass to travel any distance for a fixed price. </h5>
              <label>Conditions Apply!</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h3 align="center">LKR 3500/-</h3>
              { //<button type="button"
                //   onClick="document.getElementById('demo').innerHTML = Date()">
                //</button>
                //<p id="demo"></p>
              }
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit">BUY</button>

            </div>

            </form>
          </div>
        </div>

      </div>
    </div>


  }

}
