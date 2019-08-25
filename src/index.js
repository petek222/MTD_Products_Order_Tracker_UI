// ***********************************
// Main Application Imports
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "react-step-progress-bar/styles.css";
import StepProgressBar from './progressBars/stepProgressBar';
import StepProgressBarLabels from './progressBars/stepProgressBarLabels';
import ReactLoading from "react-loading";
import orderTabList from './tabs/orderTabList';
import tabList from './tabs/tabList';

// ***********************************
// Parser Imports 

import parseFTP from './parsers/ftpParser';
import parseClient from './parsers/clientParser';
import parseEpcot from './parsers/epcotParser';
import parseOffline from './parsers/offlineParser';
import parseOpen from './parsers/openParser';
import parseHistory from './parsers/historyParser';
import parsePayment from './parsers/paymentParser';
import parseOrderInfo from './parsers/orderInfoParser';

// ***********************************
// Style Imports 

import "react-tabs/style/react-tabs.css";
import "./index.css";
import indexedStep from './index.css';
import unfilledBackground from './index.css';
import upbar from './index.css'
import labelText from './index.css'
import ftpdata from './index.css'
import orderData from './index.css'
import button from './index.css'
import input from './index.css'
import loading from './index.css'
import head from './index.css'
import mobile from './index.css'

// ***********************************

// For enhancing the UI:
  // Create a timeout display status for issues with backend/server, loading, etc.
// Order no. to test: D0001605S1. The 'main' method that kicks off the UI build is at the bottom of the codebase.


// maintains font style for use in components: I love Helvetica
const infoStyle = {
  fontFamily: 'Helvetica'
};

class App extends React.Component {

  // Function that does bulk of processing upon submission of an order number to the backend 
  processSubmit = (orderData, orderNumber) => {

        console.log(orderData);
        console.log("JSON: " + orderData);

        let Json = orderData;

        // boolean status vars
        let FTPStatus;
        let clientStatus;
        let comOfflineStatus; 
        let paymentStatus;
        let epcotStatus;
        let comOpenStatus;
        let comHistoricalStatus;

        // var to hold tabs object 
        let tabs;

        // percentage progress var
        let progressPercentage = 0;

        // parsed-text vars
        let ftpParsed;
        let clientParsed;
        let orderInfoParsed;
        let epcotParsed;
        let paymentParsed;
        let offlineParsed;
        let openParsed;
        let historyParsed;         



        
        // **********************************
        // FTP Data Parser
        if (Json['ftpData']['exists'] === true) {
          FTPStatus = true;
          progressPercentage = 14.2857;
        }
        else {
          FTPStatus = false;
        }
        ftpParsed = parseFTP(Json);
        // **********************************




        // **********************************
        // Order-Service-Client Data Parser
        if (Json['clientResults']) {
          clientStatus = true;
          progressPercentage = 28.5714;
          clientParsed = parseClient(Json);
          orderInfoParsed = parseOrderInfo(JSON.parse(Json['clientResults']['json'])); // call parses general order information
        }
        else {
          clientStatus = false;
        }
        // **********************************




        // **********************************
        // COM Offline Load Data Parser
        //
        // CHECK CONDTIONAL: should set offline status (ie. tracker point) to success/green if the order has been moved from offline to open/history
        if (Json['comOfflineData']) {
          comOfflineStatus = true;

          // These flags correspond to each subtable
          let offlineOrderHeader = true;
          let offlineOrderDetail = true;

          progressPercentage = 42.8571; 

          if (!Json['comOfflineData']['orderHeader']) {
            offlineOrderHeader = false;
          }

          if (!Json['comOfflineData']['orderDetail']) {
            offlineOrderDetail = false;
          }
          offlineParsed = parseOffline(Json, offlineOrderHeader, offlineOrderDetail);
        }
        else {
          comOfflineStatus = false; 
        }
        // **********************************




        // **********************************
        // Payment Service Data Parser
        if (Json['paymentResults']['chaseAuthInfo']) {
          paymentStatus = true;
          progressPercentage = 57.1428;
          paymentParsed = parsePayment(Json);
        }
        else {
          paymentStatus = false;
        }
        // **********************************




        // **********************************
        // Epcot Data Parser
        if (Json['epcotResults']) {
          epcotStatus = true;
          progressPercentage = 71.4285;
          epcotParsed = parseEpcot(Json);
        }
        else {
          epcotStatus = false;
        }
        // **********************************
        



        // **********************************
        // COM Open Data Parser
        if (Json['comOpenData']) {
          comOpenStatus = true;
          progressPercentage = 85.7142;
          
          let openOrderDetail = true;
          let openOrderHeader = true;
          let openShipmentHeader = true;

          if (!Json['comOpenData']['orderDetail']) {
            openOrderDetail = false;
          }

          if (!Json['comOpenData']['orderHeader']) {
            openOrderHeader = false;
          }

          if (!Json['comOpenData']['shipmentHeader']) {
            openShipmentHeader = false;
          }
          openParsed = parseOpen(Json, openOrderDetail, openOrderHeader, openShipmentHeader);
        }
        else {
          comOpenStatus = false;
        }
        // **********************************




        // **********************************
        // COM History Data Parser
        if (Json['comHistoryData']) {
          comHistoricalStatus = true;
          progressPercentage = 100;

          let historyOrderDetail = true;
          let historyOrderHeader = true;
          let historyShipmentHeader = true;

          if (!Json['comHistoryData']['orderDetail']) {
            historyOrderDetail = false;
          }

          if (!Json['comHistoryData']['orderHeader']) {
            historyOrderHeader = false;
          }

          if (!Json['comHistoryData']['shipmentHeader']) {
            historyShipmentHeader = false;
          }
          historyParsed = parseHistory(Json, historyOrderDetail, historyOrderHeader, historyShipmentHeader);
        }
        else {
          comHistoricalStatus = false;
        }
        // **********************************




        // **********************************
        // Other UI Renders
        //
        // Creates Notification if order originally placed in Epcot 
        if (epcotStatus && !FTPStatus && !clientStatus) {
          ReactDOM.render(<h4 style={infoStyle}>{'Note: This order was originally placed in Epcot'}</h4>, document.getElementById('epcotCheck'));
        }

        // Render proper set of tabs depending on available data
        if (Json['clientResults']) {
          tabs = orderTabList(FTPStatus, ftpParsed, clientParsed, offlineParsed, paymentParsed, epcotParsed, openParsed, historyParsed, orderInfoParsed);
        }

        else {
          tabs = tabList(FTPStatus, ftpParsed, clientParsed, offlineParsed, paymentParsed, epcotParsed, openParsed, historyParsed);
        }
        // **********************************




        // **********************************
        // Large bulk of renders displays progress bar(s), new searchbox, and parsed data as desired 
        ReactDOM.render(<Form onSubmit={this.processSubmit}/>, document.getElementById('searchbox'));
        ReactDOM.render(<h3 style={infoStyle} className="head">{'Information for Order Id: ' + orderNumber}</h3>, document.getElementById('orderNum'));
        ReactDOM.render(<h5 style={infoStyle} className ="mobile">{'Note: If on mobile, information is below tracker'}</h5>, document.getElementById('mobileInfo'));
        ReactDOM.render(<StepProgressBar progress={progressPercentage} FTP={FTPStatus} client={clientStatus} epcot={epcotStatus} payment={paymentStatus} comOffline={comOfflineStatus} comOpen={comOpenStatus} comHistorical={comHistoricalStatus} />, document.getElementById('tracker'));
        ReactDOM.render(<StepProgressBarLabels />, document.getElementById('trackerLabels'));
        ReactDOM.render(tabs, document.getElementById('orderData'));
        // **********************************
  };

