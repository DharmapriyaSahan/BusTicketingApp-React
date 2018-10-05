import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from "axios";
import Base from "../../../views/Statics.Common";


class Register extends Component {


  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      usertype: '',
      uname: '',
      identityNumber: '',
      mobileNumber: '',
      age: '',
      gender: '',
      accNo: '',
      balance: ''
    }

  }


  AddUser() {
    axios.post(Base.API1 +'/user', {
      userName: this.userName,
      password: this.password,
      usertype: 'local',
      uname:  this.uname ,
      identityNumber:  this.identityNumber,
      mobileNumber:  this.mobileNumber ,
      age: this.age,
      gender:   this.gender,
      accNo:  this.accNo,
      balance:  ''
    }).then(result => {
      alert("Registration Successfully.");
      this.setToNull();

    }).catch(err => {
      alert(err);
    })
  }

  setToNull() {
    this.userName = '',
      this.password = '',
      this.usertype = 'local',
      this.uname =  '',
      this.identityNumber =  '',
      this.mobileNumber =  '',
      this.age =  '',
      this.gender =  '',
      this.accNo = '',
      this.balance =  ''
  }
  OnAddclick(){
    this.AddUser();
  }

  Back(){
     window.location.href =  'http://localhost:3000/#/login';
  }

  onaccNoChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.accNo = event.target.value;
  }
  onGenderChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.gender = event.target.value;
  }
  onAgeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.age = event.target.value;
  }
  onMobileChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.mobileNumber = event.target.value;
  }
  onIdentityChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.identityNumber = event.target.value;
  }
  onFullNameChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.uname = event.target.value;
  }
  onPasswordChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.password = event.target.value;
  }
  onUsernameChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.userName = event.target.value;
  }



  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">

                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" onChange={event => this.onUsernameChange(event)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" onChange={event => this.onPasswordChange(event)}/>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Full Name" autoComplete="Full Name" onChange={event => this.onFullNameChange(event)} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Identity Number" autoComplete="Identity" onChange={event => this.onIdentityChange(event)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Mobile Number" autoComplete="Mobile" onChange={event => this.onMobileChange(event)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Age" autoComplete="Age" onChange={event => this.onAgeChange(event)}/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Gender" autoComplete="Gender" onChange={event => this.onGenderChange(event)} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="accNo" autoComplete="accNo" onChange={event => this.onaccNoChange(event)}/>
                    </InputGroup>

                    <Button color="success" block onClick={()=>{this.OnAddclick()}}>Create Account</Button>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block onClick={()=>{this.Back()}}><span>Back To Login</span></Button>
                    </Col>

                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
