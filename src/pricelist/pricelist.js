import React, {useEffect, useState} from 'react';
import styles from '../pricelist/pricelist.module.css'
import {Container, Table} from "reactstrap";
import {RowItem} from "./rowItem/rowItem";
import axios from "axios";
import {CONFIG, SERVER_NAME} from "../API/Constants";

const Pricelist = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const apiUrl = SERVER_NAME + "service";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const allServices = resp.data;
            setServices(allServices);
        });
    }, [setServices]);

    console.log(services)

    return (
        <div className={styles.pricelist}>
            <div className={styles.pricelist__title}>
                Cтоимость <span style={{color: "#3caaf7"}}>услуг</span>
            </div>
            <div className={styles.pricelist__divider}>
                ______
            </div>
            <Container>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>
                                Наименование услуги
                            </th>
                            <th>
                                Лечение зубов без микроскопа
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        services.map(item => {
                            return <RowItem key={item._id} name={item.name} price={item.price}/>
                        })
                    }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Pricelist;