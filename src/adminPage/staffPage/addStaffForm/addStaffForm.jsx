import React from 'react';
import {CONFIG, CONFIGDATA, LogOut, SERVER_NAME} from "../../../API/Constants";
import axios from "axios";
import {useState} from "react";
import StaffForm from "./staffForm";
import {useNavigate} from "react-router-dom";

const AddStaffForm = () => {

    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (object) => {
        if (submitted) return
        setSubmitted(true)
        const apiUrl = SERVER_NAME + "doctor";
        axios.post(apiUrl,
            object, CONFIGDATA)
            .then(res => {
            console.log(res)
        }).catch((err) => {
                if (err.response.data.statusCode === 401) {
                    LogOut()
                    navigate('/login')
                }
            })
            .finally(() => setSubmitted(false))

    };

    return (
        <div>
            <StaffForm handleSubmit={handleSubmit} submitted={submitted}/>
        </div>
    );
};

export default AddStaffForm;