import React, {useState} from 'react';
import DropDownHeader from "./DropDownHeader";
import {useEffect} from "react";
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import axios from "axios";

const DropDownPriceList = ({selectedDentistry}) => {

    const [state, setState] = useState([
        {_id: 0, name: "Загрузка...", subSectors: [
            {_id: 0, name: "Загрузка...", services: [
                    {_id: 0, name: "Загрузка...", price: 0},
                ]},
            {_id: 1, name: "Загрузка...", services: [
                    {_id: 0, name: "Загрузка...", price: 0},
                ]},
            ]
        },
        {_id: 1, name: "Загрузка...", subSectors: [
                {_id: 1, name: "Загрузка...", services: [
                        {name: "Загрузка...", price: 0},
                    ]},
            ]
        },
    ])

    console.log(selectedDentistry)

    useEffect(() => {
        if (!selectedDentistry) return
        const apiUrl = SERVER_NAME + "service/sector/" + selectedDentistry._id;
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setState(data);
        });
    }, [setState, selectedDentistry]);

    return (
        <div>
            {state.map(obj => {
                return <DropDownHeader key={obj._id} item={obj}/>
            })}
        </div>
    );
};

export default DropDownPriceList;