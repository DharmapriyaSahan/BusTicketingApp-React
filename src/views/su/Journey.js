'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

export default class Journey extends Component {

  static get PropTypes() {
    return {
      journey2: PropTypes.object,

    }
  }

  constructor(props) {
    super(props);
    this.journey2 = this.props.journey2;

  }


  render() {
    console.log(this.journey2);
    return <div>


      <CardGroup>
      <Card>

      <CardBody className="text-left" >
      <div>
      <h4>{this.journey2.journeyId}</h4>
        <p><label className="font-weight-bold">Start Date&nbsp; : &nbsp; </label>{this.journey2.date_}</p>
        <p><label className="font-weight-bold">Start&nbsp; :&nbsp;  </label>{this.journey2.startLocation}</p>
        <p><label className="font-weight-bold">  </label>{this.journey2.startTime}</p>
        <p><label className="font-weight-bold">End &nbsp;: &nbsp; </label>{this.journey2.endLocation}</p>
        <p><label className="font-weight-bold">   </label>{this.journey2.endTime}</p>
        <p><label className="font-weight-bold">Amount &nbsp; : &nbsp; </label>{this.journey2.amount}</p>
        <p><label className="font-weight-bold">Bus Type &nbsp; : &nbsp; </label>{this.journey2.busType}</p>
  </div>
  </CardBody>
  </Card>
      </CardGroup>
    </div>

  }
}
