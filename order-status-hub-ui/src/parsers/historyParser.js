import React from 'react';

const infoStyle = {
    fontFamily: 'Helvetica'
  };

 export default function parseHistory (Json, historyOrderDetail, historyOrderHeader, historyShipmentHeader) {
  
    return (
      <div style={infoStyle}  className = 'historydata'>
        {"7. Com History Info: " }
        <br></br>
        <ul>
          <li>{'Does the order exist in COM History?: ' + checkHistory(historyOrderDetail, historyOrderHeader, historyShipmentHeader)}</li>
          <br></br>
          <li>{'COM History Order Header'}</li>
            {parseHistoryOrderHeader(Json, historyOrderHeader)}
          <br></br>
          <li>{'COM History Order Detail'}</li>
            {parseHistoryOrderDetail(Json, historyOrderDetail)}
            <br></br>
          <li>{'COM History Shipment Header'}</li>
            {parseHistoryShipmentHeader(Json, historyShipmentHeader)}
            <br></br>
        </ul>
        <br></br>
      </div>
    );
  }
  
 export function checkHistory (historyOrderDetail, historyOrderHeader, historyShipmentHeader) {
    return (historyOrderDetail || historyOrderHeader || historyShipmentHeader);
  }
  
  // ADD MORE AS DESIRED 
 export function parseHistoryOrderHeader(Json, historyOrderHeader) {
  
    if (historyOrderHeader) {
      return (
        <ul>
          <br></br>
          <li>{'Company Number: ' + Json['comHistoryData']['orderHeader']['BWAENB']}</li>
          <li>{'Internal Header Type: ' + Json['comHistoryData']['orderHeader']['BWDCCD']}</li>
          <li>{'Order Number: ' + Json['comHistoryData']['orderHeader']['BWCVNB']}</li>
          <li>{'Record Creation Date: ' + Json['comHistoryData']['orderHeader']['BWALDT']}</li>
          <li>{'Invoice Number: ' + Json['comHistoryData']['orderHeader']['BWGGNB']}</li>
          <li>{'Invoice Sequence: ' + Json['comHistoryData']['orderHeader']['BWHYNB']}</li>
          <li>{'Create Date: ' + Json['comHistoryData']['orderHeader']['BWALDT']}</li>
          <li>{'Purchase Order Date: ' + Json['comHistoryData']['orderHeader']['BWDXNB']}</li>
          <li>{'Order Date: ' + Json['comHistoryData']['orderHeader']['BWACDT']}</li>
          <li>{'Request Date: ' + Json['comHistoryData']['orderHeader']['BWD0NB']}</li>
          <li>{'Customer Number: ' + Json['comHistoryData']['orderHeader']['BWCANB']}</li>
        </ul>
      );
    }
    else {
      return (
      <ul>
        <li>{'No History Order Header Information exists'}</li>
      </ul>
      );
    }
  }
  
 export function parseHistoryOrderDetail(Json, historyOrderDetail) {
  
    if (historyOrderDetail) {
      return (
        <ul>
          <br></br>
          <li>{'Company Number: ' + Json['comHistoryData']['orderDetail']['DRAENB']}</li>
          <li>{'Internal Header Type: ' + Json['comHistoryData']['orderDetail']['DRDCCD']}</li>
          <li>{'Order Number: ' + Json['comHistoryData']['orderDetail']['DRCVNB']}</li>
          <li>{'Line Item Sequence: ' + Json['comHistoryData']['orderDetail']['DRFCNB']}</li>
          <li>{'whse: ' + Json['comHistoryData']['orderDetail']['DRA3CD']}</li>
          <li>{'Line Item Status: ' + Json['comHistoryData']['orderDetail']['DRAENB']}</li>
          <li>{'Item Number: ' + Json['comHistoryData']['orderDetail']['DRAITX']}</li>
          <li>{'Industry Item: ' + Json['comHistoryData']['orderDetail']['DRH2TX']}</li>
          <li>{'Customer Item Number: ' + Json['comHistoryData']['orderDetail']['DRHJTX']}</li>
          <li>{'Original Item Number: ' + Json['comHistoryData']['orderDetail']['DRAALM']}</li>
          <li>{'Net Sales Price: ' + Json['comHistoryData']['orderDetail']['DRDPVA']}</li>
          <li>{'Source Cmp Number: ' + Json['comHistoryData']['orderDetail']['DRAENB']}</li>
          <li>{'Source Order Type: ' + Json['comHistoryData']['orderDetail']['DRAAYH']}</li>
          <li>{'Source Order Number: ' + Json['comHistoryData']['orderDetail']['DRAAYG']}</li>
          <li>{'Source Item Sequence Number: ' + Json['comHistoryData']['orderDetail']['DRAAYJ']}</li>
        </ul>
      );
    }
    else {
      return (
      <ul>
        <li>{'No History Order Detail Information exists'}</li>
      </ul>
      );
    }
  }
  
 export function parseHistoryShipmentHeader(Json, historyShipmentHeader) {
  
    if (historyShipmentHeader) {
      return (
        <ul>
          <br></br>
          <li>{'Order Type: ' + Json['comHistoryData']['shipmentHeader']['DHUUCC']}</li>
          <li>{'Pick Ticket Number: ' + Json['comHistoryData']['shipmentHeader']['DHABDC']}</li>
          <li>{'Shipment Status: ' + Json['comHistoryData']['shipmentHeader']['DHINST']}</li>
          <li>{'Company Number: ' + Json['comHistoryData']['shipmentHeader']['DHAENB']}</li>
          <li>{'Internal Header Type: ' + Json['comHistoryData']['shipmentHeader']['DHDCCD']}</li>
          <li>{'Order Number: ' + Json['comHistoryData']['shipmentHeader']['DHCVNB']}</li>
          <li>{'Shipment Header Number: ' + Json['comHistoryData']['shipmentHeader']['DHK4NB']}</li>
          <li>{'Shipment Number: ' + Json['comHistoryData']['shipmentHeader']['DHZ969']}</li>
          <li>{'Shipment Id: ' + Json['comHistoryData']['shipmentHeader']['DHAFAB']}</li>
          <li>{'Invoice Number: ' + Json['comHistoryData']['shipmentHeader']['DHGGNB']}</li>
          <li>{'Invoice Sequence: ' + Json['comHistoryData']['shipmentHeader']['DHHYNB']}</li>
          <li>{'Shipment Date: ' + Json['comHistoryData']['shipmentHeader']['DHIVNB']}</li>
          <li>{'Customer Number: ' + Json['comHistoryData']['shipmentHeader']['DHCANB']}</li>
          <li>{'whse: ' + Json['comHistoryData']['shipmentHeader']['DHA3CD']}</li>
          <li>{'Line Item Status: ' + Json['comHistoryData']['shipmentHeader']['DHAENB']}</li>
          <li>{'Source Cmp Number: ' + Json['comHistoryData']['shipmentHeader']['DHAENB']}</li>
        </ul>
      );
    }
    else {
      return (
      <ul>
        <li>{'No History Shipment Header Information exists'}</li>
      </ul>
      );
    }
  }
