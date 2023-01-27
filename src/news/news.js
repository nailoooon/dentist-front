import React from 'react';
import styles from '../news/news.module.css'
import {Card, CardText, CardTitle, Col, Container, Row} from "reactstrap";

const News = () => {
    return (
        <div className={styles.news}>
            <div className={styles.news__title}>
                Новости <span style={{color: "#3caaf7"}}>и акции</span>
            </div>
            <div className={styles.news__divider}>
                ______
            </div>
            <Container>
                <Row xs={1}>
                    <Col>
                        <Card body className={styles.news__card}>
                            <CardText className={styles.news__date}>
                                26.08.22
                            </CardText>
                            <CardTitle className={styles.news__cardTitle}>
                                Открылась новая клиника по адресу:
                            </CardTitle>
                            <CardText>
                                С 20 августа по 20 сентября - месяц белоснежных улыбок со скидкой 50%.
                                Профессиональная комплексная чистка + фторирование.
                                Кариес и пародонтит больше не проблема!
                                Удаляем зубные камни, налет, делаем чистку
                            </CardText>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className={styles.news__card}>
                            <CardText className={styles.news__date}>
                                26.08.22
                            </CardText>
                            <CardTitle className={styles.news__cardTitle}>
                                Открылась новая клиника по адресу:
                            </CardTitle>
                            <CardText>
                                С 20 августа по 20 сентября - месяц белоснежных улыбок со скидкой 50%.
                                Профессиональная комплексная чистка + фторирование.
                                Кариес и пародонтит больше не проблема!
                                Удаляем зубные камни, налет, делаем чистку
                            </CardText>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className={styles.news__card}>
                            <CardText className={styles.news__date}>
                                26.08.22
                            </CardText>
                            <CardTitle className={styles.news__cardTitle}>
                                Открылась новая клиника по адресу:
                            </CardTitle>
                            <CardText>
                                С 20 августа по 20 сентября - месяц белоснежных улыбок со скидкой 50%.
                                Профессиональная комплексная чистка + фторирование.
                                Кариес и пародонтит больше не проблема!
                                Удаляем зубные камни, налет, делаем чистку
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default News;