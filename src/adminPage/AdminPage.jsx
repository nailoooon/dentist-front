import React, {useEffect, useState} from 'react';
import {IsAuth} from "../API/Constants";
import styles from './adminPage.module.css'
import {Outlet, useNavigate} from "react-router-dom";
import CardAdminItem from "./cardAdmin/CardAdminItem";
import loader from '../images/loader.gif'
import AppointmentPage from "./appointmentPage/appointmentPage";
import PatientPage from "./patientPage/patientPage";
import NewsPage from "./newsPage/newsPage";
import StaffPage from "./staffPage/staffPage";
import ServicePage from "./servicePage/servicePage";
import DentistryPage from "./dentistryPage/dentistryPage";

const AdminPage = () => {

    const navigate = useNavigate();

    const [state, setState] = useState("")


    useEffect(() => {
        if (!IsAuth()) {
            console.log("work")
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <div className={styles.adminPage}>
                <h1 className={styles.pageTitle}>Admin Panel</h1>
                <div className={styles.cardContainer}>
                    <CardAdminItem title={"Записи"} text={"Мониторинг записей."}
                        linkRef={"appointment"} direct={setState}/>

                    <CardAdminItem title={"Пациенты"} text={"Мониторинг пациентов."}
                                    linkRef={"patient"} direct={setState}/>

                    <CardAdminItem title={"Врачи"} text={"Мониторинг врачей."}
                                   linkRef={"staff"} direct={setState}/>

                    <CardAdminItem title={"Услуги"} text={"Мониторинг услуг."}
                                   linkRef={"service"} direct={setState}/>

                    <CardAdminItem title={"Новости"} text={"Мониторинг новостей."}
                                   linkRef={"news"} direct={setState}/>

                    <CardAdminItem title={"Стоматологии"} text={"Мониторинг стоматологий."}
                                   linkRef={"dentistry"} direct={setState}/>
                </div>
            </div>
            {/* for subRoutes
            <Outlet />
            */}
            {renderAdminItem(state)}
        </div>
    );
};

function renderAdminItem(params) {
    switch (params){
        case 'appointment':
            return <AppointmentPage />
        case 'patient':
            return <PatientPage />
        case 'news':
            return <NewsPage />
        case 'staff':
            return <StaffPage />
        case 'service':
            return <ServicePage />
        case 'dentistry':
            return <DentistryPage />
        default:
            return null
    }
}

export default AdminPage;