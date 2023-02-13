import React from 'react';
import styles from '../tableCSS/table.module.css'
import {useEffect, useState} from "react";
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import MemberItem from "./membarItem";
import AddStaffForm from "./addStaffForm/addStaffForm";

const StaffPage = () => {


    const [staff, setStaff] = useState([
        {
            _id: 1,
            lastname: '',
            firstname: LoadingData,
            dentistry: LoadingData,
            position: LoadingData,
            specialization_name: LoadingData
        },
        {
            _id: 2,
            lastname: '',
            firstname: LoadingData,
            dentistry: LoadingData,
            position: LoadingData,
            specialization_name: LoadingData
        },
        {
            _id: 3,
            lastname: '',
            firstname: LoadingData,
            dentistry: LoadingData,
            position: LoadingData,
            specialization_name: LoadingData
        },
    ])

    const [willBeDeleted, setWillBeDeleted] = useState([])

    useEffect(() => {
        const apiUrl = SERVER_NAME + "doctor";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setStaff(data);
        });
    }, [setStaff]);



    const handleDelete = id => {
        if (willBeDeleted.includes(id)) return console.log("удаляется")
        const apiUrl = SERVER_NAME + "doctor/" + id;
        setWillBeDeleted([...willBeDeleted, id])
        axios.delete(apiUrl, CONFIG).then(res => {
            setStaff(staff.filter(member => {
                return  member._id !== id
            }))
            console.log(res)
        })
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.pageTitle}>Staff</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Фото</th>
                    <th>Имя и фамилия</th>
                    <th>Специальность</th>
                    <th>Стоматология</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {staff.map(member => (
                    <MemberItem key={member._id} member={member}
                                handleDelete={handleDelete} />
                ))}
                </tbody>
            </table>

            <AddStaffForm />
        </div>
    );
};

export default StaffPage;