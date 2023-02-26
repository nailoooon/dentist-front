import React, {useEffect, useState} from 'react';
import {IsAuth} from "../API/Constants";
import styles from './adminPage.module.css'
import {Outlet, useNavigate} from "react-router-dom";
import CardAdminItem from "./cardAdmin/CardAdminItem";
import loader from '../images/loader.gif'

const AdminPage = () => {

    const navigate = useNavigate();


    useEffect(() => {
        if (!IsAuth()) {
            console.log("work")
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <div className={styles.adminPage}>
                <img src={loader}/>
                <h1 className={styles.pageTitle}>Admin Panel</h1>
                <div className={styles.cardContainer}>
                    <CardAdminItem title={"Записи"} text={"Мониторинг записей."}
                        linkRef={"/admin/appointment"}/>

                    <CardAdminItem title={"Пациенты"} text={"Мониторинг пациентов."}
                                    linkRef={"/admin/patient"}/>

                    <CardAdminItem title={"Врачи"} text={"Мониторинг врачей."}
                                   linkRef={"/admin/staff"}/>

                    <CardAdminItem title={"Услуги"} text={"Мониторинг услуг."}
                                   linkRef={"/admin/service"}/>

                    <CardAdminItem title={"Новости"} text={"Мониторинг новостей."}
                                   linkRef={"/admin/news"}/>

                    <CardAdminItem title={"Стоматологии"} text={"Мониторинг стоматологий."}
                                   linkRef={"/admin/dentistry"}/>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default AdminPage;