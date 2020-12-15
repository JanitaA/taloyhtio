import React from "react";
import "./index.css";
const DottedBox = () => (
  <div className="DottedBox">
    <p className="DottedBox_content">Get started with CSS styling</p>
  </div>
);

export default DottedBox;
const Tilanperustiedot = ({ name, apartmentinfo, area}) => {
    return (
        <li>
            {name} {apartmentinfo} {area}
        </li>
    );
}

export default Tilanperustiedot
