import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row ,Alert} from 'reactstrap';

import '../../../scss/vendors/popup.css'
class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.pin}</h1>
          <Button onClick={this.props.closePopup}>CLOSE</Button>
        </div>
      </div>
    );
  }
}

export default Popup;
