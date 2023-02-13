import React from 'react';
import styles from "../../../news/news.module.css";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const NewsPreview = ({news}) => {
    return (
        <Card body className={styles.news__card}>
            {news.image ?  <CardImg className={styles.news__img}
                src={URL.createObjectURL(news.image)}/> : null}
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
    );
};

export default NewsPreview;