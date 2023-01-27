import React from 'react';
import styles from '../pricelist/pricelist.module.css'
import {Container, Table} from "reactstrap";

const Pricelist = () => {
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
                            <th>
                                Лечение зубов с микроскопом
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope={"row"}>
                                Консультация
                            </th>
                            <th>
                                300 руб.
                            </th>
                            <th>

                            </th>
                        </tr>
                        <tr>
                            <th scope={"row"}>
                                Диагностическое вмешательство
                            </th>
                            <th>
                                1500 руб.
                            </th>
                            <th>
                                1500 руб.
                            </th>
                        </tr>
                        <tr>
                            <th scope={"row"}>
                                Имплантация эмали (лечение кариеса)
                            </th>
                            <th>
                                2500 руб.
                            </th>
                            <th>
                                2500 руб.
                            </th>
                        </tr>
                        <tr>
                            <th scope={"row"}>
                                Диагностическое вмешательство
                            </th>
                            <th>
                                1500 руб.
                            </th>
                            <th>
                                1500 руб.
                            </th>
                        </tr>
                        <tr>
                            <th scope={"row"}>
                                Консультация
                            </th>
                            <th>
                                300 руб.
                            </th>
                            <th>

                            </th>
                        </tr>
                        <tr>
                            <th scope={"row"}>
                                Диагностическое вмешательство
                            </th>
                            <th>
                                1500 руб.
                            </th>
                            <th>
                                1500 руб.
                            </th>
                        </tr>
                        <tr>
                            <th scope={"row"}>
                                Имплантация эмали (лечение кариеса)
                            </th>
                            <th>
                                2500 руб.
                            </th>
                            <th>
                                2500 руб.
                            </th>
                        </tr>
                        <tr>
                            <th scope={"row"}>
                                Диагностическое вмешательство
                            </th>
                            <th>
                                1500 руб.
                            </th>
                            <th>
                                1500 руб.
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Pricelist;