import React from 'react';
import styles from '../doctors/doctors.module.css'
import {Button, Card, CardText, CardTitle, Col, Container, Row} from "reactstrap";

const Doctors = () => {
    return (
        <div className={styles.doctors}>
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
                    <Col >
                        <Card body className={styles.doctors__card}>
                            <CardTitle tag={"h5"}>
                                Мария Андреева
                            </CardTitle>
                            <CardText className={styles.doctors__cardText}>
                                Врач-терапевт
                            </CardText>
                            <Button className={styles.doctors__btn}>
                                Записаться
                            </Button>
                        </Card>
                    </Col>
                    <Col >
                        <Card body className={styles.doctors__card}>
                            <CardTitle tag={"h5"}>
                                Мария Андреева
                            </CardTitle>
                            <CardText className={styles.doctors__cardText}>
                                Врач-терапевт
                            </CardText>
                            <Button className={styles.doctors__btn}>
                                Записаться
                            </Button>
                        </Card>
                    </Col>
                    <Col >
                        <Card body className={styles.doctors__card}>
                            <CardTitle tag={"h5"}>
                                Мария Андреева
                            </CardTitle>
                            <CardText className={styles.doctors__cardText}>
                                Врач-терапевт
                            </CardText>
                            <Button className={styles.doctors__btn}>
                                Записаться
                            </Button>
                        </Card>
                    </Col>
                    <Col >
                        <Card body className={styles.doctors__card}>
                            <CardTitle tag={"h5"}>
                                Мария Андреева
                            </CardTitle>
                            <CardText className={styles.doctors__cardText}>
                                Врач-терапевт
                            </CardText>
                            <Button className={styles.doctors__btn}>
                                Записаться
                            </Button>
                        </Card>
                    </Col>
                    <Col >
                        <Card body className={styles.doctors__card}>
                            <CardTitle tag={"h5"}>
                                Мария Андреева
                            </CardTitle>
                            <CardText className={styles.doctors__cardText}>
                                Врач-терапевт
                            </CardText>
                            <Button className={styles.doctors__btn}>
                                Записаться
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;