import React from "react";
import { useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input, TextArea } from '../Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { faThumbsUp } from '@fortawesome/fontawesome-free-solid'; 
import './ReviewForm.css';

function ReviewForm ( {spot, closeForm} ) {
    const sessionUser = useSelector(state => state.session.user);
    const [rating, onRatingChange] = useInput(5);
    const [body, onBodyChange] = useInput("");
    const [title, onTitleChange] = useInput("");
    const [recommends, onRecommendsChange] = useInput("");
    const [errors, onSubmit] = useSubmit({
        onSuccess: closeForm,
        action: createReview({ rating, body, title, recommends, spotId: spot.id })
    });

    return (
        <>
            <div className="review-form-container">
                <form onSubmit={onSubmit} className="review-form">
                <div className='form-header'>

                    <button onClick={closeForm} className="close-button" type="button"><FontAwesomeIcon icon={faTimes} /></button>
                    <Input
                        label="Title"
                        className="title-in-form"
                        type="text"
                        value={title}
                        onChange={onTitleChange}
                        />

                    <Input
                        label="Recommend?"
                        className="reco-box"
                        type="text"
                        value={recommends}
                        onChange={onRecommendsChange}
                        />

                </div>
                    <TextArea
                        className="comment-area"
                        label="Comment"
                        cols="30"
                        row="10"
                        value={body}
                        onChange={onBodyChange}
                        required
                    />

                    <div className="review-form-button">
                        <button className="review-submit-button" type="submit">{spot.title} thanks you!</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ReviewForm;