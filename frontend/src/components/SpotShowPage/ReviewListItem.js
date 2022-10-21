import React, {useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { ReviewModal } from "./ReviewFormModal";
import './ReviewListItem.css';
import { destroyReview } from '../../store/reviews';

function ReviewListItem ( {review} ) {
    const dispatch = useDispatch();
    const  { title, body, createdAt, recommends, authorId, spotId } = review;
    const spot = useSelector(state => state.spots[spotId]);
    const author = useSelector(state => state.users[authorId]);
    const sessionUser = useSelector(state => state.session.user);


    const nameSlice = (author) => {
        return author.firstName + " " + author.lastName.slice(0,1) + "."
    }

    const dateTranslate = (createdAt) => {
        let arr = createdAt.split('-');
        let year = arr.at(0)
        let month= 'October'
        let day = arr.at(2).slice(0,2)

        return month + ' ' + day + ',' + ' ' + year
    }

    
    return (
        <>
        <div className="review-item-container">
            <header className="review-header">
                <div className="user-icon-photo">
                    <span id="user-icon-r"><img id="pro-pic" src={`https://hippark-photos.s3.amazonaws.com/hippark-logos/user-profile-logo.png`} alt=""></img>
</span>
                </div>
                <div className="right-of-pic">
                    <div className="user-name-wrapper">
                        <div className="row-1">
                            <span id="user-name">{nameSlice(author)}</span>
                            <span id="user-recommends">{recommends ? "recommends" : "doesn't recommend"} </span>
                        </div>
                    </div>
                    <div className="timestamp-wrapper">
                        <span id="review-timestamp">{dateTranslate(createdAt)}</span>
                    </div>
                </div>
            </header>
            <div className="review-spot-title-wrapper">
                <span id="spot-title-for-review">{spot.title}</span>
            </div>

            <div className="review-title-wrapper">
                <span id="review-title">{title}</span>
            </div>

            <div className="review-body-wrapper">
                <span id="review-body">{body}</span>
            </div>
            <div className="review-buttons-container">
                {review.authorId === sessionUser?.id && (
                    <button
                        onClick={() => dispatch(destroyReview(review.id))}
                        className="delete-review-button"
                    ><span className="text-delete">Do you want to delete your review?</span></button>
                )}
            </div>
        </div>
        </>
    )
}

export default ReviewListItem;