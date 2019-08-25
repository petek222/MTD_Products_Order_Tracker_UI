import React from 'react';
 
const infoStyle = {
   fontFamily: 'Helvetica'
 };

export default function parseOpen (Json, openOrderDetail, openOrderHeader, openShipmentHeader) {
  
   return (
     <div style={infoStyle}  className = 'opendata'>
       {"6. Com Open Info: " }
       <br></br>
       <ul>
         <li>{'Does the order exist in COM Open?: ' + checkOpen(openOrderDetail, openOrderHeader, openShipmentHeader)}</li>
         <br></br>
         <li>{'COM Open Order Header'}</li>
         <br></br>
           {parseOpenOrderHeader(Json, openOrderHeader)}
           <br></br>
         <li>{'COM Open Order Detail'}</li>
         <br></br>
           {parseOpenOrderDetail(Json, openOrderDetail)}
           <br></br>
         <li>{'COM Open Shipment Header'}</li>
           {parseOpenShipmentHeader(Json, openShipmentHeader)}
       </ul>
       <br></br>
     </div>
   );
 }
 
function checkOpen(openOrderDetail, openOrderHeader, openShipmentHeader) {
   return (openOrderDetail || openOrderHeader || openShipmentHeader);
 }
 
function parseOpenOrderHeader(Json, openOrderHeader) {
 
   if (openOrderHeader) {
     return (
       <ul>
         <br></br>
         <li>{'Offline Token: ' + Json['comOpenData']['orderHeader']['C6AA74']}</li>
         <li>{'Company Number: ' + Json['comOpenData']['orderHeader']['C6AENB']}</li>
         <li>{'Internal Header Type: ' + Json['comOpenData']['orderHeader']['C6DCCD']}</li>
         <li>{'Order Number: ' + Json['comOpenData']['orderHeader']['C6CVNB']}</li>
         <li>{'Order Reference Number: ' + Json['comOpenData']['orderHeader']['C6AAYC']}</li>
         <li>{'Create Date: ' + Json['comOpenData']['orderHeader']['C6ALDT']}</li>
         <li>{'Order Date: ' + Json['comOpenData']['orderHeader']['C6ACDT']}</li>
         <li>{'Header Status: ' + Json['comOpenData']['orderHeader']['C6FNST']}</li>
         <li>{'Customer Number: ' + Json['comOpenData']['orderHeader']['C6CANB']}</li>
         <li>{'Order Type: ' + Json['comOpenData']['orderHeader']['C6UUCA']}</li>
         <li>{'Whse: ' + Json['comOpenData']['orderHeader']['C6A3CD']}</li>
         <li>{'Source Cmp Number: ' + Json['comOpenData']['orderHeader']['C6AAYF']}</li>
         <li>{'Source Order Type: ' + Json['comOpenData']['orderHeader']['C6AAYH']}</li>
         <li>{'Source Order Number: ' + Json['comOpenData']['orderHeader']['C6AAYG']}</li>
       </ul>
     );
   }
   else {
     return (
     <ul>
       <li>{'No Open Order Header Information exists'}</li>
     </ul>
     );
   }
 }
 

