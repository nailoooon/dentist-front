import React from 'react';
import {IsAuth} from "../API/Constants";
import styles from './adminPage.module.css'
import { Outlet } from "react-router-dom";
import CardAdminItem from "./cardAdmin/CardAdminItem";

const AdminPage = () => {



    return (
        <div>
            <div className={styles.adminPage}>
                <h1 className={styles.pageTitle}>Admin Panel</h1>
                <div className={styles.cardContainer}>
                    <CardAdminItem title={"Appointments"} text={"View and manage upcoming appointments."}
                        linkText={"Go to Appointments"} linkRef={"/"}/>

                    <CardAdminItem title={"Patients"} text={"View and manage patient records."}
                                   linkText={"Go to Patients"} linkRef={"/admin/patient"}/>

                    <CardAdminItem title={"Staff"} text={"View and manage staff members."}
                                   linkText={"Go to Staff"} linkRef={"/"}/>

                    <CardAdminItem title={"Services"} text={"View and manage dentist services."}
                                   linkText={"Go to services"} linkRef={"/"}/>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default AdminPage;