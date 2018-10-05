import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios  from 'axios';

let Base = require('../Statics.Common');

class BusApplication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      journeyId: '',
      date_: '',
      startTime: '',
      endTime: '',
      startLocation: '',
      endLocation: '',
      amount: '',
      status: '',
      distance: '',
      busType: ''
    }
    this.userId="";

  }


  setToNull() {
    this.userId = '';
    this.journeyId = '';  //auto generate
    this.date_ = '';          //when start
    this.startTime = '';    //when start
    this.endTime = '';        //when end
    this.startLocation = '';   //when start
    this.endLocation = '';      //when end
    this.amount = '';          //when end
    this.status = '';        //when start status=incomplete // end status=completed
    this.distance = '';    //when end
    this.busType = '';      //when start


  }


  StartJourney() {
    axios.post(Base.API1 +'/startbus', {
      userId: this.userId,
      status: this.status,
      startLocation: this.startLocation,
      busType: this.busType
    }).then(result => {
      alert("Bus Started Successfully.");
      this.setToNull();

    }).catch(err => {
      alert(err);
    })
  }


  EndJourney() {
    axios.put(Base.API1 +'/endbus', {
      userId: this.userId,
      status: this.status,
      endLocation: this.endLocation,
      distance: this.distance
    }).then(result => {
      alert("Bus Stoped Successfully.");
      this.setToNull();

    }).catch(err => {
      alert(err);
    })
  }

  onuserIdChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.userId = event.target.value;
  }
  onstartLocationChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.startLocation = event.target.value;
  }

  onendLocationChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.endLocation = event.target.value;
  }
  ondistanceChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.distance = event.target.value;
  }


  onSubmit1(event) {
    this.busType="luxury";
    this.status="Incomplete";
    if (this.userId != '') {
      this.StartJourney();
      event.preventDefault;

      document.getElementById("button1").disabled = true;
      document.getElementById("button2").disabled = false;

    }
    else{
      alert("Please Insert ID");
    }



  }


  onSubmit2(event) {
    this.status="Completed";
    if (this.userId != '') {
      this.EndJourney();
      event.preventDefault;


    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = true;
    }
    else{
      alert("Please Insert ID");
    }

  }


  render() {

    return (

      <div>

          <div className="col-lg-6">
            <br/>

            <div className="form-group">
            <label>User ID *</label>
            <input className="form-control" pattern="[0-9]*" type="number"  inputmode="numeric" onChange={event => this.onuserIdChange(event)}/>
          </div>
            <div className="form-group">
              <label>Start Location</label>
              <input className="form-control" onChange={event => this.onstartLocationChange(event)}/>
            </div>
            <Button color="secondary" id="button1" size="lg" onClick={event1 => this.onSubmit1(event1)} block>Start
              Journey</Button>

            <br/><br/><br/>

            <div className="form-group">
              <label>User ID *</label>
              <Input className="form-control" pattern="[0-9]*" type="number"  inputmode="numeric" onChange={event => this.onuserIdChange(event)}/>
            </div>
            <div className="form-group">
              <label>End Location</label>
              <input className="form-control" onChange={event => this.onendLocationChange(event)}/>
            </div>
            <div className="form-group">
              <label>Distance</label>
              <input className="form-control" pattern="[0-9]*" type="number"  inputmode="numeric" onChange={event => this.ondistanceChange(event)}/>
            </div>

            <Button color="secondary" id="button2" size="lg" onClick={event => this.onSubmit2(event)} block>End
              Journey</Button>

            <br/><br/>

          </div>

      </div>
    );
  }

}

export default BusApplication;
