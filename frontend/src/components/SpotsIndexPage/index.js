import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSpots } from "../../store/spots";
import SpotList from "./SpotList";
import './SpotsIndexPage.css';

function SpotsIndexPage() {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spots));

  useEffect(() => {
      dispatch(fetchSpots())
  }, []);



  return (
    <div className="spot-index-page">
      <div className="spot-list-container">
      < SpotList 
          spots={spots}
      /> 
      </div>
  </div>
  );
}

export default SpotsIndexPage;


