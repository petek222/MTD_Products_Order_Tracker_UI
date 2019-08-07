import React from 'react';
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar";

const infoStyle = {
    fontFamily: 'Helvetica'
  };

// This 'progess bar' houses the labels for each step of the tracker that sits above it
export default class StepProgressBarLabels extends React.Component {

    render() {
      return (
  
        <ProgressBar
         percent={0}
         width = {1300}
         unfilledBackground="linear-gradient(to right, #FEFEFE, #FEFEFE)"
         >
  
    <Step>
      {({ accomplished, index }) => (
        <div style={infoStyle} class='labelText'>
          FTP
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished, index }) => (
        <div style={infoStyle} class='labelText'>
          Client
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished = true, index }) => (
        <div style={infoStyle} class='labelText'>
          COM Offline 
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished = true, index }) => (
        <div style={infoStyle} class='labelText'>
          Payment 
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished, index }) => (
        <div style={infoStyle} class='labelText'>
          Epcot
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished, index }) => (
        <div style={infoStyle} class='labelText'>
          COM Open
        </div>
      )}
    </Step>
  
    <Step>
      {({ accomplished, index }) => (
        <div style={infoStyle} class='labelText'>
          COM History
        </div>
      )}
    </Step>
  
  </ProgressBar>
  
      );
    }
  }
  