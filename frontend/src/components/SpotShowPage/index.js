import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSpot } from '../../store/spots';
import './SpotShowPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';
import { faThumbsUp } from '@fortawesome/fontawesome-free-solid'; 



function SpotShowPage() {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[spotId]);
    const {title, price, city, state, listingType, photoUrls, country, description} = spot;
    
    useEffect(() => {
        dispatch(fetchSpot(spotId));
    }, [spotId, dispatch]);

    // const { description, maxGuests, lat, lng, photoUrl } = spot;


    return (
        <>
        <div className='spot-show-bg'>
            <header className='spot-show-header-container'>
                <div className='country-state-links'>
                    <span className='csl-1'>{country}</span>
                    <div className='arrow'>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </div>
                    <span className='csl-2'>{state}</span>
                </div>
                <div className='title-container'>
                    <span>{title}</span>
                </div>
                <div className='under-title'>
                    <div className='thumb'>
                        <span>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </span>
                    </div>
                    <div id='review-rating'>
                        <span>98%</span>
                    </div>
                        <span class="dot">·</span>
                    <div id='review-link'>
                        <span>0 Reviews</span>
                    </div>
                        <span class="dot">·</span>
                    <div className='city-state'>
                        <span>{city}, {state}</span>
                    </div>
                </div>
            </header>
        </div>
            <div className='spot-images'>
                <div className='main-image'>
                    <img id='main-pic' src={spot.photoUrls.at(0)} alt=""></img>
                </div>
                <div className='image-collage'>
                    <div className='top'>
                        <img className='small-pics'id='small-pics-1' src={spot.photoUrls.at(1)} alt=""></img>
                        <img className='small-pics'id='small-pics-2' src={spot.photoUrls.at(2)} alt=""></img>
                    </div>
                    <div className='bottom'>
                    <img className='small-pics'id='small-pics-3' src={spot.photoUrls.at(0)} alt=""></img>
                    <img className='small-pics'id='small-pics-4' src={spot.photoUrls.at(2)} alt=""></img>
                    </div>
                </div>      
            </div>
            <div className='spot-info-container'>
                <div className='spot-property-info'>
                    <span id='spot-acres'>spot.acres</span>
                    <span id='spot-listing-type'>{listingType}</span>
                </div>
                <div className='spot-description'>
                    <span id='descrip'>{description}</span>
                </div>
            </div>
        </>

    )
}

export default SpotShowPage;