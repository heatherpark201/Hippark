import React from "react";
import SpotListItem from "./SpotListItem";


function SpotList({ spots, highlightedSpot, setHighlightedSpot }) {
  return (
    <div className="spot-list">
      {/* <h1>Spots: </h1> */}
      
        {spots.map((spot) => (
          <SpotListItem
          key={spot.id}
          spot={spot}
          isHighlighted={highlightedSpot === spot.id}
          setHighlightedSpot={setHighlightedSpot}
          />
          ))}
    
    </div>
  );
}

export default SpotList;
