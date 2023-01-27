import React from 'react';
import styles from '../advantages/advantages.module.css'
import {Col, Container, Row} from "reactstrap";
import {FaCheck, FaHeartbeat, FaMedal, FaSearchPlus, FaStopwatch, FaUserCheck} from "react-icons/fa";

const Advantages = () => {
    return (
        <div className={styles.adv}>
            <Container>
                <Row>
                    <Col sm={"4"} className={styles.adv__col}>
                        <div className={styles.adv__colIcon}>
                            <FaMedal style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                        </div>
                        <span className={styles.adv__colTitle}>
                            Мы профессионалы своего дела
                        </span>
                        Мы понимаем и заботимся о своих пациентах,
                        поэтому применение анестезии возможно на всех этапах лечения
                    </Col>
                    <Col sm={"4"} className={styles.adv__col}>
                        <div className={styles.adv__colIcon}>
                            <FaUserCheck style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                        </div>
                        <span className={styles.adv__colTitle}>
                            Более 1500 клиентов
                        </span>
                        Мы понимаем и заботимся о своих пациентах,
                        поэтому применение анестезии возможно на всех этапах лечения
                    </Col>
                    <Col sm={"4"} className={styles.adv__col}>
                        <div className={styles.adv__colIcon}>
                            <FaCheck style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                        </div>
                        <span className={styles.adv__colTitle}>
                            100% гарантия результата
                        </span>
                        Мы понимаем и заботимся о своих пациентах,
                        поэтому применение анестезии возможно на всех этапах лечения
                    </Col>
                    <Col sm={"4"} className={styles.adv__col}>
                        <div className={styles.adv__colIcon}>
                            <FaSearchPlus style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                        </div>
                        <span className={styles.adv__colTitle}>
                            Лечение под микроскопом
                        </span>
                        Мы понимаем и заботимся о своих пациентах,
                        поэтому применение анестезии возможно на всех этапах лечения
                    </Col>
                    <Col sm={"4"} className={styles.adv__col}>
                        <div className={styles.adv__colIcon}>
                            <FaStopwatch style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                        </div>
                        <span className={styles.adv__colTitle}>
                            Неотложная помощь
                        </span>
                        Мы понимаем и заботимся о своих пациентах,
                        поэтому применение анестезии возможно на всех этапах лечения
                    </Col>
                    <Col sm={"4"} className={styles.adv__col}>
                        <div className={styles.adv__colIcon}>
                            <FaHeartbeat style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                        </div>
                        <span className={styles.adv__colTitle}>
                            Сохраним сложные зубы
                        </span>
                        Мы понимаем и заботимся о своих пациентах,
                        поэтому применение анестезии возможно на всех этапах лечения
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Advantages;