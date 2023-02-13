import React, {useState} from 'react';
import NewsItem from "../../news/newsItem/newsItem";
import {Button} from "reactstrap";
import NewsPageModal from "./newsPageModal/newsPageModal";

const NewsForm = ({news}) => {

    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
    }

    return (
        <div>
            <NewsItem key={news._id} news={news}/>
            <Button color={'danger'}>Удалить</Button>
            <Button color={'primary'} onClick={toggle}>Изменить</Button>
            <NewsPageModal modal={modal} toggle={toggle}/>
        </div>
    );
};

export default NewsForm;