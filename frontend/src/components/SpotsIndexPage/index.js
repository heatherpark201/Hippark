import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSpots } from "../../store/spots";
import SpotList from "./SpotList";
import './SpotsIndexPage.css';
import map from '../../assets/mapPlaceholder.png'
import DiscoverFilterBar from "./DiscoverFilterBar";

function SpotsIndexPage() {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spots));
  const [type, setType] = useState({type: null});

  useEffect(() => {
    if (type === null) {
      dispatch(fetchSpots());
    } else {
      dispatch(fetchSpots(type));
    }
  }, [type, dispatch]);




  return (
    <div className="spot-index-bg">
      <div className="discover-filters">
          <DiscoverFilterBar
            type={type}
            setType={setType}
          />
      </div>

      <div className="under-filters">
        <div className="spot-list-container">
        < SpotList 
            spots={spots}
            /> 
        </div>
        <div className="map" style={{
          backgroundImage: `url(${map})`
        }}>
        </div>
      </div>
  </div>
  );
}

export default SpotsIndexPage;


