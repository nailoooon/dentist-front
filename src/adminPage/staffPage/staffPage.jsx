import React from 'react';
import styles from './staffpage.module.css'
import {useEffect, useState} from "react";
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import MemberItem from "./membarItem";

const StaffPage = () => {

    const [image, setImage] = useState(new Map())
    const addImage = (k, v) => {
        setImage(image.set(k, v))

    }

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

    useEffect(() => {
        const apiUrl = SERVER_NAME + "doctor";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setStaff(data);
        });
    }, [setStaff]);


    useEffect(() => {
        console.log("upload images")
        const apiUrl = SERVER_NAME + "image/";
        staff.forEach(member => {
            if (member.image && !image.has(member._id)) {
                axios.get(apiUrl + member.image, CONFIG).then((res) => {
                    console.log(res.data.file.data)
                    addImage(member._id, toBase64(res.data.file.data))
                    member = {...member, newImage: 'image'}
                })
            }
        })
        setStaff(staff)
    }, [staff])

    console.log(staff)


    function toBase64(arr) {
        return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''))
    }

    const handleDelete = id => {
        setStaff(staff.filter(member => {
            return  member._id !== id
        }));
    };

    return (
        <div className={styles.staffPage}>
            <h1 className={styles.pageTitle}>Staff</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Position</th>
                    <th>Specialization</th>
                    <th>dentistry</th>
                </tr>
                </thead>
                <tbody>
                {staff.map(member => (
                    <MemberItem key={member._id} member={member}
                                handleDelete={handleDelete} image={image.get(member._id)}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffPage;