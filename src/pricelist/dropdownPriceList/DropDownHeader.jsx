import React, {useState} from 'react';
import {Button, Container, DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import DrowDownSubheader from "./DrowDownSubheader";
import styles from "../pricelist.module.css"
import ConfirmDeleteModal from "../../adminPage/modals/confirmDeleteModal";
import {CONFIG, LoadingData, LogOut, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import CreateServiceModal from "../../adminPage/servicePage/ServiceSectorList/CreateServiceModal";
import {useNavigate} from "react-router-dom";
import loader from '../../images/loader.gif'
import {AiFillSetting} from "react-icons/ai";

const DropDownHeader = ({item, handleSectorDelete, handleDeleteServiceState,
                            handleSubSectorDeleteState, isAdmin=false}) => {

    const navigate = useNavigate()

    const [isAddSubSectorOpen, setIsAddSubSectorOpen] = useState(false)
    const [isDeleting, setDeleting] = useState(false)
    const [willBeDeleted, setWillBeDeleted] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)
    const toggleEdit = () => setIsEditOpen(prevState => !prevState)
    const toggleAdd = () => setIsAddSubSectorOpen(prevState => !prevState)

    const handleUpdateSector = (object) => {
        const apiUrl = SERVER_NAME + "service/sector/" + item._id;
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

    const handleAddSubSector = (object) => {
        const apiUrl = SERVER_NAME + "service/subsector/"
        object.sector_id = item._id
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

    const handleSubSectorDelete = (item) => {
        if (willBeDeleted.includes(item._id)) return console.log("удаляется")
        const apiUrl = SERVER_NAME + "service/subsector/" + item._id;
        setWillBeDeleted([...willBeDeleted, item._id])
        axios.delete(apiUrl, CONFIG).then(res => {
            console.log(res)
            handleSubSectorDeleteState(item)
        }).catch(err => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }
        }).finally(() => setSubmitted(false))
    }




    return (
        <Container>
            <div onClick={toggle} className={styles.main__header}>
                {item.name}

            </div>
            {isAdmin ? isDeleting ? <img src={loader}/> : <UncontrolledDropdown caret={"true"}>
                <DropdownToggle style={{color: "black"}} nav>
                    <AiFillSetting/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <Button color={'danger'} onClick={() => setDeleteModalOpen(true)}>Удалить</Button>
                    </DropdownItem>
                    <DropdownItem>
                        <Button color={'primary'} onClick={() => setIsEditOpen(true)}>Редактировать</Button>
                    </DropdownItem>
                    <DropdownItem>
                        <Button color={'success'} onClick={() => setIsAddSubSectorOpen(true)}>Добаваить</Button>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown> : null}
            {
                isOpen && (
                    <div>
                        {item.subSectors.map(obj => {
                            return <DrowDownSubheader key={obj._id} item={obj}
                                                      isAdmin={isAdmin}
                                                      handleDeleteServiceState={handleDeleteServiceState}
                                                      handleSubSectorDelete={handleSubSectorDelete}/>
                        })}
                    </div>
                )
            }
            <ConfirmDeleteModal isModalOpen={isDeleteModalOpen} setIsModalOpen={setDeleteModalOpen}
                handleDelete={handleSectorDelete} id={item._id} setDeleting={setDeleting}/>
            <CreateServiceModal isOpen={isEditOpen} toggle={toggleEdit} submitted={submitted}
                                text={"Обновить"} handleSubmit={handleUpdateSector} pName={item.name}/>
            <CreateServiceModal isOpen={isAddSubSectorOpen} toggle={toggleAdd} submitted={submitted}
                                text={"Обновить"} handleSubmit={handleAddSubSector}/>
        </Container>
    );
};

export default DropDownHeader;