import React from 'react';
import styles from "../adminPage.module.css";
import {Link} from "react-router-dom";

const CardAdminItem = ({title, text, linkText= "Перейти", linkRef }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
            <Link to={linkRef} className={styles.btn}>{linkText}</Link>
        </div>
    );
};

export default CardAdminItem;