// open detail parser should be properly UPDATED now 
function parseOpenOrderDetail(Json, openOrderDetail) {
 
   if (openOrderDetail) {
     return (
       <ul>
         <br></br>
         <li>{'Line Item Status: ' + Json['comOpenData']['orderDetail']['CDH3ST']}</li>
         <li>{'Line Item Type: ' + Json['comOpenData']['orderDetail']['CDZ904']}</li>
         <li>{'Item Number: ' + Json['comOpenData']['orderDetail']['CDAITX']}</li>
         <li>{'Industry Item: ' + Json['comOpenData']['orderDetail']['CDH2TX']}</li>
         <li>{'Present Item Number: ' + Json['comOpenData']['orderDetail']['CDAF31']}</li>
         <li>{'Present Item Description: ' + Json['comOpenData']['orderDetail']['CDAF32']}</li>
         <li>{'Customer Item Number: ' + Json['comOpenData']['orderDetail']['CDHJTX']}</li>
         <li>{'Original Item Number: ' + Json['comOpenData']['orderDetail']['CDAALM']}</li>
         <li>{'Item Description: ' + Json['comOpenData']['orderDetail']['CDALTX']}</li>
         <li>{'Item Type Code: ' + Json['comOpenData']['orderDetail']['CDAIST']}</li>
         <li>{'Item Class Code: ' + Json['comOpenData']['orderDetail']['CDGLCD']}</li>
         <li>{'Item Account Class: ' + Json['comOpenData']['orderDetail']['CDA0CD']}</li>
         <li>{'Cr/Db Reason Code: ' + Json['comOpenData']['orderDetail']['CDF4CD']}</li>
         <li>{'Order Quantity on Order: ' + Json['comOpenData']['orderDetail']['CDACQT']}</li>
         <li>{'Quantity Released Total: ' + Json['comOpenData']['orderDetail']['CDAF78']}</li>
         <li>{'Unit Cost per Stk U/M: ' + Json['comOpenData']['orderDetail']['CDFYVA']}</li>
         <li>{'Sell Price -LC: ' + Json['comOpenData']['orderDetail']['CDDTVA']}</li>
         <li>{'Sell Price in Order: ' + Json['comOpenData']['orderDetail']['CDDOVA']}</li>
         <li>{'Sell Price in Price: ' + Json['comOpenData']['orderDetail']['CDKHVA']}</li>
         <li>{'Net Sales Price: ' + Json['comOpenData']['orderDetail']['CDDPVA']}</li>
         <li>{'Net Sales Amount: ' + Json['comOpenData']['orderDetail']['CDDUVA']}</li>
         <li>{'Quantity Ship Total: ' + Json['comOpenData']['orderDetail']['CDZ901']}</li>
         <li>{'Quantity B/O Total: ' + Json['comOpenData']['orderDetail']['CDZ902']}</li>
         <br></br>
         <br></br>
         <li>{'Above is mostly new information: everything below may already exist elsewhere'}</li>
         <br></br>
         <li>{'Company Number: ' + Json['comOpenData']['orderDetail']['CDAENB']}</li>
         <li>{'Internal Header Type: ' + Json['comOpenData']['orderDetail']['CDDCCD']}</li>
         <li>{'Order Number: ' + Json['comOpenData']['orderDetail']['CDCVNB']}</li>
         <li>{'Line Item Sequence: ' + Json['comOpenData']['orderDetail']['CDFCNB']}</li>
         <li>{'Record Creation Date: ' + Json['comOpenData']['orderDetail']['CDALDT']}</li>
         <li>{'Create Date: ' + Json['comOpenData']['orderDetail']['CDALDT']}</li>
         <li>{'Change Date: ' + Json['comOpenData']['orderDetail']['CDAMDT']}</li>
         <li>{'Source Cmp Number: ' + Json['comOpenData']['orderDetail']['CDAAYF']}</li>
         <li>{'Source Order Type: ' + Json['comOpenData']['orderDetail']['CDAAYH']}</li>
         <li>{'Source Order Number: ' + Json['comOpenData']['orderDetail']['CDAAYG']}</li>
         <li>{'Source Item Sequence Number: ' + Json['comOpenData']['orderDetail']['CDAAYJ']}</li>
       </ul>
     );
   }
   else {
     return (
     <ul>
       <li>{'No Open Order Detail Information exists'}</li>
     </ul>
     );
   }
 }
 
function parseOpenShipmentHeader(Json, openShipmentHeader) {
 
   if (openShipmentHeader) {
     return (
       <ul>
         <br></br>
         <li>{'Company Number: ' + Json['comOpenData']['shipmentHeader']['DHAENB']}</li>
         <li>{'Internal Header Type: ' + Json['comOpenData']['shipmentHeader']['DHDCCD']}</li>
         <li>{'Order Number: ' + Json['comOpenData']['shipmentHeader']['DHCVNB']}</li>
         <li>{'Shipment Number: ' + Json['comOpenData']['shipmentHeader']['DHZ969']}</li>
         <li>{'Shipment Id: ' + Json['comOpenData']['shipmentHeader']['DHAFAB']}</li>
         <li>{'Record Creation Date: ' + Json['comOpenData']['shipmentHeader']['DHALDT']}</li>
         <li>{'Shipment Date: ' + Json['comOpenData']['shipmentHeader']['DHIVNB']}</li>
         <li>{'Invoice Number: ' + Json['comOpenData']['shipmentHeader']['DHGGNB']}</li>
       </ul>
     );
   }
   else {
     return (
     <ul>
       <li>{'No Open Shipment Header Information exists'}</li>
     </ul>
     );
   }
 }
 