import React from 'react';
import './DottedBox.css';

const DottedBox = () => (
  <div className="DottedBox">
    <p className="DottedBox_content">Get started with CSS styling</p>
  </div>
);

export default DottedBox;

.DottedBox {
    margin: 40px;
    border: 5px dotted green;
  }
  
  .DottedBox_content {
    font-size: 15px;
    text-align: center;
  }