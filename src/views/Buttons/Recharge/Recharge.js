import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,Alert} from 'reactstrap';
import axios  from 'axios';
import Popup from './Popup';

import '../../../scss/vendors/rechrge.css'
import '../../../scss/vendors/popup.css'


class Recharge extends Component {
  constructor() {
    super();



    this.state = {
      showPopup: false,
      fields: {},
      errors: {},

      AvailableBal:'1000.00',
      AccNo:'802 205 4256',
      mobilenumber:null,
      amount:null,
      pin:null,

    };

  }




  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }




  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Mobile number
    if(!fields["mobilenumber"]){
      formIsValid = false;
      errors["mobilenumber"] = "*";
    }


    if(typeof fields["mobilenumber"] !== "undefined"){
      if(!fields["mobilenumber"].match(/^[0][7][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/)){
        formIsValid = false;
        errors["mobilenumber"] = "*Please provide properly formatted number*";
      }
    }

    //Amount
    if(!fields["amount"]){
      formIsValid = false;
      errors["amount"] = "*";
    }


    //PIN
    if(!fields["pin"]){
      formIsValid = false;
      errors["pin"] = "Please insert pin code";
    }

    if(typeof fields["pin"] !== "undefined"){
      if(!fields["pin"].match(/^[1][1][1][1]$/)){
        formIsValid = false;
        errors["pin"] = "*Please provide valid pin*";
      }
    }

    this.setState({errors: errors});

    return formIsValid;
  }
  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Your account has been recharged successfully")
    }else{
      alert("Please insert all details and proceed.")
    }

  }

  handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});


  }




  render() {

    return (
      <div className="rec">

        <form onSubmit= {this.contactSubmit.bind(this)}  >
        <Container >

          <div  className="rec-contain">
            <br/>
              <h5>Available Balance&nbsp;&nbsp;:&nbsp;&nbsp;<label className="rec-label">{this.state.AvailableBal}</label></h5>
              <h5>Account&nbsp;&nbsp;:&nbsp;&nbsp;<label className="rec-label">{this.state.AccNo}</label></h5>
          </div>

          <div className="rec-text">
            <label>Mobile Number:</label><label className="error" style={{color: "red"}}>{this.state.errors["mobilenumber"]}</label>
            <Input type="number" pattern="[0-9]*"
                   inputmode="numeric" ref="mobilenumber"
                   onChange={this.handleChange.bind(this, "mobilenumber")}
                   value={this.state.fields["mobilenumber"]} />

            <label>Recharge Amount:</label><label className="error" style={{color: "red"}}>{this.state.errors["amount"]}</label>
            <Input type="number" pattern="[0-9]*" inputmode="numeric"  ref="amount" onChange={this.handleChange.bind(this, "amount")} value={this.state.amount} />
            <Button className="code-button" onClick={this.togglePopup.bind(this)}> GET CODE</Button>
          </div>


          <div className="Rrec-pin">
            <p>Please enter the 4 digit code to send your phone to proceed recharge</p>
            <Input type="number" pattern="[0-9]*" inputmode="numeric"  ref="pin" onChange={this.handleChange.bind(this, "pin")} value={this.state.pin}  />
            <label className="err-pin" style={{color: "red"}}>{this.state.errors["pin"]}</label>

          </div>



          <Button type="submit" className="Rpro-button">Proceed</Button>


          {this.state.showPopup ?

            <Popup
              pin='1111'
              closePopup={this.togglePopup.bind(this)}
            />
            : null

          }

          <br/>
        </Container>
        </form>
      </div>

    );
  }
}



export default Recharge;
