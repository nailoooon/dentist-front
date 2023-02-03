import React from 'react';
import styles from '../welcome/welcome.module.css'
import {Card, CardText, CardTitle} from "reactstrap";
import {BsCheckCircle} from "react-icons/bs";


const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <Card className={styles.welcome__card}>
                <CardTitle className={styles.welcome__cardTitle} tag={"h1"}>
                    Лечение <span style={{color: "#3caaf7"}}>зубов</span>
                </CardTitle>
                <CardText className={styles.welcome__cardSubtitle}>
                    Позаботимся о Ваших зубах
                </CardText>
                <CardText className={styles.welcome__cardText}>
                    <BsCheckCircle style={{fontSize: "x-large", color: "white"}}/> Лечение зубов под микроскопом
                </CardText>
                <CardText className={styles.welcome__cardText}>
                    <BsCheckCircle style={{fontSize: "x-large", color: "white"}}/> Импланты, виниры, протезирование CEREC за час
                </CardText>
                <CardText className={styles.welcome__cardText}>
                    <BsCheckCircle style={{fontSize: "x-large", color: "white"}}/> Брекеты, чистка зубов, отбеливание
                </CardText>
            </Card>
        </div>
    );
};

export default Welcome;