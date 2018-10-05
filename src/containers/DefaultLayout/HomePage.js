import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,Alert} from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../../scss/vendors/HomePage.css'



class HomePage extends Component {

constructor(){
  super();
  this.state = {
    redirect3: false,
    redirect4: false,

  };

}

  setRedirect3 = () => {
    this.setState({
      redirect3: true,

    })
  }

  setRedirect4 = () => {
    this.setState({
      redirect4: true,

    })
  }
  renderRedirectB3 = () => {
    if (this.state.redirect3) {
      // window.location.reload();
      return <Redirect to='/buttons/Loan' />
    }
  }

  renderRedirectB4 = () => {
    if (this.state.redirect4) {
     window.location.reload();
      return <Redirect to='/buttons/Recharge' />
    }
  }

  render() {
    return (
      <div className="Hrec">
        <div>
          <br/>
          <h5>User ID&nbsp;&nbsp;:&nbsp;&nbsp;<label className="Hrec-label">0001</label></h5>
          <h5>User Name&nbsp;&nbsp;:&nbsp;&nbsp;<label className="Hrec-label">Ravindu Nimesh</label></h5>
          <h5>Account Balance&nbsp;&nbsp;:&nbsp;&nbsp;<label className="Hrec-label">1000.00 LKR</label></h5>
        </div>
  <br/>
  <br/>


        <div className="btn">
          <Button className="b1"><b>View History</b><b className="arrow">></b></Button>
          <br/>
          <Button className="b2"><b>Ongoing Journey</b><b className="arrow">></b></Button>
          <br/>
          {this.renderRedirectB3()}
          <Button className="b3" onClick={this.setRedirect3}><b>Account Details</b><b className="arrow">></b></Button>
          <br/>
          {this.renderRedirectB4()}
          <Button className="b4" onClick={this.setRedirect4}><b>Recharge</b><b className="arrow">></b></Button>
        </div>

      </div>
    );
  }
}


export default HomePage;
