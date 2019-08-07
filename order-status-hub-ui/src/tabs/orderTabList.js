import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


export default function getOrderTabList(ftpStatus, ftpParsed, clientParsed, offlineParsed, paymentParsed, epcotParsed, openParsed, historyParsed, orderInfoParsed) {

  let ftpDone = ftpStatus;
  let clientDone = clientParsed ? true : false;
  let offlineDone = offlineParsed ? true : false;
  let paymentDone = paymentParsed ? true : false;
  let epcotDone = epcotParsed ? true : false;
  let openDone = openParsed ? true : false;
  let historyDone = historyParsed ? true : false;


    return (
      <Tabs className="orderData">
        
              <TabList className="tabList">

                <Tab className = {['react-tabs__tab', `tabName ${ftpDone ? "accomplished" : null}`]}>FTP</Tab>
                <Tab className = {['react-tabs__tab', `tabName ${clientDone ? "accomplished" : null}`]}>Client</Tab>
                <Tab className = {['react-tabs__tab', `tabName ${offlineDone ? "accomplished" : null}`]}>COM Offline</Tab>
                <Tab className = {['react-tabs__tab', `tabName ${paymentDone ? "accomplished" : null}`]}>Payment</Tab>
                <Tab className = {['react-tabs__tab', `tabName ${epcotDone ? "accomplished" : null}`]}>Epcot</Tab>
                <Tab className = {['react-tabs__tab', `tabName ${openDone ? "accomplished" : null}`]}>COM Open</Tab>
                <Tab className = {['react-tabs__tab', `tabName ${historyDone ? "accomplished" : null}`]}>COM History</Tab>
                <Tab className = {['react-tabs__tab', `tabName ${clientDone ? "accomplished" : null}`]}>General Order Information</Tab>

              </TabList>
          
              <TabPanel>
                <p className="tabData">
                {ftpParsed}
                </p>
              </TabPanel>
          
              <TabPanel>
                <p className="tabData">
                {clientParsed}
                </p>
              </TabPanel>
          
              <TabPanel>
                <p className="tabData">
                {offlineParsed}
                </p>
              </TabPanel>
          
              <TabPanel>
                <p className="tabData">
                {paymentParsed}
                </p>
              </TabPanel>
          
              <TabPanel>
                <p className="tabData">
                {epcotParsed}
                </p>
              </TabPanel>
          
              <TabPanel>
                <p className="tabData">
                {openParsed}
                </p>
              </TabPanel>
          
              <TabPanel>
                <p className="tabData">
                {historyParsed}
                </p>
              </TabPanel>
  
              <TabPanel>
                <p className="tabData">
                {orderInfoParsed}
                </p>
              </TabPanel>
            </Tabs>
    );
  }