import React, {useState} from "react";
import Carousel from "better-react-carousel";
import house1 from '../../assets/house1.jpeg'
import trailer1 from '../../assets/trailer1.jpeg'
import pic3  from '../../assets/pic3.jpeg'

function SpotListItem({spot}) {
  const {title, price, city, state, listing_type, max_guests } = spot;
  console.log(spot, 'right here')
  return (
    

    <div className="spot-list-item" >
      <div className="spot-carousel">
      <Carousel className="slide" >
        <Carousel.Item>
          <img className="picz" src={house1} /> 
        </Carousel.Item>
        <Carousel.Item>
          <img className="picz" src={trailer1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="picz" src={pic3} />
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

