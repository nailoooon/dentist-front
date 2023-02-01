import React from 'react';
import {Card, CardImg, CardText, CardTitle, Col} from "reactstrap";
import styles from "../news.module.css";
import {SERVER_NAME} from "../../API/Constants";

const NewsItem = ({news}) => {

    console.log(news)

    return (
        <Col>
            <Card body className={styles.news__card}>
                <CardImg src={SERVER_NAME + news.picture}/>
                <CardText className={styles.news__date}>
                    26.08.22
                </CardText>
                <CardTitle className={styles.news__cardTitle}>
                    {news.title}
                </CardTitle>
                <CardText>
                    {news.text}
                </CardText>
            </Card>
        </Col>
    );
};

export default NewsItem;