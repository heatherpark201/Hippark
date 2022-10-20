import React, {useCallback, useState} from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import './ReviewListItem.css';

function ReviewListItem ( {review} ) {
    const  { title, body, createdAt, recommends, authorId, spotId } = review;
    const spot = useSelector(state => state.spots[spotId]);
    const author = useSelector(state => state.users[authorId]);


    

    const nameSlice = (author) => {
        return author.firstName + " " + author.lastName.slice(0,1) + "."
    }


    return (
        <>
        <div className="review-item-container">
            <header className="review-header">
                <div className="user-icon-photo">
                    <span id="user-icon"><FontAwesomeIcon icon={faUser} /></span>
                </div>
                <div className="right-of-pic">
                    <div className="user-name-wrapper">
                        <div className="row-1">
                            <span id="user-name">{nameSlice(author)}</span>
                            <span id="user-recommends">{recommends ? "recommends" : "doesn't recommend"} </span>
                        </div>
                    </div>
                    <div className="timestamp-wrapper">
                        <span id="review-timestamp">{createdAt}</span>
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

        </div>
        </>
    )
}

export default ReviewListItem;