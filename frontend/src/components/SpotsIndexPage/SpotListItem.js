import React from "react";
import { useHistory } from "react-router-dom";

function SpotListItem({spot}) {
  const { title, price } = spot;
  const history = useHistory(); 

  return (
    <div
      className="spot-list-item"
      onClick={() => history.push(`/spots/${spot.id}`)}
      // onMouseEnter={() => setHighlightedBench(spot.id)}
      // onMouseLeave={() => setHighlightedBench(null)}
    >
      <div className="list-item-info">
        <h2>{title}</h2>
        <div className="list-item-fields">
          {/* <div className="info-field">
            <span className="list-item-category">Price:</span>
            <span className="list-item-copy">
              {averageRating || 'No reviews yet'}
            </span>
          </div> */}
          <div className="info-field">
            <span className="list-item-category">Price:</span>
            <span className="list-item-copy">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotListItem;
