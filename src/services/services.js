import React from 'react';
import styles from '../services/services.module.css'
import {Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row} from "reactstrap";
import {FaEyeDropper, FaSearchPlus, FaSmileWink} from "react-icons/fa";
import {IoDiamond, IoSparkles} from "react-icons/io5";
import DropDownPriceList from "../pricelist/dropdownPriceList/dropDownPriceList";

const Services = () => {
    return (
        <div id={"services"}>
            <div className={styles.services}>
                <div className={styles.serv__title}>
                    Наши <span style={{color: "#3caaf7"}}>услуги</span>
                </div>
                <div className={styles.serv__divider}>
                    ______
                </div>
            </div>
            <DropDownPriceList/>
        </div>
    );
};

export default Services;