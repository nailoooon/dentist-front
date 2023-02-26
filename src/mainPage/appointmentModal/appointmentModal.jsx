import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    DropdownItem, DropdownMenu, DropdownToggle, Dropdown
} from 'reactstrap';
import axios from "axios";
import {CONFIG, SERVER_NAME} from "../../API/Constants";
import ServiceListModal from "../../adminPage/modals/serviceModal/ServiceListModal";
import loader from '../../images/loader.gif'

const AppointmentModal = ({modal, toggle, doctors,
                              services = [], sDoctor = null}) => {

    const [responseStatus, setResponseStatus] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [serviceModal, setServiceModal] = useState(false)
    const [selectedService, setSelectedService] = useState(null)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [cellNumber, setCellNumber] = useState('')

    const [selectedDoctor, setSelectedDoctor] = useState(sDoctor)
    const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false)

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = () => {
        return  fullName.split(' ').length >= 2 && selectedDoctor && cellNumber && email && isEmailValid() && selectedService
    }

    const toggleService = () => setServiceModal(!serviceModal)

    const isEmailValid = () => {
        return re.test(email)
    }

    const closeBtn = (
        <button className="close" onClick={toggleService} type="button">
            &times;
        </button>
    );

    const isEnable = isValid()

    const submit = () => {
        if (!isValid()) {
            console.log("Данные не валидны")
            return
        }
        const appointment = {
            total_price: "0",
            patient: {
                email: email,
                tel: cellNumber,
                fullname: fullName
            },
            doctor_id: selectedDoctor._id,
            service_id: selectedService._id
        }
        setSubmitted(true)
        const api = SERVER_NAME + 'appointment'
        axios.post(api, appointment, CONFIG).then(res => {
            setResponseStatus(res.status)
        }).catch((err) => {
            setResponseStatus(err.response.data.statusCode)
        }).finally((res) => {
            setSubmitted(false)
            clear()
        })
    }

    const clear = () => {
        setFullName('')
        setEmail('')
        setCellNumber('')
    }

    const handleChoose = (item) => {
        setSelectedService(item)
        toggleService()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} unmountOnClose={false}>
                <ModalHeader toggle={toggle}>Запишитесь</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="fullName">ФИО</Label>
                            <Input type="text" name="fullName" id="fullName" placeholder="Введите ФИО"
                                value={fullName} onChange={e => setFullName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Электронная почта
                            </Label>
                            <span style={{color: 'red'}}>{isEmailValid() ? '' : ' Неправильная почта'}</span>
                            <Input type="email" name="email" id="email" placeholder="Укажите эл. почту"
                                   value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="cellNumber">Телефон</Label>
                            <Input type="tel" name="cellNumber" id="cellNumber" placeholder="Введите номер телефона"
                                   value={cellNumber} onChange={e => setCellNumber(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="service">Услуга</Label>
                            <Input type={'button'} color={'success'}
                                   onClick={toggleService} value={selectedService ? selectedService.name : "Не выбрано"}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="doctor">Врач</Label>
                            <Dropdown isOpen={doctorDropdownOpen} toggle={() => setDoctorDropdownOpen(!doctorDropdownOpen)}>
                                <DropdownToggle caret>
                                    {selectedDoctor ? (selectedDoctor.firstname + ' ' + selectedDoctor.lastname) : "Не выбран"}
                                </DropdownToggle>
                                <DropdownMenu>
                                    { doctors.length ?
                                        doctors.map((d) => <DropdownItem key={d._id} action={'true'}
                                                                           onClick={() => setSelectedDoctor(d)} >
                                            {d.firstname + ' ' + d.lastname}</DropdownItem>) :
                                        <DropdownItem disabled>Загрузка</DropdownItem>}

                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                    </Form>
                    <Modal isOpen={serviceModal} toggle={toggleService} fullscreen={true}>
                        <ModalHeader style={{textAlign:"center"}} close={closeBtn}>
                            Выберите услугу
                        </ModalHeader>
                        <ModalBody>
                            <ServiceListModal services={services} toggle={handleChoose} />
                        </ModalBody>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    {submitted ? <img src={loader}/> :
                        <div>
                            <Button color="secondary" onClick={toggle}>Закрыть</Button>{' '}
                            <Button onClick={submit} color={isEnable ? "primary": ''} disabled={!isEnable}>Отправить</Button>
                        </div>}
                    {submitted ? null : renderStatus(responseStatus)}
                </ModalFooter>
            </Modal>
        </div>
    );
};

const renderStatus = (statusCode) => {
    console.log("update " + statusCode)
    switch (statusCode) {
        case 201:
            return <div style={{color: 'green'}}>
                Вы отправили запрос на запись. Мы вам перезвоним
            </div>
        case 500:
            return <div style={{color: 'red'}}>
                Упс, что-то пошло не так
            </div>
        default:
            return null
    }

}



export default AppointmentModal;