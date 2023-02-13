import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import News from "../../../news/news";
import styles from "../../staffPage/addStaffForm/addSraffForm.module.css"
import NewsItem from "../../../news/newsItem/newsItem";
import NewsPreview from "./newsPreview";

const NewsPageModal = ({modal, toggle}) => {


   const [news, setNews] = useState({
       title: "",
       text: "",
       image: null
   })

    const handleSubmit = () => {
    }

    return (
        <Modal isOpen={modal} toggle={toggle} unmountOnClose={false} fullscreen={true} scrollable={true}>
            <ModalHeader toggle={toggle}>Добавьте новость</ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Заголовок:</label>
                        <input
                            type="text"
                            className={styles.formControl}
                            id="title"
                            value={news.title}
                            onChange={(e) => setNews({...news, title: e.target.value})}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="image">Фото:</label>
                        <input
                            type="file"
                            className={styles.formControlFile}
                            id="image"
                            accept="image/*"
                            onChange={(e) => setNews({...news, image: e.target.files[0]})}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="text">Текст:</label>
                        <textarea
                            className={styles.formControl}
                            id="text"
                            value={news.text}
                            onChange={(e) => setNews({...news, text: e.target.value})}
                        />
                    </div>
                    <button type="submit" className={styles.btn}>Add News</button>
                </form>
                <NewsPreview news={news}/>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>закрыть</Button>
            </ModalFooter>
        </Modal>
    );
};

export default NewsPageModal;