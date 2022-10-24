import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input, TextArea } from '../Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { faThumbsUp } from '@fortawesome/fontawesome-free-solid'; 
import { faThumbsDown } from '@fortawesome/fontawesome-free-solid'; 
import './ReviewForm.css';

function ReviewForm ( {spot, onSuccess} ) {
    const [rating, onRatingChange] = useInput(5);
    const [body, onBodyChange] = useInput("");
    const [title, onTitleChange] = useInput("");
    const [recommends, setRecommends] = useState("true");
    const [errors, onSubmit] = useSubmit({
        onSuccess,
        action: createReview({ rating, body, title, recommends, spotId: spot.id })
    });

    return (
        <>
            <div className="review-form-container">
                <form onSubmit={onSubmit} className="review-form">
                <div className='form-header'>
                    
                    {/* <button onClick={closeForm} className="close-button" type="button"><FontAwesomeIcon icon={faTimes} /></button> */}
                    <div className="review-title-container">
                        <Input
                            label="Title"
                            className="title-in-form"
                            type="text"
                            value={title}
                            onChange={onTitleChange}
                            />
                    </div>
                    <div className="ratings-and-reco-container">
                        <div className="ratings-star">
                            <Input
                                label="rating"
                                className="review-rating"
                                type="text"
                                value={rating}
                                onChange={onRatingChange}
                            />
                        </div>
                    <div className="reco-radio-box">
                            <Input
                                label={<FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>}
                                id="yes"
                                type="radio"
                                name='recommends-radio'
                                value="true"
                                onChange={((e) => setRecommends({recommends: e.target.value}))}
                                />

                            <Input
                                label={<FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>}
                                id="no"
                                type="radio"
                                name='recommends-radio'
                                value="false"
                                onChange={((e) => setRecommends({recommends: e.target.value}))}
                                />
                        </div>
                    </div>
        
                </div>
                    <div className="text-commment-area-container">
                    <TextArea
                        className="comment-area"
                        label="Comment"
                        cols="30"
                        row="10"
                        value={body}
                        onChange={onBodyChange}
                        required
                        />
                    </div>
                    <div className="review-form-button">
                        <button className="review-submit-button" type="submit">{spot.title} thanks you!</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ReviewForm;