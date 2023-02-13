import React from 'react';
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import {useState} from "react";
import loader from "../../images/loader.gif";
import styles from "../staffPage/staffpage.module.css";

const AppointmentItem = ({appointment, handleDelete}) => {

    const [isDeleting, setDeleting] = useState(false)

    const selfDelete = () => {
        setDeleting(true)
        handleDelete(appointment._id)
    }

    return (
        <tr>
            <td>{appointment.patient ? appointment.patient.fullname : "Отсутствует в базе данных"}</td>
            <td>{appointment.patient ? appointment.patient.email : "Отсутствует в базе данных"}</td>
            <td>{appointment.patient ? appointment.patient.tel : "Отсутствует в базе данных"}</td>
            <td>{appointment.doctor ? (appointment.doctor.firstname + ' ' + appointment.doctor.lastname)
                : "Отсутствует в базе данных"}</td>
            <td>{appointment.doctor ? appointment.doctor.specialization_name: "Отсутствует в базе данных"}</td>
            <td>{appointment.doctor ? appointment.doctor.dentistry: "Отсутствует в базе данных"}</td>
            <td>{'service'}</td>
            <td>{appointment.total_price}</td>
            <td>
                {isDeleting ? <img src={loader}/> :
                    <button className={styles.deleteButton} onClick={selfDelete}>Удалить</button>}
            </td>
        </tr>
    );
};

export default AppointmentItem;