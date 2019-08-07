import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

// Turn Tab Text Green or Red based on presence of Information / Color coordinate 

export default function getTabList(ftpStatus, ftpParsed, clientParsed, offlineParsed, paymentParsed, epcotParsed, openParsed, historyParsed) {

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

              <TabPanel className="tabData">
                <p>
                {ftpParsed}
                </p>
              </TabPanel>
          
              <TabPanel className="tabData">
                <p>
                {clientParsed}
                </p>
              </TabPanel>
          
              <TabPanel className="tabData">
                <p>
                {offlineParsed}
                </p>
              </TabPanel>
          
              <TabPanel className="tabData">
                <p>
                {paymentParsed}
                </p>
              </TabPanel>
          
              <TabPanel className="tabData">
                <p>
                {epcotParsed}
                </p>
              </TabPanel>
          
              <TabPanel className="tabData">
                <p>
                {openParsed}
                </p>
              </TabPanel>
          
              <TabPanel className="tabData">
                <p>
                {historyParsed}
                </p>
              </TabPanel>
            </Tabs>
          );
      }  