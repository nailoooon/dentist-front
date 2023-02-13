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
import styles from "../../adminPage/staffPage/addStaffForm/addSraffForm.module.css";
import axios from "axios";
import {CONFIG, SERVER_NAME} from "../../API/Constants";

const AppointmentModal = ({modal, toggle, doctors, services = [], sDoctor = null}) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [cellNumber, setCellNumber] = useState('')

    const [selectedDoctor, setSelectedDoctor] = useState(sDoctor)
    const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false)

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = () => {
        return  fullName.split(' ').length >= 2 && selectedDoctor && cellNumber && email && isEmailValid()
    }

    const isEmailValid = () => {
        return re.test(email)
    }

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
            doctor_id: selectedDoctor._id
        }
        const api = SERVER_NAME + 'appointment'
        axios.post(api, appointment, CONFIG).then(res => {
            console.log(res)
        })
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
                            <span style={{color: 'red'}}>{isEmailValid() ? '' : ' invalid email'}</span>
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
                            <Input type="select" name="service" id="service">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </Input>
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
                </ModalBody>
                <ModalFooter>
                    <Button onClick={submit} color={isEnable ? "primary": ''} disabled={!isEnable}>Отправить</Button>{' '}
                    <Button color="secondary" onClick={toggle}>закрыть</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default AppointmentModal;