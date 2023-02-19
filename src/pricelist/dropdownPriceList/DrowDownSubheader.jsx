import React from 'react';
import {useState} from "react";
import NameAndPrice from "./nameAndPrice";
import styles from "../pricelist.module.css"
import {useNavigate} from "react-router-dom";
import ConfirmDeleteModal from "../../adminPage/modals/confirmDeleteModal";
import CreateServiceModal from "../../adminPage/servicePage/ServiceSectorList/CreateServiceModal";
import {CONFIG, LogOut, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import loader from "../../images/loader.gif";
import {Button} from "reactstrap";

const DrowDownSubheader = ({item, isAdmin= false, handleSubSectorDelete, handleDeleteServiceState}) => {

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)

    const [isAddSubSectorOpen, setIsAddSubSectorOpen] = useState(false)
    const [isDeleting, setDeleting] = useState(false)
    const [willBeDeleted, setWillBeDeleted] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

    const toggleEdit = () => setIsEditOpen(prevState => !prevState)
    const toggle = () => setIsOpen(prevState => !prevState)
    const toggleAdd = () => setIsAddSubSectorOpen(prevState => !prevState)


    const handleUpdateSubSector = (object) => {
        const apiUrl = SERVER_NAME + "service/subsector/" + item._id;
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

    const handleAddService = (object) => {
        const apiUrl = SERVER_NAME + "service/s/"
        object.subSector_id = item._id
        setSubmitted(true)
        axios.post(apiUrl, object, CONFIG).then(res => {
            console.log(res)
        }).catch(err => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }
        }).finally(() => setSubmitted(false))
    }

    return (
        <div>
            <div onClick={toggle} className={styles.main__subheader}>
                {item.name}
            </div>
            {isAdmin ? isDeleting ? <img src={loader}/> : <div style={{display: "flex", justifyContent: 'center'}}>
                <Button color={'danger'} onClick={() => setDeleteModalOpen(true)}>Удалить</Button>
                <Button color={'primary'} onClick={() => setIsEditOpen(true)}>Ред.</Button>
                <Button color={'success'} onClick={() => setIsAddSubSectorOpen(true)}>+</Button>
            </div> : null}
            {
                isOpen && ( item.services.length > 0 ?
                    <div>
                        <div style={{display: "flex"}}>
                            <div className={styles.price__column__name}>
                                Наименование услуги
                            </div>
                            <div className={styles.price__column__name}>
                                Стоимость (в тенге)
                            </div>
                            {isAdmin && <div className={styles.price__column__name}>
                                Действия
                            </div>}
                        </div>
                        {item.services.map(obj => {
                                return <NameAndPrice key={obj._id} item={obj} isAdmin={isAdmin} handleDeleteServiceState={handleDeleteServiceState}/>
                            }
                        )}
                    </div> : 'Ничего нет'

                )
            }
            <ConfirmDeleteModal isModalOpen={isDeleteModalOpen} setIsModalOpen={setDeleteModalOpen}
                                handleDelete={handleSubSectorDelete} id={item} setDeleting={setDeleting}/>
            <CreateServiceModal isOpen={isEditOpen} toggle={toggleEdit} submitted={submitted}
                                text={"Обновить"} handleSubmit={handleUpdateSubSector} pName={item.name}/>
            <CreateServiceModal isOpen={isAddSubSectorOpen} toggle={toggleAdd} submitted={submitted}
                                text={"Обновить"} handleSubmit={handleAddService} hasPrice={true}/>
        </div>
    );
};

export default DrowDownSubheader;