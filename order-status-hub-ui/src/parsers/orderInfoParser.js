import React from 'react';

const infoStyle = {
    fontFamily: 'Helvetica'
  };

  export default function parseOrderInfo (Json) {
    return (
        <div style={infoStyle} className = 'orderinfodata'>
          {'1. General Order Information: '}
          <br></br>
          <br></br>
          <ul>
            <li>{'Order Billing Information'}</li>
              <br></br>
                {parseBillingInformation(Json['CDBilling'])}
                <br></br>
            <li>{'Credit Information'}</li>
            <br></br>
                {parseCreditCardInformation(Json['CDBilling'])}
                <br></br>
            <li>{'Tax Information'}</li>
                {parseTaxInformation(Json['CDDiscounts'])}
                <br></br>
            <li>{'Line Item List'}</li>
                {parseLineItem(Json['CDLineItemList'])}
                <br></br>
            <li>{'Shipping Information'}</li>
                {parseShippingInformation(Json['CDShippingAddress'])}
                <br></br>
            <li>{'Surcharge Information'}</li>
                {parseCDSurcharge(Json['CDSurchargeList'])}
                <br></br>
            <li>{'Remaining Order Information'}</li>
                {parseRemainingInformation(Json)}
                <br></br>
          </ul>
        </div>
      );
  }

  function parseBillingInformation(Json) {

    if (Json) {
      return (
          <ul>
            <li>{'Billing Address: ' + Json['CDBillingAddress']['address1']}</li>
            <li>{'Phone Number for Billing: ' + Json['CDBillingAddress']['billToPhone']}</li>
            <li>{'City: ' + Json['CDBillingAddress']['city']}</li>
            <li>{'Country Code: ' + Json['CDBillingAddress']['countryCode']}</li>
            <li>{'First Name: ' + Json['CDBillingAddress']['firstName']}</li>
            <li>{'Last Name: ' + Json['CDBillingAddress']['lastName']}</li>
            <li>{'Phone Number: ' + Json['CDBillingAddress']['phone']}</li>
            <li>{'Postal Code: ' + Json['CDBillingAddress']['postalCode']}</li>
            <li>{'State: ' + Json['CDBillingAddress']['state']}</li>
          </ul>
      );
    }
    else {
      return (
        <ul>
          <li>{'No Billing Information Exists for the Order'}</li>
        </ul>
      );
    }
  }

  function parseCreditCardInformation (Json) {

    if (Json) {
    return (
        <ul>
          <li>{'Amount Authorized: ' + Json['CDCredit']['amountAuthorized']}</li>
          <li>{'Authorization Date: ' + Json['CDCredit']['authDate']}</li>
          <li>{'Expiration Date of Authorization: ' + Json['CDCredit']['authDateOfExpiry']}</li>
          <li>{'Authorization Order Id: ' + Json['CDCredit']['authOrderId']}</li>
          <li>{'Credit Card Expiration Date: ' + Json['CDCredit']['creditCardExpirationDate']}</li>
          <li>{'Credit Card Type: ' + Json['CDCredit']['creditCardType']}</li>
          <li>{'Merchant Id: ' + Json['CDCredit']['merchantId']}</li>
          <li>{'Profile Id: ' + Json['CDCredit']['profileId']}</li>
          <li>{'Transaction Reference Number: ' + Json['CDCredit']['transactionReferenceNumber']}</li>
        </ul>
    );
    }
    else {
      return (
        <ul>
          <li>{'No Credit Card Information Exists for the Order'}</li>
        </ul>
      );
    }
  }

  function parseTaxInformation(Json) {

    if (Json) {
    return (
        <ul>
          <br></br>
          <li>{'Sales Tax Amount: ' + Json['CDTax']['salesTaxAmount']}</li>
          <li>{'Sales Tax Percentage: ' + Json['CDTax']['salesTaxPercentage']}</li>
          <li>{'Order Discount: ' + Json['orderDiscount']}</li>
        </ul>
    );
    }
    else {
      return (
        <ul>
          <li>{'No Tax Information Exists for the Order'}</li>
        </ul>
      );
    }
  }

  function parseLineItem(Json) {

    if (Json) {
    return (
        <ul>
          <br></br>
          <li>{'Line Item Sales Tax: ' + Json['CDLineItems']['0']['CDTax']['salesTaxAmount']}</li>
          <li>{'Line Item Sales Tax Percentage: ' + Json['CDLineItems']['0']['CDTax']['salesTaxPercentage']}</li>
          <li>{'Currency Code: ' + Json['CDLineItems']['0']['currencyCode']}</li>
          <li>{'item Number: ' + Json['CDLineItems']['0']['itemNumber']}</li>
          <li>{'Item Quantity: ' + Json['CDLineItems']['0']['itemQuantity']}</li>
          <li>{'Selling Price: ' + Json['CDLineItems']['0']['sellingPrice']}</li>
          <li>{'Warehouse Code: ' + Json['CDLineItems']['0']['warehouseCode']}</li>
        </ul>
    );
    }
    else {
      return (
        <ul>
          <li>{'No Line Item exists for the Order'}</li>
        </ul>
      );
    }
  }

  function parseShippingInformation (Json) {

    if (Json) {
    return (
        <ul>
          <br></br>
          <li>{'Shipping Address: ' + Json['address1']}</li>
          <li>{'City: ' + Json['city']}</li>
          <li>{'Contact Name: ' + Json['contactName']}</li>
          <li>{'Country Code: ' + Json['countryCode']}</li>
          <li>{'First Name: ' + Json['firstName']}</li>
          <li>{'Last Name: ' + Json['lastName']}</li>
          <li>{'Phone Number: ' + Json['phone']}</li>
          <li>{'Postal Code: ' + Json['postalCode']}</li>
          <li>{'State: ' + Json['state']}</li>
        </ul>
    );
    }
    else {
      return (
        <ul>
          <li>{'Mo Shipping Information Exists for the Order'}</li>
        </ul>
      );
    }
  }

  function parseCDSurcharge (Json) {
    
    if (Json) {
    return (
        <ul>
          <br></br>
          <li>{'Line Item Sales Tax: ' + Json['CDSurcharges']['0']['CDTax']['salesTaxAmount']}</li>
          <li>{'Line Item Sales Tax Percentage: ' + Json['CDSurcharges']['0']['CDTax']['salesTaxPercentage']}</li>
          <li>{'Freight: ' + Json['CDSurcharges']['0']['freight']}</li>
        </ul>
    );
    }
    else {
      return (
        <ul>
          <li>{'No Surcharge Information exists for the Order'}</li>
        </ul>
      );
    }
  }

  function parseRemainingInformation (Json) {

    if (Json) {
    return (
        <ul>
          <br></br>
          <li>{'Comments: ' + Json['comments']}</li>
          <li>{'Customer Email Address: ' + Json['customerEmailAddress']}</li>
          <li>{'Customer Phone Number: ' + Json['customerPhoneNumber']}</li>
          <li>{'Is the Order Expedited?: ' + Json['orderExpedited']}</li>
          <li>{'Is the Order LTL?: ' + Json['isLTL']}</li>
          <li>{'Order Date: ' + Json['orderDate']}</li>
          <li>{'Order Number: ' + Json['orderNumber']}</li>
          <li>{'Order Tax Percentage: ' + Json['orderTaxPercentage']}</li>
          <li>{'Order Tax Total: ' + Json['orderTaxTotal']}</li>
          <li>{'Order Type: ' + Json['orderType']}</li>
          <li>{'PO Notes: ' + Json['poNotes']}</li>
          <li>{'Shipping Method: ' + Json['shippingMethod']}</li>
          <li>{'Site Id: ' + Json['siteId']}</li>
          <li>{'Web Bill To Number: ' + Json['webBillToNumber']}</li>
          <li>{'webShipToNumber: ' + Json['webShipToNumber']}</li>
        </ul>
    );
    }
    else {
      return (
        <ul>
          <li>{'No Remaining Information exists for the Order'}</li>
        </ul>
      );
    }

  }