import React from 'react';
import styles from './newsPage.module.css'
import News from "../../news/news";
import {useEffect, useState} from "react";
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import {Container, Row} from "reactstrap";
import NewsItem from "../../news/newsItem/newsItem";
import loading from "../../images/loader.gif";
import NewsForm from "./NewsForm";

const NewsPage = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const apiUrl = SERVER_NAME + "news";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const allNews = resp.data;
            setNews(allNews);
        });
    }, [setNews]);

    return (
        <div className={styles.page}>
            <h1 className={styles.pageTitle}>Новости</h1>
            {news.length ? <Container>
                <Row xs={1}>
                    {news.map(item => <NewsForm key={item._id} news={item}/>)}
                </Row>
            </Container> : <img src={loading}/>}
        </div>
    );
};

export default NewsPage;