import React from "react";
import SpotListItem from "./SpotListItem";

function SpotList({ spots }) {
  return (
    <div className="spot-list">
      <h1>Spots: </h1>
      {spots.map((spot) => (
        <SpotListItem
          key={spot.id}
          spot={spot}
        />
      ))}
    </div>
  );
}

export default SpotList;
