import React, {useState} from 'react';
import {Button, Card, CardImg, CardText, CardTitle, Col, Container} from "reactstrap";
import styles from "../doctors.module.css";
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import {useEffect} from "react";
import axios from "axios";

const DoctorItem = ({props}) => {

    const [image, setImage] = useState()
    const [isLoaded, setLoaded] = useState(false)

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

    return (

        <Col>

            <Card body className={styles.doctors__card}>
                <CardImg className={styles.doctors__image}
                         src={image ? 'data:image/png;base64,' + image : "https://i.imgur.com/OVmimIN.jpg"}
                />
                <CardTitle tag={"h5"}>
                    {props.firstname} {props.lastname}
                </CardTitle>
                <CardText className={styles.doctors__cardText}>
                    {props.specialization_name}
                </CardText>
                <Button className={styles.doctors__btn}>
                    Записаться
                </Button>
            </Card>
        </Col>

    );
};

export default DoctorItem;