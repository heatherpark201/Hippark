import React from "react";
import { useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input, TextArea } from '../Forms';

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

                    <Input
                        label="Title"
                        type="text"
                        value={title}
                        onChange={onTitleChange}
                    />

                    <Input
                        label="Recommend?"
                        type="radio"
                        value={recommends}
                        onChange={onRecommendsChange}
                    />

                    <Input
                        label="Recommend Yes or No?"
                        type="radio"
                        value={recommends}
                        onChange={onRecommendsChange}
                    />

                  
                    <TextArea
                        label="Comment"
                        cols="30"
                        row="10"
                        value={body}
                        onChange={onBodyChange}
                        required
                    />

                    <div className="review-form-button">
                        <button onClick={closeForm} className="close-button" type="button">Cancel</button>
                        <button className="review-submit-button" type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ReviewForm;