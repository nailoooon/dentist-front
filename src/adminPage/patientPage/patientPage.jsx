import React, {useState, useEffect } from 'react';
import styles from './patientPage.module.css'
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";

const PatientPage = () => {

    const [image, setImage] = useState(new Map())
    const addImage = (k, v) => setImage(image.set(k, v))

    const [patients, setPatient] = useState([
        {
            id: 1,
            fullname: LoadingData,
            email: LoadingData,
            tel: LoadingData
        },
        {
            id: 2,
            fullname: LoadingData,
            email: LoadingData,
            tel: LoadingData
        },
        {
            id: 3,
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
        <div className={styles.patientsPage}>
            <h1 className={styles.pageTitle}>Patients</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.th_style}>Full Name</th>
                    <th className={styles.th_style}>Email</th>
                    <th className={styles.th_style}>Cell Number</th>
                </tr>
                </thead>
                <tbody>
                {patients.map(patient => (
                    <tr key={patient.id}>
                        <td className={styles.th_td_style}>{patient.fullname}</td>
                        <td className={styles.th_td_style}>{patient.email}</td>
                        <td className={styles.th_td_style}>{patient.tel}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientPage;