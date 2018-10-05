'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Journey from "./Journey";
import Base from "./views/Statics.Common";
import './scss/vendors/pjourney.css';



export default class PayJourney extends Component {
  static get propTypes() {
    return {
      journeys: PropTypes.array
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      userId:'',
      amount:'',
      journeys: []
    }
    this.findJourneyByUserId();
  }
  // <button color="secondary" class =" btn btn-primary btn-lg btn-block" id="button2" onClick={event =>this.submit2(event)} block>
  // END JOURNEY</button>
  // }

  findJourneyByUserId() {
    axios.get(Base.API1+'/journeys').then(res => {
      this.setState({
        journeys:  res.data
      });
    });
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.amount =! '') {
      this.props.payjourney({userid: this.userid});
      this.props.journeys({amount:this.amount});
    }
    else{

    }
  }

  render() {
    this.state.journeys = this.journeys;
    return <div id="page-wrapper">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header"> Journey History</h1>
        </div>

      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">

            </div>

            <div class=" journey-amount">
              <br/>
              <h5>&nbsp;&nbsp;Journey Amount: Calculating...</h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {
                //<button
               //   onClick={() => this.browserHistory.push(`/theme/PayJourney/FinalBalanceWithoutLoan`)}>PAY</button>
              }
            </div>
<br/>
            <br/>

            <div class="journey-details-1">
              <br/>
            <h5>&nbsp;&nbsp;You are about to exit from the bus</h5>
            <h5>&nbsp;&nbsp;Current Stop:&nbsp;</h5>
            <h5>&nbsp;&nbsp;At:&nbsp;&nbsp;</h5>
            </div>
            <br/>
            <br/>
            <div class="journey-details-2">
              <br/>
              <h5>&nbsp;&nbsp;Started From: </h5>
              <h5>&nbsp;&nbsp;At:&nbsp;&nbsp;</h5>
            </div>
        </div>

      </div>
    </div>
    </div>

  }

}
