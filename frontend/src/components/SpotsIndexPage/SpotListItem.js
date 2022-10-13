import React, {useState} from "react";

import { useHistory } from "react-router-dom";

function SpotListItem({spot}) {
  const {title, price } = spot;
  console.log(spot, 'right here')
  return (
    <li>

    <div className="spot-list-item" >
      <div className="list-item-info">
        <h2>{title}</h2>
        <div className="list-item-fields">
       
          <div className="info-field">
            <span className="list-item-category">Price:</span>
            <span className="list-item-copy">${price}</span>
          </div>
        </div>
      </div>
    </div>
  </li>
  );
}

export default SpotListItem;

