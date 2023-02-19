import React, {useState, useEffect } from 'react';
import styles from '../tableCSS/table.module.css'
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";

const PatientPage = () => {

    const [image, setImage] = useState(new Map())
    const addImage = (k, v) => setImage(image.set(k, v))

    const [patients, setPatient] = useState([
        {
            _id: 1,
            fullname: LoadingData,
            email: LoadingData,
            tel: LoadingData
        },
        {
            _id: 2,
            fullname: LoadingData,
            email: LoadingData,
            tel: LoadingData
        },
        {
            _id: 3,
            fullname: LoadingData,
            email: LoadingData,
            tel: LoadingData
        }
    ])

    useEffect(() => {
        const apiUrl = SERVER_NAME + "patient";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setPatient(data);
        });
    }, [setPatient]);


    return (
        <div className={styles.page}>
            <h1 className={styles.pageTitle}>Пациенты</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Полное имя</th>
                    <th>Почта</th>
                    <th>Телефон</th>
                </tr>
                </thead>
                <tbody>
                {patients.map(patient => (
                    <tr key={patient._id}>
                        <td>{patient.fullname}</td>
                        <td >{patient.email}</td>
                        <td>{patient.tel}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientPage;