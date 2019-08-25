import React from 'react';

const infoStyle = {
    fontFamily: 'Helvetica'
  };

export default function parseFTP (Json) {
    return (
      <div style={infoStyle} className = 'ftpdata'>
        {'1. FTP server information: '}
          <ul>
            <li>{'Does the order exist on the FTP server?: ' + Json['ftpData']['exists']}</li>
            <li>{'Has the order been processed? ' + Json['ftpData']['isProcessed']}</li>
            <li>{'What type of product is the order?: ' + Json['ftpData']['productType']}</li>
            <li>{'XML filename: ' + Json['ftpData']['filename']}</li>
          </ul>
        <br></br>
      </div>
    );
  }