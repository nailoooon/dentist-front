import React, {useState, useEffect} from 'react';
import styles from '../tableCSS/table.module.css'
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import AppointmentItem from "./appointmentItem";

const AppointmentPage = () => {
    const [appointments, setAppointment] = useState([
        {
            _id: "63e1ec2f3913b6f86f1322fe",
            total_price: LoadingData,
            date: LoadingData,
            patient: {
                _id: LoadingData,
                email: LoadingData,
                tel: LoadingData,
                fullname: LoadingData,
                __v: 0
            },
            doctor: {
                _id: LoadingData,
                firstname: LoadingData,
                lastname: '',
                specialization_name: LoadingData,
                dentistry: LoadingData,
                __v: 0
            },
        }
    ])

    useEffect(() => {
        const apiUrl = SERVER_NAME + "appointment"
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setAppointment(data);
        });
    }, [setAppointment]);

    const [willBeDeleted, setWillBeDeleted] = useState([])

    const handleDelete = id => {
        if (willBeDeleted.includes(id)) return console.log("удаляется")
        const apiUrl = SERVER_NAME + "appointment/" + id;
        setWillBeDeleted([...willBeDeleted, id])
        axios.delete(apiUrl, CONFIG).then(res => {
            setAppointment(appointments.filter(ap => {
                return ap._id !== id
            }))
        })
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.pageTitle}>Записи</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Полное имя клиента</th>
                    <th>Почта клиента</th>
                    <th>Телефон клиента</th>
                    <th>Полное имя врача</th>
                    <th>Специальность</th>
                    <th>Стоматология</th>
                    <th>Услуга</th>
                    <th>Сумма (в тенге)</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {appointments.map(appointment => (
                    <AppointmentItem key={appointment._id} appointment={appointment} handleDelete={handleDelete}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentPage;