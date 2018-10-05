'use strict';
import React, {Component} from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import PropTypes from 'prop-types';
import axios from "axios";
import Journey from "./Journey";
import Base from "../../views/Statics.Common";
import '../../scss/vendors/jhistory.css';
/*
import Card from "reactstrap/src/Card";
import CardBody from "reactstrap/src/CardBody";
import Form from "reactstrap/src/Form";
import InputGroup from "reactstrap/src/InputGroup";
import InputGroupAddon from "reactstrap/src/InputGroupAddon";
import InputGroupText from "reactstrap/src/InputGroupText";
import Input from "reactstrap/src/Input";
import Row from "reactstrap/src/Row";
import Col from "reactstrap/src/Col";
import Button from "reactstrap/src/Button";
import CardGroup from "reactstrap/src/CardGroup";
*/
class JourneyHistory extends Component {


  constructor(props) {
    super(props);
    this.state = {
      // journeyId: '',
      userId: '',
      //  date_: '',
      //  startTime: '',
      //  endTime: '',
      //  startLocation: '',
      //  endLocation: '',
      //  amount: '',
      journeys: [],
      isLoaded: false,
    }
  this.getAllJourneysByUser();

  }

  componentWillMount() {
    localStorage.getItem('userId') && this.setState({
      userId: localStorage.getItem('userId')
    })

  }


  getAllJourneysByUser() {
    axios.get(Base.API1+'/journeyhistory/'+localStorage.getItem('userId')).then(res => {
      this.setState({
        journeys:  res.data
      })

    });
  }


  render() {
    const {isLoaded} = this.state.isLoaded;
    this.journeys = this.state.journeys;
    if(isLoaded){

      return <div> No Available any Journey History yet.!</div>
    }
    else {
      return (<div id="page-wrapper">
          <div class="row">
            <div class="col-lg-12">
              <h1 className="align-middle"> Journey History</h1>
            </div>

          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">

                </div>

                <div class="panel-body">

                        {
                          this.state.journeys.map(journey =>{
                            return <Journey key={journey.journeyId} journey2={journey}/>

                          })

                        }

                </div>

              </div>

            </div>

          </div>
        </div>
      );
    }
  }

}


export default JourneyHistory;
//update(userId, journeyId, date_,startTime,endTime,startLocation, endLocation,amount) {
  // var updatedName = prompt("Please enter updated name:", name);
  //axios.put(Base.API + '/' + id, {name: updatedName}).then(results => {
    //if(results.status == 'end') {
      //this.getAllJourneys();
    //}
  //})
//}
