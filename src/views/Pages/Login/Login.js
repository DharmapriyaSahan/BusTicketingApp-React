import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from "axios";
import Base from "../../Statics.Common";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      UserId: '',
      User: ''
    }
    localStorage.clear();
  }


  getUser() {
    if ((this.username != null)) {
      if ((this.password != null)) {
        axios.get(Base.API1 + '/login/' + this.password + '/' + this.username).then(res => {
          // alert(res.data.userID);
          this.setState({
            UserId: res.data.userID,
            User: res.data.userName
          })
          alert('Successfully Logged-in!!' + this.state.UserId);
          window.location.href = 'http://localhost:3000/';
          localStorage.clear();
          localStorage.setItem('userId',this.state.UserId);
        });

       // if(this.User == this.username) {


      }
      else
        alert("Please fill all the fields.");
    }
    else
      alert("Please fill all the fields.");
  }


  register() {


    window.location.href =  'http://localhost:3000/#/register';

  }

  setToNull() {
    this.username = null;
    this.password = null;
  }

    onunChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.username = event.target.value;
  }
  onpwChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.password = event.target.value;
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" id="un" autoComplete="username" onChange={event => this.onunChange(event)}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" id="un" autoComplete="current-password" onChange={event => this.onpwChange(event)}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4"  onClick={()=>{this.getUser()}}>Login</Button>




                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>

                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>To register with Bus Ticketing App Click, Register Now.!</p>
                      <Button color="primary" className="mt-3" active  onClick={()=>{this.register()}}>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
