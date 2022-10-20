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



function SpotShowPage() {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[spotId]);
    const reviews = useSelector(getSpotReviews(parseInt(spotId)));

    const {title, price, city, state, listingType, photoUrls, country, description} = spot;
    // const hasReviewed = sessionUser && reviews.some(review => review.authorId === sessionUser.id);
    
    useEffect(() => {
        dispatch(fetchSpot(spotId));
    }, [spotId, dispatch]); 
  
    // const { description, maxGuests, lat, lng, photoUrl } = spot;

   let campsiteIcon = <FontAwesomeIcon icon={faFire} />
   let rVIcon = <FontAwesomeIcon icon={faCar} />
   let lodgeIcon = <FontAwesomeIcon icon={faFire} />

   const listingTypeIcon = () => {
        if (listingType === 'campisite') {
            return campsiteIcon
        } else if (listingType === 'RV') {
            return rVIcon
        } else {
            return lodgeIcon;
        };
   };


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
                            <div class='typeIcon'>
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
                        <div className='show-more-button'>
                            <button>Show More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review-section-container'>
                <div>review rating percentage</div>
                <div>review ratings</div>
                <div>review count</div>
                {reviews.map(review => (
                    <div className='review-post' key={review.id}>
                        <div>userpic</div>
                        <div>{review.recommends}</div>
                        <div>timestamp</div>
                        <div>benchtitle</div>
                        <div>reviewtitle</div>
                        <div>reviewbody</div>
                    </div>
                ))}
                <div>Delete button</div>
                <LeaveReview spot={spot}/>
            </div>
        </div> 
        </>
     )
}

function LeaveReview({ spot }) {
    const [showReviewForm, setShowReviewForm] = useState(false);
  
    return showReviewForm ? (
      <ReviewForm 
        spot={spot}
        closeForm={() => setShowReviewForm(false)}
      />
    ) : (
      <button className="button" onClick={() => setShowReviewForm(true)}>
        Leave a Review
      </button>
    );
  }

export default SpotShowPage;