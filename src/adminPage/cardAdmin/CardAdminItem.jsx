import React from 'react';
import styles from "../adminPage.module.css";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const CardAdminItem = ({title, text, linkText= "Перейти", linkRef , direct}) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
            <Button to={linkRef} className={styles.btn} onClick={() => direct(linkRef)}>{linkText}</Button>
        </div>
    );
};

export default CardAdminItem;