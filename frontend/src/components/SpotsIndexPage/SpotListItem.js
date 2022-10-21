import React, {useCallback, useState} from "react";
import Carousel from "better-react-carousel";
import { Link, useHistory } from "react-router-dom";
import './SpotListItem.css'
import { useSelector } from "react-redux";


function SpotListItem({spot, isHighlighted, setHighlightedSpot}) {
  const {title, price, city, state, listingType, photoUrls, sites, acres} = spot;
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  
  const onClick = useCallback(() => {
    const to = `/spots/${spot.id}`
    history.push(to)
  },[history, spot])


  
  // onMouseEnter={() => setHighlightedSpot(spot.id)}
  // onMouseLeave={() => setHighlightedSpot(null)}

  return (
    <div className="spot-list-item-container">
      {/* <Link to={`/spots/${spot.id}`}>link</Link> */}
       <div className="spot-carousel">
        <Carousel className="slide" style={{
          width: 350,
          height:220
        }}>
          {photoUrls.map((url, idx) => {
            return (
                <Carousel.Item className="carousel-item" key={idx}>
                  <img className="picz" src={url} alt="" />
                </Carousel.Item> 
            )
          })}
        </Carousel>
      </div>

      <div className="list-item-info" onClick={onClick}>
        <h2 id="spot-title">{title}</h2>
       
        <div className="info-field">

          <div className="line-1">
            <span className="list-item-copy">{sites} {sites === 1 ? 'Site' : 'Sites'} • {listingType}</span>
          </div>

          <div className="line-2">
            <span className="list-item-copy">{acres} acres • {city}, {state} (23mi) </span>
          </div>

          <div className="price">
            <span className="price-from">from </span>
            <span className="price-num">${price}</span>
            <span className="price-night">/night </span>
          </div >
          
        </div>
      </div>
    </div>
  
  );
}

export default SpotListItem;

