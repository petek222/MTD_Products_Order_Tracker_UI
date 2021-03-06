[![Build Status](https://travis-ci.com/petek222/MTD_Products_Order_Tracker_UI.svg?branch=master)](https://travis-ci.com/petek222/MTD_Products_Order_Tracker_UI)

# Introduction 
Order-Status Hub Application User Interface. Built in React.js, backended by a Node.js and Azure SQL / Oracle Db order service application.

The UI currently accepts an order number and runs the backend application asynchronously, returning the data in a formatted, tabbed layout.
This tab structure can be added to and re-styled to fit needs. A progress bar/pizza tracker is displayed in correspondance with data.

For more information on the backend functionality of the Node.js piece, see its own README/Repo in mtd-order-lookup-service.

# Getting Started
UI is currently a fully-functional build, calling the Node.js backend via an AJAX XMLHttpRequest object with the user-supplied order number. 
1.	Navigate to:
 /c/dev/order-status-hub-ui/order-status-hub-ui
2.	Run npm start
3.  In a second terminal window, navigate to:
 /c/dev/mtd-order-lookup-service
 4. Run nodemon, booting up backend server
 5. Navigate to localhost web page, displaying order number searchbox.
 6. With both services running, enter an order number in the searchbox and click 'Process'.
 7. Loading bar will display, and will change into formatted data once complete, along with progress tracker. Color-coordinated.

 Note that the process may take a bit to complete, as it is talking to nearly every service present within the E-commerce order process (save for SFCC)

# Build and Test
Version 1.0.0
Current build makes use of Node.js, React.js, MsSQL, and Oracle. Specific npm modules used are specified in its corresponding directory.
npm module 'axios' is currently used to make the primary backend asynchronous AJAX request from the outer view-controller.

# Contribute
TODO: Implement Unit Testing via Selenium, Rework UI as needed, alter data formatting.

Author: Peter Koncelik
Last Commit: August 2019
