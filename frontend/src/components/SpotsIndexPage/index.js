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
  // const [maxGuests, setMaxGuests] = useState();
  const [listingType, setListingType] = useState()

  useEffect(() => {
    if (listingType) {
      dispatch(fetchSpots({listingType}))
    }
  }, [listingType, dispatch]);

  // console.log(maxGuests ,'here')


  return (
    <div className="spot-index-bg">
      <div className="discover-filters">
        <DiscoverFilterBar 
          filter={listingType}
          setFilter={setListingType}
        />
      </div>

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
  );
}

export default SpotsIndexPage;


