import React from 'react';
import styles from '../doctors/doctors.module.css'
import {Button, Card, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {CONFIG, LoadingData, LoadingServices, SERVER_NAME} from "../API/Constants";
import axios from "axios";
import DoctorItem from "./doctorItem/doctorItem";

const Doctors = ({selectedDentistry}) => {

    const [services, setServices] = useState(LoadingServices)
    const [doctors, setDoctors] = useState([{
        _id: 0,
        firstname: LoadingData,
        lastname: '',
        specialization_name: LoadingData,
        dentistry: ''
    }]);


    useEffect(() => {
        if (!selectedDentistry) return
        const apiUrl = SERVER_NAME + "doctor/dentistry/" + selectedDentistry._id;
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setDoctors(data);
        });
    }, [setDoctors, selectedDentistry]);




    useEffect(() => {
        if (!selectedDentistry) return
        console.log("request...")
        const apiUrl = SERVER_NAME + "service/sector/" + selectedDentistry._id;
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setServices(data);
        });
    }, [setServices, selectedDentistry]);


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
            <div style={{marginBottom:"20px", fontSize:"x-large"}}>{selectedDentistry && selectedDentistry.address}</div>
            <Container>
                <Row >
                    {doctors.map(doctor => {
                        return <DoctorItem key={doctor._id} props={doctor} selectedDentistry={selectedDentistry}
                                           doctors={doctors} services={services}/>
                    })}

                </Row>
            </Container>
        </div>
    );
};

export default Doctors;