import React, { useState } from 'react';
import { ReviewModal } from './ReviewModal';

function LeaveReviewButton(spot) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='leave-review-button'>
            <button onClick={() => setShowModal(true)} className='leave-review-button'>
                Leave A Review!
            </button>
            {showModal && <ReviewModal 
                spot={spot}
                onClose={() => setShowModal(false)}
            />}
        </div>
    )
}

export default LeaveReviewButton;