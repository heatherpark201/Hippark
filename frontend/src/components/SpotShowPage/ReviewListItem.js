import React, {useCallback, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import './ReviewListItem.css';

function ReviewListItem ( {review, } ) {
    const  { body, createdAt, recommends, authorId, spotId } = review;

    const recommendation = () => {
     return recommends ? "recommends" : "doesn't recommend"
    }

    return (
        <>
        <div className="review-item-container">
            <header className="review-header">
                <div className="user-icon-photo">
                    <span id="user-icon"><FontAwesomeIcon icon={faUser} /></span>
                </div>
                <div className="user-name-wrapper">
                    <span id="user-name">{authorId}</span>
                    <span id="user-recommends">{recommendation}</span>
                </div>
                <div className="timestamp-wrapper">
                    <span id="review-timestamp">{createdAt}</span>
                </div>
            </header>
            <div className="review-spot-title-wrapper">
                <span id="spot-title-for-review">{spotId}</span>
            </div>

            {/* <div className="review-title-wrapper">
                <span id="review-title">{title}</span>
            </div> */}

            <div className="review-body-wrapper">
                <span id="review-body">{body}</span>
            </div>

        </div>
        </>
    )
}

export default ReviewListItem;