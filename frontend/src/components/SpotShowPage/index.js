import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSpot } from '../../store/spots';
import './SpotShowPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid';
import { faThumbsUp } from '@fortawesome/fontawesome-free-solid'; 
import { faFire } from '@fortawesome/fontawesome-free-solid'    
import { faCar } from '@fortawesome/fontawesome-free-solid'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import { destroyReview, getSpotReviews } from '../../store/reviews';
import ReviewForm from './ReviewForm';
import ReviewListItem from './ReviewListItem';
import LeaveReviewButton from './LeaveReviewButton';



function SpotShowPage() {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[spotId]);
    const reviews = useSelector(getSpotReviews(parseInt(spotId)));
    const hasReviewed = sessionUser && reviews.some(review => review.authorId === sessionUser.id);

    

    const {title, price, city, state, listingType, photoUrls, country, description} = spot;
    // const hasReviewed = sessionUser && reviews.some(review => review.authorId === sessionUser.id);
    

    const avgRating = (reviews) => {
        let total = 0;

        reviews.forEach(review => {
            total += review.rating;
        })

        let num = (total / reviews.length);

        return Math.round(num * 20) + '%';
    }

    
    useEffect(() => {
        dispatch(fetchSpot(spotId));
    }, [spotId, dispatch]); 


   let campsiteIcon = <FontAwesomeIcon icon={faFire} />
   let rVIcon = <FontAwesomeIcon icon={faCar} />
   let lodgeIcon = <FontAwesomeIcon icon={faFire} />

   

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
                        <span>{avgRating(reviews)}</span>
                    </div>
                        <span className="dot">·</span>
                    <div id='review-link'>
                        <span>{reviews.length} reviews</span>
                    </div>
                        <span className="dot">·</span>
                    <div className='city-state'>
                        <span>{city}, {state}</span>
                    </div>
                </div>
            </header>
            <div className='spot-images-container'>
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
                <div className='spot-info-left'>
                    <div className='spot-property-info'>
                        <div className='acre-site-wrapper'>
                            <span id='spot-acres'>25 acres</span>
                            <span id='spot-sites'>1 site</span>
                        </div>
                        <div className='listing-type-wrapper'>
                            <div className='typeIcon'>
                                <span>{campsiteIcon}</span>
                            </div>
                            <div className='type-name'>
                                <span id='spot-listing-type'>{listingType}</span>
                            </div>
                        </div>
                    </div>
                    <div className='spot-description'>
                        <div className='spot-descrip-preview'>
                            <span id='descrip'>{description}</span>
                        </div>
                        {/* <div className='show-more-button'>
                            <button>Show More</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='review-section-container'>
                <div className='reviews-header'>
                    <div className='review-total-wrapper'>   
                        <div className='review-header-left'>
                            <div className='thumb' id='review-thumb'>
                                <span>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </span>
                            </div>
                            <div>{avgRating(reviews)}</div>
                            </div>
                        <div className='leave-review-button-wrapper'>
                            {!hasReviewed && <LeaveReviewButton spot={spot}/>}
                        </div>
                    </div>
                    <div id='reviews-amount'>{reviews.length} reviews</div>
                </div>
                <div className='reviews-list'>
                    {reviews.map((review) => (
                        <ReviewListItem 
                            key={review.id}
                            review={review}
                        />
                    ))}
                </div>
            </div>
        </div> 
        </>
     )
}

export default SpotShowPage;