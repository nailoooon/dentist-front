import React, {useState} from 'react';
import NewsItem from "../../news/newsItem/newsItem";
import {Button} from "reactstrap";
import NewsPageModal from "./newsPageModal/newsPageModal";
import {useEffect} from "react";
import {CONFIG, CONFIGDATA, LogOut, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import loader from '../../images/loader.gif'

const NewsForm = ({news, handleDelete}) => {

    const [isDeleting, setDeleting] = useState(false)
    const [modal, setModal] = useState(false)
    const [image, setImage] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()

    function toBase64(arr) {
        return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''))
    }

    const toggle = () => {
        setModal(!modal)
    }

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

    const handleSubmit = (object) => {
        if (submitted) return
        setSubmitted(true)
        const apiUrl = SERVER_NAME + "news/" + news._id;
        axios.put(apiUrl,
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

    const selfDelete = () => {
        setDeleting(true)
        handleDelete(news._id)
    }


    return (
        isDeleting ? <img src={loader}/> : <div>
             <NewsItem news={news}/>
                <Button color={'danger'} onClick={selfDelete}>Удалить</Button>
                <Button color={'primary'} onClick={toggle}>Изменить</Button>
                <NewsPageModal modal={modal} toggle={toggle}
                pnews={news} image={image}
                handleSubmit={handleSubmit} submitted={submitted}/>
        </div>
    );
};

export default NewsForm;