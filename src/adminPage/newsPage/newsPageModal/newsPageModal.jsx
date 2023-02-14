import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import styles from "../../staffPage/addStaffForm/addSraffForm.module.css"
import NewsPreview from "./newsPreview";
import loader from '../../../images/loader.gif'

const NewsPageModal = ({modal, toggle, image = null, submitted,
                           pnews =
                               {title: "",
                                text: "",
                                image: null}, handleSubmit}) => {


   const [news, setNews] = useState(pnews)

    function submit(e) {
        e.preventDefault();
        if (isValid()) {
            let bodyFormData = new FormData();
            bodyFormData.append('title', news.title);
            bodyFormData.append('text', news.text);
            if (typeof news.image === 'object') {
                bodyFormData.append('picture', news.image);
            }
            else {
                let blob = b64toBlob(image, 'image/*')
                let file = new File([blob], "image")
                bodyFormData.append('picture', file);
            }
            handleSubmit(bodyFormData)
        }
    }

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    const isValid = () => {
        return news && news.title && news.text && (image || news.image)
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
                    {submitted ? <img src={loader}/> : <button type="submit" className={styles.btn} onClick={submit}>Отправить</button>}
                </form>
                <NewsPreview news={news} image={image}/>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>закрыть</Button>
            </ModalFooter>
        </Modal>
    );
};

export default NewsPageModal;