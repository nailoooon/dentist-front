import React from 'react';
import styles from './newsPage.module.css'
import {useEffect, useState} from "react";
import {CONFIG, CONFIGDATA, LogOut, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import {Button, Container, Row} from "reactstrap";
import loading from "../../images/loader.gif";
import NewsForm from "./NewsForm";
import NewsPageModal from "./newsPageModal/newsPageModal";
import {useNavigate} from "react-router-dom";

const NewsPage = () => {

    const [willBeDeleted, setWillBeDeleted] = useState([])
    const [news, setNews] = useState([]);
    const [modal, setModal] = useState(false)
    const [image, setImage] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()

    const toggle = () => {
        setModal(!modal)
    }

    function handleSubmit(object) {
        if (submitted) return
        setSubmitted(true)
        const apiUrl = SERVER_NAME + "news";
        axios.post(apiUrl,
            object, CONFIGDATA)
            .then(res => {
                console.log(res)
            }).catch((err) => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }
        })
            .finally(() => setSubmitted(false))
    }

    function handleDelete(id) {
        if (willBeDeleted.includes(id)) return console.log("удаляется")
        const apiUrl = SERVER_NAME + "news/" + id;
        setWillBeDeleted([...willBeDeleted, id])
        axios.delete(apiUrl, CONFIG).then(res => {
            setNews(news.filter(n => {
                return  n._id !== id
            }))
        })
    }

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
            <Button color={'primary'} onClick={toggle}><h6>Добавить</h6></Button>
            {news.length ? <Container>
                <Row xs={1}>
                    {news.map(item => <NewsForm key={item._id} news={item} handleDelete={handleDelete}/>)}
                </Row>
            </Container> : <img src={loading}/>}
            <NewsPageModal modal={modal} toggle={toggle}
                           pnews={news} image={image}
                           handleSubmit={handleSubmit} submitted={submitted}/>
        </div>
    );
};

export default NewsPage;