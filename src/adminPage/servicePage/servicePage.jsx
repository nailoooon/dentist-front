import React, {useEffect, useState} from 'react';
import ServiceSectorList from "./ServiceSectorList/ServiceSectorList";
import {CONFIG, LoadingData, SERVER_NAME} from "../../API/Constants";
import axios from "axios";
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import {Button, DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import {AiFillSetting} from "react-icons/ai";
import {FiMapPin} from "react-icons/fi";

const ServicePage = () => {

    const [dentistry, setDentistry] = useState([])
    const [selectedDentistry, setSelectedDentistry] = useState(null)

    useEffect(() => {
        const apiUrl = SERVER_NAME + 'dentistry'
        axios.get(apiUrl, CONFIG).then(res => {
            const data = res.data
            const filterData = data.filter(d => d.address)
            setDentistry(filterData)
            setSelectedDentistry(filterData[0])
        })
    }, [setDentistry])

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{paddingRight: '30px'}}>
                    {selectedDentistry && selectedDentistry.address}
                </div>
                <UncontrolledDropdown>
                    <DropdownToggle nav caret style={{color: "black"}}>
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
            </div>
            <ServiceSectorList selectedDentistry={selectedDentistry}/>
        </div>
    );
};

export default ServicePage;