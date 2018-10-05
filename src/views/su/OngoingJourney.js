'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios, {AxiosRequestConfig as res} from "axios";
import Base from "../../views/Statics.Common";
import '../../scss/vendors/ongoing.css';
import Journey from "./Journey";

class OngoingJourney extends Component{


  constructor(props) {
      super(props);
   // this.journey1 = this.props.journey1;
    this.state = {
      //journeyId: '',
     // startLocation: '',
     // startTime: '',
      journey: '',
      isLoaded: false,
    }
   // this.journeys = this.props.journeys;
    this.showJourney();
    // this.showJourneyHistory = this.props.showJourneyHistory;
  }

  showJourney() {
    axios.get(Base.API1+'/journeyongoing/'+localStorage.getItem('userId')).then(res => {
    // alert(res.data.startTime);
      this.setState({
        journey: res.data
      })

      if (res.data!='')
      {
        this.setState({
          isLoaded: true
        })
      }
    }).catch(err =>{
      alert(err);
    })
  }



  render() {
    const {isLoaded, journey} = this.state;
    const time = this.state.journey.startTime;
    const startLoc = this.state.journey.startLocation;
    if(!isLoaded){
      return <div>No any Journey On-Going...</div>
    }
    else {


      //let sttime = res.data.startTime;
      //console.log(this.journey1);
      //this.journey1.starttime = this.starttime;
      return (

        <div>
          <div className="rec">
            <br/>

            <label>&nbsp;&nbsp;On Board... </label><br/>
            <label>&nbsp;&nbsp;Started From: </label><label>{startLoc}</label><br/>
            <label>&nbsp;&nbsp;&nbsp;At:</label><label>{time}</label><br/>

          </div>

          <div className="next-stop">
            <br/>
            <h4>&nbsp;&nbsp;&nbsp;&nbsp; Next Stop: &nbsp;&nbsp;&nbsp;&nbsp;</h4>
          </div>

          <div className="previous-stop">
            <br/>
            <h4>&nbsp;&nbsp;&nbsp;&nbsp; Previous Stop: &nbsp;&nbsp;&nbsp;&nbsp;</h4>
          </div>


        </div>
      );
    }
  }

}

export default OngoingJourney;
