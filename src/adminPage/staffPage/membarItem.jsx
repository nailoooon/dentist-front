import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import loader from '../../images/loader.gif'
import styles from './staffpage.module.css'
import EditStaffFormModal from "./editStaffFormModal/editStaffFormModal";

const MemberItem = ({member, handleDelete}) => {

    const [image, setImage] = useState('')
    const [dentistry, setDentistry] = useState()
    const [isDeleting, setDeleting] = useState(false)

    const selfDelete = () => {
        setDeleting(true)
        handleDelete(member._id)
    }

    useEffect(() => {
        const apiUrl = SERVER_NAME + "image/";
        if (member.image && !image)
            axios.get(apiUrl + member.image, CONFIG).then((res) => {
                setImage(toBase64(res.data.file.data))
            })
    }, [setImage])

    useEffect(() => {
        const apiUrl = SERVER_NAME + "dentistry/";
        if (!dentistry && member.dentistry !== LoadingData)
            axios.get(apiUrl + member.dentistry, CONFIG).then((res) => {
                setDentistry(res.data)
                console.log(res.data)
            })
    }, [setDentistry])

    function toBase64(arr) {
        return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''))
    }


    function edit() {
        toggle()
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (
        <tr key={member._id}>
            <td><img src={image ? 'data:image/png;base64,' + image : ""} alt={member.image ? member.image : "NO PHOTO"} /></td>
            <td>{member.firstname  + ' '+ member.lastname}</td>
            <td>{member.specialization_name}</td>
            <td>{dentistry ? dentistry.address : LoadingData}</td>
            <td>
                {isDeleting ? <img src={loader}/> : <div style={{display: 'flex'}}>
                    <button className={styles.deleteButton} onClick={selfDelete}>Удалить</button>
                    <button disabled={!image} className={image ? styles.editButton : styles.disabledButton} onClick={edit}>Редактировать</button>
                </div>}
            </td>
            <EditStaffFormModal pImage={image} pSelectedDentistry={dentistry}
                                modal={modal} toggle={toggle} member={member}/>
        </tr>
    );
};

export default MemberItem;