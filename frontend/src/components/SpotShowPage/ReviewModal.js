import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewForm from "./ReviewForm";


export function ReviewModal({ spot, onSuccess, onClose }) {
  const [leaveReview, setLeaveReview] = useState(false);

  return (
    <Modal onClose={onClose}>
      <div className="review-modal">
        <h1>Leave Review</h1>
        <ReviewForm 
        spot={spot} 
        onSuccess={onSuccess}
        />
      </div>
    </Modal>
  );
}
