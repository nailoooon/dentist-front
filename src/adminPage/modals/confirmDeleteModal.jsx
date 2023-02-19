import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const ConfirmDeleteModal = ({handleDelete, id, isModalOpen, setIsModalOpen, text='', setDeleting = null}) => {


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };

    const handleCancelClick = () => {
        setIsModalOpen(false);
    };

    const handleConfirmClick = () => {
        // Perform the actual delete operation here
        setIsModalOpen(false);
        if (setDeleting !== null) setDeleting(true)
        handleDelete(id)
    };

    return (
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
            <ModalBody>
                <p>
                    Вы уверены, что хотите удалить это?
                    <br/>
                    {text}
                </p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleConfirmClick}>
                    Yes
                </Button>
                <Button color="secondary" onClick={handleCancelClick}>
                    No
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ConfirmDeleteModal;