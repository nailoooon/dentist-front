import React from 'react';
import styles from '../news/news.module.css'
import {Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {CONFIG, LoadingData, SERVER_NAME} from "../API/Constants";
import axios from "axios";
import NewsItem from "./newsItem/newsItem";
import loading from '../images/loader.gif'

const News = ({news}) => {




    return (
        <div className={styles.news}>
            <div className={styles.news__title}>
                Новости <span style={{color: "#3caaf7"}}>и акции</span>
            </div>
            <div className={styles.news__divider}>
                ______
            </div>
            {news.length ? <Container>
                <Row xs={1}>
                    {news.map(item => <NewsItem key={item._id} news={item}/>)}
                </Row>
            </Container> : <img src={loading}/>}
        </div>
    );
};

export default News;