  render() {
    return(
      <div>
        <Form onSubmit={this.processSubmit} />
      </div>
    );
  }
}

// Make sure axios call to backend is up-to-date
class Form extends React.Component {
  state = {orderNumber: ''}

  handleSubmit = async(event) => {
    event.preventDefault();

    // Helper call cleans up DOM
    resetDOM();

    ReactDOM.render(<Status />, document.getElementById('processing'));

    // Call to the backend order service, assuming server has been deployed
    //
    // To make this UI work without the backend call, values will have to be hardcoded in
    const resp = await axios.get(`http://localhost:8080/mtd-order-lookup-service/getOrderInfo?orderNumber=${this.state.orderNumber}`);

    ReactDOM.unmountComponentAtNode(document.getElementById('processing'));
    this.props.onSubmit(resp.data, this.state.orderNumber);
    this.setState({orderNumber: ''});

  };

  render() {
    return (
      <form align = "center" onSubmit={this.handleSubmit}>
      <span className="formtext"></span>
      <input
      className = "input"
      type ="text"
      value={this.state.orderNumber}
      onChange={event => this.setState({orderNumber: event.target.value})}
      placeholder="Enter Order Number"
      required
      />
      <button className = "button">Process</button>
      </form>
    );
  }
}


// Holds 'loading' status 
const Status = () => (
  <div className = 'loading'>
      <ReactLoading type={'cubes'} color="#2FA54D" />
  </div>
);

function timeoutFunction() {
  alert('MTD Order Lookup Application has timed out. Please check the server or try again');
  resetDOM();
}


// Helper function removes all DOM components upon subsequent lookups 
function resetDOM() {
  ReactDOM.unmountComponentAtNode(document.getElementById('tracker'))
  ReactDOM.unmountComponentAtNode(document.getElementById('trackerLabels'));
  ReactDOM.unmountComponentAtNode(document.getElementById('orderNum'));
  ReactDOM.unmountComponentAtNode(document.getElementById('orderData'));
  ReactDOM.unmountComponentAtNode(document.getElementById('mobileInfo'));
  ReactDOM.unmountComponentAtNode(document.getElementById('epcotCheck'));
}


// Below is the 'main' method to kick off the UI build
ReactDOM.render(<App />, document.getElementById('searchbox'));