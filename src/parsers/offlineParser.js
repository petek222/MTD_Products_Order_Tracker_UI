import React from 'react';

const infoStyle = {
    fontFamily: 'Helvetica'
  };

export default function parseOffline (Json, offlineOrderHeader, offlineOrderDetail) {
    return (
      <div style={infoStyle}  className = 'offlinedata'>
        {"3. Com Offline Info: NOTE that most of the information here is extraneous. Presence in COM Offline Load is most important check." }
        <br></br>
        <ul>
          <li>{'Does the order exist in COM offline load?: ' + checkOffline(offlineOrderHeader, offlineOrderDetail)}</li>
          <br></br>
          <br></br>
          <li>{'COM Offline Order Header'}</li>
          <br></br>
            {parseOfflineOrderHeader(Json, offlineOrderHeader)}
            <br></br>
          <li>{'COM Offline Item Detail (From Order Header)'}</li>
          <br></br>
            {parseOfflineItemDetail(Json, offlineOrderHeader)}
            <br></br>
          <li>{'COM Offline Order Detail'}</li>
          <br></br>
            {parseOfflineOrderDetail(Json, offlineOrderDetail)}
        </ul>
        <br></br>
      </div>
    );
  }
  
  function checkOffline (offlineOrderHeader, offlineShipmentHeader) {
    return (offlineOrderHeader || offlineShipmentHeader);
  }

function parseOfflineItemDetail(Json, offlineOrderHeader) {
  
  if (offlineOrderHeader) {
    return (
      <ul>
        <li>{'Item Number: ' + Json['comOfflineData']['orderDetail']['G9AITX']}</li>
        <li>{'Order Quantity on Order U/M: ' + Json['comOfflineData']['orderDetail']['G9ACQT']}</li>
        <li>{'Sell Price in Price U/M: ' + Json['comOfflineData']['orderDetail']['G9KHVA']}</li>
        <li>{'Net Sales Price: ' + Json['comOfflineData']['orderDetail']['G9DPVA']}</li>
      </ul>
    );
  }

  else {
    return (
      <ul>
        <li>{'No Offline Item Detail Information exists'}</li>
      </ul>
      );
  }
}
  
function parseOfflineOrderHeader(Json, offlineOrderHeader) {
  
    if (offlineOrderHeader) {
      return (
      <ul>
        <li>{'Offline Token: ' + Json['comOfflineData']['orderHeader']['G8AA74']}</li>
        <li>{'Company Number: ' + Json['comOfflineData']['orderHeader']['G8AENB']}</li>
        <li>{'Internal Header Type: ' + Json['comOfflineData']['orderHeader']['G8DCCD']}</li>
        <li>{'Order Number: ' + Json['comOfflineData']['orderHeader']['G8CVNB']}</li>
        <li>{'Purchase Order Number: ' + Json['comOfflineData']['orderHeader']['G8CBTX']}</li>
        <li>{'Order Reference Number: ' + Json['comOfflineData']['orderHeader']['G8AAYC']}</li>
        <li>{'Purchase Order Date: ' + Json['comOfflineData']['orderHeader']['G8DXNB']}</li>
        <li>{'Order Date: ' + Json['comOfflineData']['orderHeader']['G8ACDT']}</li>
        <li>{'Request Date: ' + Json['comOfflineData']['orderHeader']['G8D0NB']}</li>
        <li>{'Mfg Schd Date: ' + Json['comOfflineData']['orderHeader']['G8D2NB']}</li>
        <li>{'Customer Number: ' + Json['comOfflineData']['orderHeader']['C6CANB']}</li>
        <li>{'Cr/Db Reason Cde: ' + Json['comOfflineData']['orderHeader']['G8F4CD']}</li>
        <li>{'Whse: ' + Json['comOfflineData']['orderHeader']['C6A3CD']}</li>
        <li>{'Source Order Number: ' + Json['comOfflineData']['orderHeader']['G8AAYG']}</li>
      </ul>
      );
    }
    else {
      return (
      <ul>
        <li>{'No Offline Order Header Information exists'}</li>
      </ul>
      );
    }
  }
  
function parseOfflineOrderDetail(Json, offlineOrderDetail) {
  
    if (offlineOrderDetail) {
      return (
      <ul>
        <li>{'Offline Token: ' + Json['comOfflineData']['orderDetail']['G9AA74']}</li>
        <li>{'Offline Rec Type: ' + Json['comOfflineData']['orderDetail']['G9ACGX']}</li>
        <li>{'Company Number: ' + Json['comOfflineData']['orderDetail']['G9AENB']}</li>
        <li>{'Line Item Sequence: ' + Json['comOfflineData']['orderDetail']['G9FCNB']}</li>
        <li>{'Customer Number: ' + Json['comOfflineData']['orderDetail']['G9CANB']}</li>
        <li>{'Cr/Db Reason Cde: ' + Json['comOfflineData']['orderDetail']['G9F4CD']}</li>
        <li>{'Whse: ' + Json['comOfflineData']['orderDetail']['G9A3CD']}</li>
      </ul>
      );
    }
    else {
      return (
      <ul>
        <li>{'No Offline Shipment Header Information exists'}</li>
      </ul>
      );
    }
  }
  