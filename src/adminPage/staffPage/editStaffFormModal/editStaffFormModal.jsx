import React from 'react';
import {
    Button,
    Dropdown, DropdownItem, DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {useState} from "react";
import styles from "../addStaffForm/addSraffForm.module.css";
import loader from "../../../images/loader.gif";
import StaffForm from "../addStaffForm/staffForm";
import {CONFIG, CONFIGDATA, LogOut, SERVER_NAME} from "../../../API/Constants";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const EditStaffFormModal = ({modal, toggle, member, pSelectedDentistry, pImage}) => {

    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (editMember) => {
        setSubmitted(true)
        const apiUrl = SERVER_NAME + "doctor/" + member._id;
        axios.put(apiUrl,
            editMember, CONFIGDATA).then(res => {
            console.log(res)
        }).catch((err) => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }
        }).finally(() => {
            setSubmitted(false)
        })
    }

    return (
        <Modal isOpen={modal} toggle={toggle} unmountOnClose={false}>
            <ModalHeader toggle={toggle}>Запишитесь</ModalHeader>
            <ModalBody>
                <StaffForm fn={member.firstname} ln={member.lastname} pos={member.position}
                           selectedD={pSelectedDentistry} dImg={pImage} spec={member.specialization_name}
                           handleSubmit={handleSubmit} submitted={submitted}/>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>закрыть</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditStaffFormModal;