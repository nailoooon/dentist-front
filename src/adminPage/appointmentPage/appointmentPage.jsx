import React, {useState, useEffect} from 'react';
import styles from './appointmentPage.module.css'
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import {set} from "2gis-maps/gulp/util/projectList";

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

    return (
        <div className={styles.appointmentsPage}>
            <h1 className={styles.pageTitle}>Appointments</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Patient Full Name</th>
                    <th>Patient Email</th>
                    <th>Patient Cell Number</th>
                    <th>Doctor Full Name</th>
                    <th>Doctor Specialization</th>
                    <th>Dentistry Name</th>
                    <th>Service</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                {appointments.map(appointment => (
                    <tr key={appointment.id}>
                        <td>{appointment.patient.fullname}</td>
                        <td>{appointment.patient.email}</td>
                        <td>{appointment.patient.tel}</td>
                        <td>{appointment.doctor.firstname + ' ' + appointment.doctor.lastname}</td>
                        <td>{appointment.doctor.specialization_name}</td>
                        <td>{appointment.doctor.dentistry}</td>
                        <td>{'service'}</td>
                        <td>{appointment.total_price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentPage;