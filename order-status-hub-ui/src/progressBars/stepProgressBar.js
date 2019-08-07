import React from 'react';
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";

const infoStyle = {
    fontFamily: 'Helvetica'
  };

export default class StepProgressBar extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        FTPStatus: props.FTP,
        client: props.client,
        comOffline: props.comOffline,
        payment: props.payment,
        epcot: props.epcot,
        comOpen: props.comOpen,
        comHistorical: props.comHistorical
      };
    }
    
    render() {
      return (
  
        <ProgressBar
         percent= {this.props.progress}
         width = {1300}
         filledBackground = "repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)"
         >
  
    <Step>
      {({ accomplished_one = this.props.FTP, index }) => (
        <div
          style={infoStyle}
          className={`indexedStep ${accomplished_one ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished_two = this.props.client, index }) => (
        <div
          style={infoStyle}
          className={`indexedStep ${accomplished_two ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished_three = this.props.comOffline, index }) => (
        <div
          style={infoStyle}
          className={`indexedStep ${accomplished_three ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished_four = this.props.payment, index }) => (
        <div
          style={infoStyle}
          className={`indexedStep ${accomplished_four ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished_five = this.props.epcot, index }) => (
        <div
          style={infoStyle}
          className={`indexedStep ${accomplished_five ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished_six = this.props.comOpen, index }) => (
        <div
          style={infoStyle}
          className={`indexedStep ${accomplished_six ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished_seven = this.props.comHistorical, index }) => (
        <div
          style={infoStyle}
          className={`indexedStep ${accomplished_seven ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
      )}
    </Step>
  
  </ProgressBar>
  
      );
    }
  }