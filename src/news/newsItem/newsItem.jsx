import React from 'react';

import {Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";

import styles from "../news.module.css";
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import {useEffect, useState} from "react";
import axios from "axios";
const NewsItem = ({news}) => {
    const limit = 600;

    const [isFull, setFull] = useState(news.text.length <= limit)
    const [text, setText] = useState(news.text.length > limit ? news.text.slice(0, limit - 20) + "... " : news.text)

    const changeText = () => {
        if (isFull) setText(news.text.slice(0, limit - 20) + "... ")
        else setText(news.text)
        setFull(prev => !prev)
    }

    const [image, setImage] = useState()
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!isLoaded && news.image) {
            const apiUrl = SERVER_NAME + "image/" + news.image;
            axios.get(apiUrl, CONFIG).then((resp) => {
                const data = toBase64(resp.data.file.data);
                setImage(data);
                setLoaded(true)
            });
        } else if (!news.image) setLoaded(true)
    }, [setImage]);

    function toBase64(arr) {
        return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''))
    }

    return (
        <Col>
            <Card body className={styles.news__card}>
                <CardImg className={styles.news__img}
                         src={image ? 'data:image/png;base64,' + image : ""}/>
                <CardBody>
                    <CardTitle className={styles.news__cardTitle}>
                        {news.title}
                    </CardTitle>
                    <CardText>
                        {text}
                        <span  onClick={changeText} style={{color: '#3caaf7'}}>
                            {!isFull ? "[Читать дальше]" : news.text.length > limit ? "[Скрыть]" : null}
                        </span>
                    </CardText>
                    <CardText className={styles.news__date}>
                    {/*26.08.22*/}
                </CardText>
                </CardBody>

            </Card>
        </Col>
    );
};

export default NewsItem;