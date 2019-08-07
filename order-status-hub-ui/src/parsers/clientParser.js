import React from 'react';

const infoStyle = {
    fontFamily: 'Helvetica'
  };

export default function parseClient (Json) {
    return (
      <div style={infoStyle}  className = 'clientdata'>
      {'2. Order-Service-Client Information: '}
        <ul>
          <li>{'Epcot Order Number: ' + Json['clientResults']['epcotOrderNumber']}</li>
          <li>{'Offline Token List: ' + Json['clientResults']['offlineTokenList']}</li>
          <li>{'Original order-Id: ' + Json['clientResults']['orderId']}</li>
          <li>{'Order Type: ' + Json['clientResults']['orderType']}</li>
          <li>{'Date and Time of order Record Creation: ' + Json['clientResults']['recordCreated']}</li>
          <li>{'Website on which the order was placed: ' + Json['clientResults']['site']}</li>
          <li>{'Name of the XML File for the order: ' + Json['clientResults']['sourceDetails']}</li>
          <li>{'Date and Time at which the order was written to Epcot: ' + Json['clientResults']['writtenToEpcot']}</li>
        </ul>
      </div>
    );
  }
  