import React, {useState} from 'react';
import styles from "../pricelist.module.css"
import loader from "../../images/loader.gif";
import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";
import {CONFIG, LogOut, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import ConfirmDeleteModal from "../../adminPage/modals/confirmDeleteModal";
import CreateServiceModal from "../../adminPage/servicePage/ServiceSectorList/CreateServiceModal";

const NameAndPrice = ({item, isAdmin, handleDeleteServiceState}) => {

    const navigate = useNavigate()

    const [isDeleting, setDeleting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

    const toggleEdit = () => setIsEditOpen(prevState => !prevState)

    const handleUpdateService = (object) => {
        const apiUrl = SERVER_NAME + "service/s/" + item._id;
        setSubmitted(true)
        axios.put(apiUrl, object, CONFIG).then(res => {
            console.log(res)
        }).catch(err => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }
        }).finally(() => setSubmitted(false))
    }

    const handleServiceDelete = (item) => {
        const apiUrl = SERVER_NAME + "service/s/" + item._id;
        axios.delete(apiUrl, CONFIG).then(res => {
            console.log(res)
            handleDeleteServiceState(item)
        }).catch(err => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }
        }).finally(() => setSubmitted(false))
    }

    return (
        <div style={{display: "flex"}}>
            <div className={styles.price__column__item}>
                {item.name}
            </div>
            <div className={styles.price__column__item}>
                {item.price}
            </div>
            {isAdmin ? isDeleting ? <img src={loader}/> : <div className={styles.price__column__item}>
                <Button color={'danger'} onClick={() => setDeleteModalOpen(true)}>Удалить</Button>
                <Button color={'primary'} onClick={() => setIsEditOpen(true)}>Ред.</Button>
            </div> : null}
            <ConfirmDeleteModal isModalOpen={isDeleteModalOpen} setIsModalOpen={setDeleteModalOpen}
                                handleDelete={handleServiceDelete} id={item} setDeleting={setDeleting}/>
            <CreateServiceModal isOpen={isEditOpen} toggle={toggleEdit} submitted={submitted}
                                text={"Обновить"} handleSubmit={handleUpdateService} hasPrice={true} pName={item.name} pPrice={item.price}/>
        </div>
    );
};

export default NameAndPrice;