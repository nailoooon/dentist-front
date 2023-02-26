import React,{useEffect, useState} from 'react';
import {CONFIG, LogOut, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import styles from "../tableCSS/table.module.css";
import DentistryItem from "./dentistryItem/dentistryItem";
import {Button} from "reactstrap";
import DentistryForm from "./dentistryItem/dentistryForm";
import {useNavigate} from "react-router-dom";

const DentistryPage = () => {

    const [submitted, setSubmitted] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!isOpen)
    }
    const [dentistry, setDentistry] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        updateData()
    }, [setDentistry])

    const updateData = () => {
        setDentistry([])
        const apiUrl = SERVER_NAME + 'dentistry'
        axios.get(apiUrl, CONFIG).then(res => {
            const data = res.data
            const filterData = data.filter(d => d.address)
            setDentistry(filterData)
        })
    }

    const handleSubmit = (object) => {
        const api_url = SERVER_NAME + 'dentistry'
        setSubmitted(true)
        axios.post(api_url, object, CONFIG)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }}).finally(() => setSubmitted(false))
    }

    const [willBeDeleted, setWillBeDeleted] = useState([])

    const handleDelete = (id) => {
        if (willBeDeleted.includes(id)) return console.log("удаляется")
        const apiUrl = SERVER_NAME + "dentistry/" + id;
        setWillBeDeleted([...willBeDeleted, id])
        axios.delete(apiUrl, CONFIG).then(res => {
            setDentistry(dentistry.filter(d => {
                return  d._id !== id
            }))
            console.log(res)
        })
    }


    return (
        <div className={styles.page}>
            <h1 className={styles.pageTitle}>Стоматологии</h1>
            <div style={{display: 'flex' ,justifyContent: 'center', gap: "10px", paddingBottom: "20px"}}>
                <Button color={'primary'} onClick={toggle}><h6>Добавить</h6></Button>
                <Button onClick={updateData}><h6>Обновить
                    {/*<FiRefreshCcw/>*/}
                </h6></Button>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Адрес</th>
                    <th>Номер whatsapp</th>
                    <th>Номер телефона</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {dentistry.map(d => (
                    <DentistryItem key={d._id} dentistry={d} handleDelete={handleDelete}/>
                ))}
                </tbody>
            </table>
            <DentistryForm isOpen={isOpen} toggle={toggle} handleSubmit={handleSubmit} submitted={submitted}/>
        </div>
    );
};

export default DentistryPage;