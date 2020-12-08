import React from "react";

const Tilanperustiedot = ({ name, apartmentinfo, area}) => {
    return (
        <li>
            {name} {apartmentinfo} {area}
        </li>
    );
}

export default Tilanperustiedot