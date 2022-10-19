import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSpots } from "../../store/spots";
import SpotList from "./SpotList";
import './SpotsIndexPage.css';
import map from '../../assets/mapPlaceholder.png'
import DiscoverFilterBar from "./DiscoverFilterBar";
import SpotMap from "../SpotMap"
import SpotMapWrapper from "../SpotMap";

function SpotsIndexPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spots));
  const [type, setType] = useState({type : 'null'});
  const [highlightedSpot, setHighlightedSpot] = useState(null);
  const [bounds, setBounds] = useState(null);

  let noParams =  'true';
  if (!{type: 'null'}) noParams = 'true';




  useEffect(() => {
    if (noParams) {
      dispatch(fetchSpots());
      console.log(type)
    } else {
      dispatch(fetchSpots(type));
    }
  }, [type, dispatch]);

  const mapEventHandlers = useMemo(() => ({
    click: event => {
      const search = new URLSearchParams(event.latLng.toJSON()).toString();
      history.push({ pathname: '/spots', search });
    },
    idle: map => setBounds(map.getBounds().toUrlValue())
  }), [history]);



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


