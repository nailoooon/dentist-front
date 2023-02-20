import React, {useState, useEffect} from 'react';
import styles from '../tableCSS/table.module.css'
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import AppointmentItem from "./appointmentItem";
import {DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import {FiMapPin} from "react-icons/fi";

const AppointmentPage = () => {

    const [dentistry, setDentistry] = useState([{_id: 0}])
    const [selectedDentistry, setSelectedDentistry] = useState({})

    const [appointments, setAppointment] = useState([])
    const [filterAppointment, setFilterAppointment] = useState([])

    useEffect(() => {
        const filterData = appointments.filter(item => {
            if (item.doctor && item.doctor.dentistry === selectedDentistry._id) return item
        })
        setFilterAppointment(filterData)
    }, [appointments, selectedDentistry])

    useEffect(() => {
        const apiUrl = SERVER_NAME + 'dentistry'
        axios.get(apiUrl, CONFIG).then(res => {
            const data = res.data
            const filterData = data.filter(d => d.address)
            setSelectedDentistry(filterData[0])
            setDentistry(filterData)
        })
    }, [setDentistry])



    useEffect(() => {
        const apiUrl = SERVER_NAME + "appointment"
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setAppointment(data);
        });
    }, [setAppointment]);

    const [willBeDeleted, setWillBeDeleted] = useState([])

    const handleDelete = id => {
        if (willBeDeleted.includes(id)) return console.log("удаляется")
        const apiUrl = SERVER_NAME + "appointment/" + id;
        setWillBeDeleted([...willBeDeleted, id])
        axios.delete(apiUrl, CONFIG).then(res => {
            setAppointment(appointments.filter(ap => {
                return ap._id !== id
            }))
        })
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.pageTitle}>Записи</h1>
            <div style={{ fontSize: "larger"}}>
                {selectedDentistry && selectedDentistry.address}
            </div>
            <UncontrolledDropdown>
                <DropdownToggle nav caret style={{color: "black", fontSize: "medium", marginBottom:"20px"}}>
                    Адрес
                </DropdownToggle>
                <DropdownMenu>
                    {dentistry.length ? dentistry.map((d, index) =>
                        <DropdownItem key={d._id} active={selectedDentistry._id === d._id}>
                            <NavLink href="#" style={{color: "black"}} onClick={() => setSelectedDentistry(dentistry[index])}>
                                <FiMapPin style={{color: "#3caaf7"}}/> {d.address}
                            </NavLink>
                        </DropdownItem>
                    ) : <div>{LoadingData}</div>}

                </DropdownMenu>
            </UncontrolledDropdown>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>ФИО клиента</th>
                    <th>Почта клиента</th>
                    <th>Телефон клиента</th>
                    <th>ФИО врача</th>
                    <th>Специальность</th>
                    <th>Услуга</th>
                    <th>Сумма (в тенге)</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {filterAppointment.map(appointment => (
                    <AppointmentItem key={appointment._id}
                                     appointment={appointment} handleDelete={handleDelete}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentPage;