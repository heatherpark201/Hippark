import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchSpots } from "../../store/spots";
import SpotList from "./SpotList";
import './SpotsIndexPage.css';
import DiscoverFilterBar from "./DiscoverFilterBar";
import SpotMap from "../SpotMap"
import SpotMapWrapper from "../SpotMap";
import { SortSpots } from "../../utils";

function SpotsIndexPage() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spots));
  const [type, setType] = useState(null);
  const [highlightedSpot, setHighlightedSpot] = useState(null);
  const [bounds, setBounds] = useState(null);
  // const params = location.pathname.split('/')   
  // const guests = params.at(3);
  // const place = params.at(2);
  
  // console.log(spots, 'here');
  
  useEffect(() => { //looking for newspots
    dispatch(fetchSpots()); //set the newSpots using utile)
  }, [dispatch]);
  
  // const sortedSpots = SortSpots(spots, {type, guests, place})
  // console.log(sortedSpots, 'here')
  // useEffect(() => { 
  //   sortedSpots  =  SortSpots(spots, {type, guests, place})
  // }, [spots, type, guests, place]);
  
// console.log(sortedSpots);
  const mapEventHandlers = useMemo(() => ({
    click: event => {
      const search = new URLSearchParams(event.latLng.toJSON()).toString();
      history.push({ pathname: '/spots', search });
    },
    idle: map => setBounds(map.getBounds().toUrlValue())
  }), [history]);

  // console.log(params, 'here')

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
            highlightedSpot={highlightedSpot}
            setHighlightedSpot={setHighlightedSpot}
            /> 
        </div>
        <div className="map-container">
          <SpotMap
            spots={spots}
            mapEventHandlers={mapEventHandlers}
            markerEventHandlers={{
              click: (spot) => history.push(`/spots/${spot.id}`),
              mouseover: (spot) => setHighlightedSpot(spot.id),
              mouseout: () => setHighlightedSpot(null)
            }}
            highlightedSpot={highlightedSpot}
          />
        </div>
      </div>
  </div>
  );
}

export default SpotsIndexPage;


