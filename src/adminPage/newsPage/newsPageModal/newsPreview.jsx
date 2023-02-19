import React from 'react';
import styles from "../../../news/news.module.css";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const NewsPreview = ({news, image}) => {


    console.log(news)

    const getImage = () => {
        if (typeof news.image === 'object') return URL.createObjectURL(news.image)
        if (image) return 'data:image/png;base64,' + image
    }

    return (
        <Card body className={styles.news__card}>
            {news.image ?  <CardImg className={styles.news__img}
                src={getImage()}/> : null}
                <CardBody>
                <CardTitle className={styles.news__cardTitle}>
                    {news.title}
                </CardTitle>
                <CardText>
                    {news.text}
                </CardText>
                <CardText className={styles.news__date}>
                    {/*26.08.22*/}
                </CardText>
            </CardBody>

        </Card>
    );
};

export default NewsPreview;