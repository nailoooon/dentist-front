import React from 'react';
import styles from '../news/news.module.css'
import {Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {CONFIG, SERVER_NAME} from "../API/Constants";
import axios from "axios";
import NewsItem from "./newsItem/newsItem";

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiUrl = SERVER_NAME + "news";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const allNews = resp.data;
            setNews(allNews);
        });
    }, [setNews]);

    console.log(news)

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
                    {news.map(item => <NewsItem key={item._id} news={item}/>)}
                </Row>
            </Container>
        </div>
    );
};

export default News;