import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSpot } from '../../store/spots';


function SpotShowPage() {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[spotId]);

    useEffect(() => {
        dispatch(fetchSpot(spotId));
    }, [spotId, dispatch]);

    console.log(spotId, 'here')

    // const { description, maxGuests, lat, lng, photoUrl } = spot;


    return (
        <>
        <h1>Hello testing</h1>
        <div className='spot-show-bg'>
            <div className='spot-header'>
                <h1 id='spot-title'>{spot.title}</h1>
                <div className='under-title'>
                    <div id='review-rating'>100%</div>
                    <div id='review link'>1 Review</div>
                    <div id='city-state'>{spot.city}, {spot.state}</div>
                </div>
                <span></span>
            </div>
            <div className='spot-images'>
                {spot.photoUrl && <img src={spot.photoUrl} alt='Spot'/> }
            </div>
            <div className='spot-info-container'>
                <div id='spot-acres'>spot.acres</div>
                <div id='spot-listing-type'>listingType</div>
                <div id='descrip'>{spot.description}</div>
            </div>
            <div>
            </div>

        </div>
        </>

    )
}

export default SpotShowPage;