import React, {useCallback, useState} from "react";
import Carousel from "better-react-carousel";
import { Link, useHistory } from "react-router-dom";

function SpotListItem({spot, isHighlighted, setHighlightedSpot}) {
  const {title, price, city, state, listingType, photoUrls} = spot;
  const history = useHistory();
  
  const onClick = useCallback(() => {
    const to = `/spots/${spot.id}`
    history.push(to)
  },[history])

  return (
    <div 
      className={"spot-list-item" + (isHighlighted ? " highlighted" : "")} 
      onClick={onClick}
      onMouseEnter={() => setHighlightedSpot(spot.id)}
      onMouseLeave={() => setHighlightedSpot(null)}
    >
      {/* <Link to={`/spots/${spot.id}`}>link</Link> */}
       <div className="spot-carousel">
        <Carousel className="slide">
          {photoUrls.map((url, idx) => {
            return (
                <Carousel.Item key={idx}>
                  <img className="picz" src={url} alt=""/>
                </Carousel.Item> 
            )
          })}
        </Carousel>
      </div>

      <div className="list-item-info">
        <h2 id="spot-title">{title}</h2>
       
        <div className="info-field">

          <div className="line-1">
            <span className="list-item-copy">X sites • {listingType}</span>
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

