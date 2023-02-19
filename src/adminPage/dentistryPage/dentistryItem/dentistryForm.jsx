import React, { useState } from 'react';
import {Modal, Form, FormGroup, Label, Input, Button, ModalBody, ModalHeader,} from "reactstrap";
import loader from '../../../images/loader.gif'

const DentistryFormModal = ({isOpen, toggle, handleSubmit, submitted, dentistry = null}) => {

    const [address, setAddress] = useState(dentistry ? dentistry.address : "");
    const [whatsappNumber, setWhatsappNumber] = useState(dentistry ? dentistry.whatsapp_number : "");
    const [phoneNumber, setPhoneNumber] = useState(dentistry ? dentistry.tel_number : "");
    const [latitude, setLatitude] = useState(dentistry ? dentistry.position_x : "");
    const [longitude, setLongitude] = useState(dentistry ? dentistry.position_y : "");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Here you can submit the form data to your server or perform any other action
        console.log({ address, whatsappNumber, phoneNumber, latitude, longitude });
        if (isValid()) {
            const object = {
                address: address,
                whatsapp_number: whatsappNumber,
                tel_number: phoneNumber,
                position_x: latitude,
                position_y: longitude
            }
            handleSubmit(object)
        }
    };

    const isValid = () => {
        return address && whatsappNumber && phoneNumber && latitude && longitude
    }


    return (
        <Modal isOpen={isOpen} toggle={toggle} unmountOnClose={false}>
            <ModalBody>
                <Form onSubmit={handleFormSubmit}>
                    <FormGroup>
                        <Label for="address">Адрес</Label>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="whatsappNumber">WhatsApp номер</Label>
                        <Input
                            type="text"
                            name="whatsappNumber"
                            id="whatsappNumber"
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">Номер телефона</Label>
                        <Input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="latitude">Широта</Label>
                        <Input
                            type="text"
                            name="latitude"
                            id="latitude"
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="longitude">Долгота</Label>
                        <Input
                            type="text"
                            name="longitude"
                            id="longitude"
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                        />
                    </FormGroup>
                    {submitted ? <img src={loader}/> : <Button color="primary" type="submit">Отправить</Button>}
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default DentistryFormModal;