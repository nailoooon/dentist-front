import React, {useState, useEffect } from 'react';
import styles from '../tableCSS/table.module.css'
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import {Button} from "reactstrap";

const loadingPatient = [
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
]

const PatientPage = () => {

    const [image, setImage] = useState(new Map())

    const [patients, setPatient] = useState(loadingPatient)

    useEffect(() => {
        updateData()
    }, [setPatient]);

    const updateData = () => {
        setPatient(loadingPatient)
        const apiUrl = SERVER_NAME + "patient";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setPatient(data);
        });
    }


    return (
        <div className={styles.page}>

            <h1 className={styles.pageTitle}>Пациенты</h1>
            <Button onClick={updateData}><h6>Обновить
                {/*<FiRefreshCcw/>*/}
            </h6></Button>
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