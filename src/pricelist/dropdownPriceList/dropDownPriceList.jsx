import React, {useState} from 'react';
import DropDownHeader from "./DropDownHeader";
import {useEffect} from "react";
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import axios from "axios";

const DropDownPriceList = () => {

    const [state, setState] = useState([
        {name: "Загрузка...", subSectors: [
            {name: "Загрузка...", services: [
                    {name: "Загрузка...", price: 0},
                ]},
            {name: "Загрузка...", services: [
                    {name: "Загрузка...", price: 0},
                ]},
            ]
        },
        {name: "Загрузка...", subSectors: [
                {name: "Загрузка...", services: [
                        {name: "Загрузка...", price: 0},
                    ]},
            ]
        },
    ])

    useEffect(() => {
        const apiUrl = SERVER_NAME + "service/sector";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            console.log(data)
            setState(data);
        });
    }, [setState]);

    return (
        <div>
            {state.map(obj => {
                return <DropDownHeader item={obj}/>
            })}
        </div>
    );
};

export default DropDownPriceList;