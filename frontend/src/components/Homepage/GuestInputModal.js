import React from "react";
import { Modal } from "../../context/Modal";

function GuestInputModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <Modal onClose={!showModal}>
        </Modal>
        </>
    )
}

export default GuestInputModal;
