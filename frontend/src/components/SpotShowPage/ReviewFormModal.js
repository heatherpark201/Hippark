import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ReviewForm from "./ReviewForm";


export { ReviewForm};

export function ReviewModal({ spot, onClick, onSuccess,onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="review-modal">
        <h1>Leave Review</h1>
        <ReviewForm onSuccess={onSuccess}/>
      </div>
    </Modal>
  );
}
