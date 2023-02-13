import React, {useState} from 'react';
import {Button, Card, CardImg, CardText, CardTitle, Col, Container} from "reactstrap";
import styles from "../doctors.module.css";
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import {useEffect} from "react";
import axios from "axios";
import AppointmentModal from "../../mainPage/appointmentModal/appointmentModal";
import loading from '../../images/loader.gif'
import {usePreloadImages} from "../../hooks/usePreloadImages";


const DoctorItem = ({props, previewImage = '', doctors, modalOn = true}) => {

    const [image, setImage] = useState()
    const [isLoaded, setLoaded] = useState(false)

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    useEffect(() => {
        if (!isLoaded && props.image) {
            const apiUrl = SERVER_NAME + "image/" + props.image;
            axios.get(apiUrl, CONFIG).then((resp) => {
                const data = toBase64(resp.data.file.data);
                setImage(data);
                setLoaded(true)
            });
        } else if (!props.image) setLoaded(true)
    }, [setImage]);


    function toBase64(arr) {
        return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''))
    }

    const getImage = () => {
        if (!isLoaded) return loading
        else if (image) return  'data:image/png;base64,' + image
        else if (previewImage) {
            if (typeof previewImage === 'object') return URL.createObjectURL(previewImage)
            else return 'data:image/png;base64,' + previewImage
        }
        return "https://i.imgur.com/OVmimIN.jpg"
    }

    return (
        <Col>
            <Card body className={styles.doctors__card}>
                <CardImg className={styles.doctors__image}
                         src={getImage()}
                />

                <CardTitle tag={"h5"}>
                    {props.firstname} {props.lastname}
                </CardTitle>
                <CardText className={styles.doctors__cardText}>
                    {props.specialization_name}
                </CardText>
                <Button className={styles.doctors__btn} onClick={toggle}>
                    Записаться
                </Button>
                {modalOn && <AppointmentModal sDoctor={props} modal={modal} toggle={toggle} doctors={doctors}/>}
            </Card>
        </Col>

    );
};

export default DoctorItem;