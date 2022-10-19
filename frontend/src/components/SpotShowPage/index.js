import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSpot } from '../../store/spots';
import './SpotShowPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';



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
                    <div><FontAwesomeIcon icon={faAngleRight} /></div>
                    <span className='csl-2'>{state}</span>
                </div>
                <div className='title-container'>
                    <span>{title}</span>
                </div>
                <div className='under-title'>
                    <div id='review-rating'>100%</div>
                    <div id='review link'>1 Review</div>
                    <div id='city-state'>{city}, {state}</div>
                </div>
            </header>
        </div>
            <div className='spot-images'>
                <div className='main-image'>
                    <img id='main-pic' src={spot.photoUrls.at(0)} alt=""></img>
                </div>
                <div className='image-collage'>
                    <div className='top'>
                        <img id='small-pics-1' src={spot.photoUrls.at(1)} alt=""></img>
                        <img id='small-pics-2' src={spot.photoUrls.at(2)} alt=""></img>
                    </div>
                    <div className='bottom'>
                    <img id='small-pics-3' src={spot.photoUrls.at(0)} alt=""></img>
                    <img id='small-pics-4' src={spot.photoUrls.at(2)} alt=""></img>
                    </div>
                </div>      
            </div>
            <div className='spot-info-container'>
                <div id='spot-acres'>spot.acres</div>
                <div id='spot-listing-type'>{listingType}</div>
                <div id='descrip'>{spot.description}</div>
            </div>
            <div>

        </div>
        </>

    )
}

export default SpotShowPage;