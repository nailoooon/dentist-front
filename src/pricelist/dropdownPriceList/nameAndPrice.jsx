import React from 'react';
import styles from "../pricelist.module.css"

const NameAndPrice = (props) => {
    return (
        <div style={{display: "flex"}}>
            <div className={styles.price__column__item}>
                {props.name}
            </div>
            <div className={styles.price__column__item}>
                {props.price}
            </div>
        </div>
    );
};

export default NameAndPrice;