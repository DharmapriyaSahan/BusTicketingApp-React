import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,Alert} from 'reactstrap';
import axios  from 'axios';

import '../../../scss/vendors/Loan.css'
import '../../../scss/vendors/popup.css'

class Loan extends Component {
  constructor() {
    super();

    this.state = {
        balance: 0,
       uname: '',
      startLocation:'',
      endLocation:''
    };



  }

  componentDidMount() {

    axios.get('http://localhost:8080/userone/2')
      .then(result => {
        this.setState({
          balance : result.data.balance ,
          uname : result.data.uname

        })
      });

    axios.get('http://localhost:8080/journeylatest/0008')
      .then(result => {
        this.setState({
          startLocation : result.data.startLocation ,
          endLocation : result.data.endLocation


        })
      });



    axios.put('http://localhost:8080/journeydone',{
      "userId":"0012",
      "status":"Success"})
      .then(result => {

      });




  }




  render() {


    return (

      <div>
        <Container>
          <div className="rec">
            <br/>
            <h6>Journey Total&nbsp;&nbsp;:&nbsp;&nbsp;<label className="rec-label">{this.state.uname}</label></h6>
            <h6>Account Balance&nbsp;&nbsp;:&nbsp;&nbsp;<label className="rec-label">{this.state.balance}</label></h6>
            <br/>
            <h7>*Please note that you need to recharge your &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;account in order to get on board next time</h7>

          </div>

          <br/>
          <br/>
          <div className="rec-2">
            <br/>
            <h5>From <label>{this.state.startLocation}</label></h5>
            <h5>To <label>{this.state.endLocation}</label></h5>
          </div>
        </Container>
      </div>
    );
  }
}

export default Loan;
