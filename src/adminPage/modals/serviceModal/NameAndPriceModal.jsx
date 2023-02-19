import React from 'react';
import styles from "../../../pricelist/pricelist.module.css";
import {Button} from "reactstrap";

const NameAndPriceModal = ({item, handleChoose}) => {

    console.log(handleChoose)

    return (
        <div style={{display: "flex"}}>
            <div className={styles.price__column__item}>
                {item.name}
            </div>
            <div className={styles.price__column__item}>
                {item.price}
            </div>
             <div className={styles.price__column__item}>
                <Button color={'success'} onClick={() => handleChoose(item)}>Выбрать</Button>
            </div>
        </div>
    );
};

export default NameAndPriceModal;