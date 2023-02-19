import React, {useState} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import loader from '../../../images/loader.gif'

const CreateServiceModal = ({isOpen, toggle, handleSubmit, text,
                                hasPrice = false, submitted, pName='', pPrice=0}) => {

    const [name, setName] = useState(pName)
    const [price, setPrice] = useState(pPrice)

    const submit = () => {
        if (isValid()) {
            const object = {
                name: name,
                price: price
            }
            handleSubmit(object)
        }
    }

    const isValid = () => name && (!hasPrice || price)

    return (
        <Modal isOpen={isOpen} toggle={toggle} unmountOnClose={false}>
            <ModalHeader>
                {text}
            </ModalHeader>
            <ModalBody>
                <div>
                    <label>Название</label>
                    <Input placeholder={"Введите название"} type={'text'}
                           value={name}
                           onChange={(event) => setName(event.target.value)}/>
                </div>

                {hasPrice && <div>
                    <label>Цена</label>
                    <Input placeholder={"Введите цену"} type={'number'}
                           value={price}
                           onChange={(event) => setPrice(event.target.value)}/>
                </div>}
            </ModalBody>
            <ModalFooter>{
                submitted ? <img src={loader}/> :
                <Button disabled={!isValid()} onClick={submit}>Отправить</Button>}
            </ModalFooter>
        </Modal>
    );
};

export default CreateServiceModal;