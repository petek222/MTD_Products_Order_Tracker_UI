import React from 'react';

const infoStyle = {
    fontFamily: 'Helvetica'
  };

export default function parseEpcot (Json) {
    return (
    <div style={infoStyle}  className = 'epcotdata'>
      {'5. Epcot Status Information: '}
        <br></br>
          <ul>
            <li>{'Order Status Id (corresponding status info below): ' + Json['epcotResults']['ORDER_STATUS_ID']}</li> 
            <li>{'Customer Description: ' + Json['epcotResults']['CUSTOMER_DESC']}</li>
            <li>{'Order Description: ' + Json['epcotResults']['DESC']}</li>
            <li>{'Order holds in COM: ' + Json['epcotResults']['SHOW_COM_HOLDS']}</li>
            <li>{'Order Status in COM (ie. written to COM?): ' + Json['epcotResults']['SHOW_COM_STATUS']}</li>
            <li>{'Was the order originally placed in Epcot?: ' + Json['epcotResults']['PLACED_IN_EPCOT']}</li>
          </ul>
    </div>
    );
  }