import React from 'react';

import {Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";

import styles from "../news.module.css";
import {SERVER_NAME} from "../../API/Constants";

const NewsItem = ({news}) => {

    console.log(news)

    return (
        <Col>
            <Card body className={styles.news__card}>

                <CardImg className={styles.news__img} src={SERVER_NAME + news.picture}/>
                <CardBody>
                    <CardTitle className={styles.news__cardTitle}>
                        {news.title}
                    </CardTitle>
                    <CardText>
                        {news.text}
                    </CardText>
                    <CardText className={styles.news__date}>
                    26.08.22
                </CardText>
                </CardBody>

            </Card>
        </Col>
    );
};

export default NewsItem;