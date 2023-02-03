import React from 'react';
import {Button, Card, CardImg, CardText, CardTitle, Col, Container} from "reactstrap";
import styles from "../doctors.module.css";
import {SERVER_NAME} from "../../API/Constants";
import pic from "../../images/doctor.jpg"

const DoctorItem = ({props}) => {

    return (

        <Col>
            <Card body className={styles.doctors__card}>
                <CardImg className={styles.doctors__image}
                         // src={SERVER_NAME + props.picture}
                    src={pic}
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