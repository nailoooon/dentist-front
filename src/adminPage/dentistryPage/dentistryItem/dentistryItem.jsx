import React, {useState} from 'react';
import styles from "../../staffPage/staffpage.module.css";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import loader from '../../../images/loader.gif'
import DentistryForm from "./dentistryForm";
import {CONFIG, LogOut, SERVER_NAME} from "../../../API/Constants";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const DentistryItem = ({dentistry, handleDelete}) => {

    const [submitted, setSubmitted] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [isDeleting, setDeleting] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()

    const toggleEditModal = () => setEditModal(!editModal)

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
        setDeleting(true)
        handleDelete(dentistry._id)
    };

    const handleSubmit = (object) => {
        setSubmitted(true)
        const apiUrl = SERVER_NAME + "dentistry/" + dentistry._id
        axios.put(apiUrl, object, CONFIG).then(res => {
            console.log(res)
        }).catch((err) => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }}).finally(() => setSubmitted(false))
    }

    return (
        <tr key={dentistry._id}>
            <td>{dentistry.address}</td>
            <td>{dentistry.whatsapp_number}</td>
            <td>{dentistry.tel_number}</td>
            <td>
                {isDeleting ? <img src={loader}/> : <div style={{display: 'flex'}}>
                    <button className={styles.deleteButton} onClick={handleDeleteClick}>Удалить</button>
                    <button className={styles.editButton} onClick={toggleEditModal}>Редактировать</button>
                </div>}
            </td>
            <DentistryForm isOpen={editModal} toggle={toggleEditModal} handleSubmit={handleSubmit}
                           submitted={submitted} dentistry={dentistry}/>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
                <ModalBody>
                    <p>
                        Вы уверены, что хотите удалить это?
                        <br/>
                        Удаление стоматологии, может привести к проблемам, если с ней связано много сотрудников и услуг
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
        </tr>
    );
};

export default DentistryItem;