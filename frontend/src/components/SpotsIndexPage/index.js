import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSpots } from "../../store/spots";
import SpotList from "./SpotList";
// import './SpotIndexPage.css';

function SpotsIndexPage() {
  const history = useHistory(); 
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spots));



//   const mapEventHandlers = useMemo(() => ({
//     click: event => {
//       const search = new URLSearchParams(event.latLng.toJSON()).toString();
//       history.push({ pathname: '/spots/new', search });
//     },
//     idle: map => setBounds(map.getBounds().toUrlValue())
//   }), [history]);

  return (
    <div className="spot-index-page">
      <div className="bench-index-map-container">
        <h2>Click Map to Add Spot!</h2>
      </div>
      <div className="spot-list-container">
        <SpotList 
          spots={spots} 
         
        />
      </div>
  </div>
  );
}

export default SpotsIndexPage;
