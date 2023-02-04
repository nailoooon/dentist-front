import React from 'react';
import styles from '../doctors/doctors.module.css'
import {Button, Card, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {CONFIG, SERVER_NAME} from "../API/Constants";
import axios from "axios";
import DoctorItem from "./doctorItem/doctorItem";

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const apiUrl = SERVER_NAME + "doctor";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            console.log(data)
            setDoctors(data);
        });
    }, [setDoctors]);

    return (
        <div className={styles.doctors} id={"doctors"}>
            <div className={styles.doctors__title}>
                Наша <span style={{color: "#3caaf7"}}>команда</span>
            </div>
            <div className={styles.doctors__title2}>
                профессионалов
            </div>
            <div className={styles.doctors__divider}>
                ______
            </div>
            <Container>
                <Row >
                    {doctors.map(doctor => {
                        return <DoctorItem key={doctor._id} props={doctor}/>
                    })}

                </Row>
            </Container>
        </div>
    );
};

export default Doctors;