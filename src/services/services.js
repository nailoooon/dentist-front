import React from 'react';
import styles from '../services/services.module.css'
import {Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row} from "reactstrap";
import {FaEyeDropper, FaSearchPlus, FaSmileWink} from "react-icons/fa";
import {IoDiamond, IoSparkles} from "react-icons/io5";

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.serv__title}>
                Наши <span style={{color: "#3caaf7"}}>услуги</span>
            </div>
            <div className={styles.serv__divider}>
                ______
            </div>
            <Container>
                <Row >
                    <Col>
                        <Card body className={styles.serv__card}>
                            <div className={styles.serv__colIcon}>
                                <FaEyeDropper style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                            </div>
                            <CardBody className={styles.serv__cardBody}>
                                <CardTitle tag={"h5"} className={styles.serv__cardTitle}>
                                    ТЕРАПИЯ
                                </CardTitle>
                                <CardSubtitle className={styles.serv__cardSubtitle}>
                                    Мы проводим лечение основных стоматологических заболеваний:
                                </CardSubtitle>
                                <Button className={styles.serv__cardButton}>
                                    Подробнее
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className={styles.serv__card}>
                            <div className={styles.serv__colIcon}>
                                <FaSmileWink style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                            </div>
                            <CardBody className={styles.serv__cardBody}>
                                <CardTitle tag={"h5"} className={styles.serv__cardTitle}>
                                    ОРТОПЕДИЯ
                                </CardTitle>
                                <CardSubtitle className={styles.serv__cardSubtitle}>
                                    Мы проводим лечение основных стоматологических заболеваний:
                                </CardSubtitle>
                                <Button className={styles.serv__cardButton}>
                                    Подробнее
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className={styles.serv__card}>
                            <div className={styles.serv__colIcon}>
                                <FaSearchPlus style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                            </div>
                            <CardBody className={styles.serv__cardBody}>
                                <CardTitle tag={"h5"} className={styles.serv__cardTitle}>
                                    ОРТОДОНТИЯ
                                </CardTitle>
                                <CardSubtitle className={styles.serv__cardSubtitle}>
                                    Мы проводим лечение основных стоматологических заболеваний:
                                </CardSubtitle>
                                <Button className={styles.serv__cardButton}>
                                    Подробнее
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className={styles.serv__card}>
                            <div className={styles.serv__colIcon}>
                                <FaSearchPlus style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                            </div>
                            <CardBody className={styles.serv__cardBody}>
                                <CardTitle tag={"h5"} className={styles.serv__cardTitle}>
                                    ХИРУРГИЯ
                                </CardTitle>
                                <CardSubtitle className={styles.serv__cardSubtitle}>
                                    Мы проводим лечение основных стоматологических заболеваний:
                                </CardSubtitle>
                                <Button className={styles.serv__cardButton}>
                                    Подробнее
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className={styles.serv__card}>
                            <div className={styles.serv__colIcon}>
                                <IoSparkles style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                            </div>
                            <CardBody className={styles.serv__cardBody}>
                                <CardTitle tag={"h5"} className={styles.serv__cardTitle}>
                                    ГИГИЕНА
                                </CardTitle>
                                <CardSubtitle className={styles.serv__cardSubtitle}>
                                    Мы проводим лечение основных стоматологических заболеваний:
                                </CardSubtitle>
                                <Button className={styles.serv__cardButton}>
                                    Подробнее
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className={styles.serv__card}>
                            <div className={styles.serv__colIcon}>
                                <IoDiamond style={{fontSize: "xxx-large", margin: "30px", color: "#3caaf7"}}/>
                            </div>
                            <CardBody className={styles.serv__cardBody}>
                                <CardTitle tag={"h5"} className={styles.serv__cardTitle}>
                                    ОТБЕЛИВАНИЕ
                                </CardTitle>
                                <CardSubtitle className={styles.serv__cardSubtitle}>
                                    Мы проводим лечение основных стоматологических заболеваний:
                                </CardSubtitle>
                                <Button className={styles.serv__cardButton}>
                                    Подробнее
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;