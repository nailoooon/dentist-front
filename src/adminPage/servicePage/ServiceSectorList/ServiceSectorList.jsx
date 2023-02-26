import React, {useEffect, useState} from 'react';
import {CONFIG, LoadingServices, LogOut, SERVER_NAME} from "../../../API/Constants";
import axios from "axios";
import DropDownHeader from "../../../pricelist/dropdownPriceList/DropDownHeader";
import {Button} from "reactstrap";
import CreateServiceModal from "./CreateServiceModal";
import {useNavigate} from "react-router-dom";

const ServiceSectorList = ({selectedDentistry, updateData = null}) => {

    const [willBeDeleted, setWillBeDeleted] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const navigate = useNavigate()

    const toggle = () => setOpen(!isOpen)

    const [state, setState] = useState(LoadingServices)


    useEffect(() => {
        if (!selectedDentistry) {
            setState(LoadingServices)
            return
        }
        console.log("request...")
        if (state !== LoadingServices) setState(LoadingServices)
        const apiUrl = SERVER_NAME + "service/sector/" + selectedDentistry._id;
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;
            setState(data);
        });
    }, [setState, selectedDentistry]);

    const handleCreateSector = (object) => {
        if (!selectedDentistry) return
        const api_url = SERVER_NAME + 'service/sector'
        object.dentistry_id = selectedDentistry._id
        setSubmitted(true)
        console.log(object)
        axios.post(api_url, object, CONFIG).then(res => {
            const data = res.data
            setState([...state, data])
        }).catch(err => {
            if (err.response.data.statusCode === 401) {
                LogOut()
                navigate('/login')
            }
        }).finally(() => {
            setSubmitted(false)
        })
    }

    const handleSectorDelete = (id) => {
        if (willBeDeleted.includes(id)) return console.log("удаляется")
        const apiUrl = SERVER_NAME + "service/sector/" + id;
        setWillBeDeleted([...willBeDeleted, id])
        axios.delete(apiUrl, CONFIG).then(res => {
            setState(state.filter(i => {
                return  i._id !== id
            }))
        })
    }

    const handleSubSectorDelete = (item) => {
        setState(state.map((sector) => {
            if (sector._id === item.sector_id) return {
                ...sector,
                subSectors: sector.subSectors.filter((subSector) => {
                    return  subSector._id !== item._id
                })
            }
            else return sector
        }))
    }

    const handleDeleteServiceState = (item) => {
        console.log(item)
        console.log(state)
        setState(state.map((sector) => {
            return {
                ...sector,
                subSectors: sector.subSectors.map((subSector) => {
                    if (subSector._id === item.subSector_id) return {
                        ...subSector,
                        services: subSector.services.filter((service) => {
                            return service._id !== item._id
                        })
                    }
                    else return subSector
                })
            }
        }))
    }



    return (
        <div>
            <div style={{display: 'flex' ,justifyContent: 'center', gap: "10px"}}>
                <Button color={'primary'} onClick={toggle}><h6>Добавить</h6></Button>
                <Button onClick={updateData}><h6>Обновить
                    {/*<FiRefreshCcw/>*/}
                </h6></Button>
            </div>
            <CreateServiceModal isOpen={isOpen} toggle={toggle} submitted={submitted}
                                text={"Создать"} handleSubmit={handleCreateSector}/>
            {
            state.length ? <div>
                {state.map(obj => {
                    return <DropDownHeader key={obj._id} item={obj}
                                           handleDeleteServiceState={handleDeleteServiceState}
                                           isAdmin={true} handleSubSectorDeleteState={handleSubSectorDelete}
                                           handleSectorDelete={handleSectorDelete}/>
                })}
            </div> : <div style={{textAlign: 'center', color: 'red', fontSize: '18px'}}>Добавьте услуги</div>
        } </div>
    );
};

export default ServiceSectorList;