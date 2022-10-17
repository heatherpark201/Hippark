import React, {useState} from "react";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";

function SpotListItem({spot}) {
  const {title, price, city, state, listing_type, max_guests, photoUrl } = spot;

  return (
    <div className="spot-list-item" >
      <Link to={`/spots/${spot.id}`}>link</Link>
      <div className="spot-carousel">
      <Carousel className="slide" >
        <Carousel.Item>
          <img className="picz" src={spot.photoUrl} /> 
        </Carousel.Item>
      </Carousel>
      </div>

      <div className="list-item-info">
        <h2 id="spot-title">{title}</h2>
       
        <div className="info-field">

          <div className="line-1">
            <span className="list-item-copy">X sites • {listing_type}</span>
          </div>

          <div className="line-2">
            <span className="list-item-copy">X acres • {city}, {state} (23mi) </span>
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

