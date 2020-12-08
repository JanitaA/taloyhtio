import React from "react";

const tilanperustiedot = ({ name, apartmentinfo, area}) => {
    return (
        <li>
            {name} {apartmentinfo} {area}
        </li>
    );
}

export default tilanperustiedot