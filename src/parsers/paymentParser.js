import React from 'react';

const infoStyle = {
    fontFamily: 'Helvetica'
  };

export default function parsePayment (Json) {
    return (
      <div style={infoStyle}  className = 'paymentdata'>
        {'4. Payment Service Order Information: '}
        <br></br>
          <ul>
            <li>{'Chase Authorization Information'}</li>
            <br></br>
              <ul>
                <li>{'Auth Order Id: ' + Json['paymentResults']['chaseAuthInfo']['AuthOrderId']}</li>
                <li>{'Auth Profile Id: ' + Json['paymentResults']['chaseAuthInfo']['AuthProfileId']}</li>
                <li>{'Date that Chase Authorization Expires: ' + Json['paymentResults']['chaseAuthInfo']['DateAuthorizationExpires']}</li>
                <li>{'Date that record was created in Chase: ' + Json['paymentResults']['chaseAuthInfo']['DateCreated']}</li>
                <li>{'Is the order Active in Chase?: ' + Json['paymentResults']['chaseAuthInfo']['active']}</li>
                <li>{'Chase Authorization Message (if any): ' + Json['paymentResults']['chaseAuthInfo']['message']}</li>
              </ul>
            <br></br>
            <li>{'Consumer Order Status Information'}</li>
            <br></br>
              <ul>
                <li>{'Status of Consumer Order: ' + Json['paymentResults']['consumerOrderStatus']['Status']}</li>
              </ul>
              <br></br>
            <li>{'Credit Card Payment Information'}</li>
            <br></br>
            <ul>
              <li>{'Active Authorization Key: ' + Json['paymentResults']['creditCardInfo']['ActiveAuthKey']}</li>
              <li>{'Active Authorization Order Id: ' + Json['paymentResults']['creditCardInfo']['ActiveAuthOrderId']}</li>
              <li>{'Active Date of Authorization: ' + Json['paymentResults']['creditCardInfo']['ActiveDateAuthorized']}</li>
              <li>{'Active Merchant Id: ' + Json['paymentResults']['creditCardInfo']['ActiveMerchantId']}</li>
              <li>{'Active Profile Id: ' + Json['paymentResults']['creditCardInfo']['ActiveProfileId']}</li>
              <li>{'Captured Amount(s): ' + Json['paymentResults']['creditCardInfo']['CapturedAmount'][0] + ' and ' + Json['paymentResults']['creditCardInfo']['CapturedAmount'][1]}</li>
              <li>{'Credit Card Payment Key: ' + Json['paymentResults']['creditCardInfo']['CreditCardPaymentKey']}</li>
              <li>{'Failed Authorization Count: ' + Json['paymentResults']['creditCardInfo']['FailedAuthCount']}</li>
              <li>{'Original Order Number: ' + Json['paymentResults']['creditCardInfo']['OrderNumber']}</li>
              <li>{'Payment Amount: ' + Json['paymentResults']['creditCardInfo']['Payment Amount']}</li>
              <li>{'Settled Amount(s): ' + Json['paymentResults']['creditCardInfo']['SettledAmount'][0] + ' and ' + Json['paymentResults']['creditCardInfo']['SettledAmount'][1]}</li>
              <li>{'Payment Status(es): ' + Json['paymentResults']['creditCardInfo']['Status'][0] + ' and ' + Json['paymentResults']['creditCardInfo']['Status'][1]}</li>
              <li>{'Successful Authorization Count: ' + Json['paymentResults']['creditCardInfo']['SuccessfulAuthCount']}</li>
            </ul>
          </ul>
      </div>
    )
  }
  