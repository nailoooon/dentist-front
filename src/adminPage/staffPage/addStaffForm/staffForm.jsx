import React, {useEffect, useState} from 'react';
import styles from './addSraffForm.module.css'
import {CONFIG, SERVER_NAME} from "../../../API/Constants";
import axios from "axios";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import DoctorItem from "../../../doctors/doctorItem/doctorItem";
import loader from '../../../images/loader.gif'

const StaffForm = ({fn = '', ln = '', dImg = null,
                          pos = '', selectedD = '', spec,
                          handleSubmit, submitted}) => {

    const [firstName, setFirstName] = useState(fn);
    const [lastName, setLastName] = useState(ln);
    const [specialization, setSpecialization] = useState(spec);
    const [selectedDentistry, setSelectedDentistry] = useState(selectedD);
    const [image, setImage] = useState(dImg);

    const [dentistry, setDentistry] = useState([])
    const [dropdownOpen, setDropdownOpen] = useState(false)



    useEffect(() => {
        const apiUrl = SERVER_NAME + "dentistry";
        axios.get(apiUrl, CONFIG).then((resp) => {
            const data = resp.data;

            setDentistry(data.filter(d =>
                d.address
            ));
        });
    }, [setDentistry])



    const submit = (event) => {
        event.preventDefault();
        if (isValid()) {
            let bodyFormData = new FormData();
            bodyFormData.append('firstname', firstName);
            bodyFormData.append('lastname', lastName);
            bodyFormData.append('specialization_name', specialization);
            bodyFormData.append('dentistry_id', selectedDentistry._id);
            if (typeof image === 'object') bodyFormData.append('picture', image);
            else {
                let blob = b64toBlob(image, 'image/*')
                let file = new File([blob], "image")
                bodyFormData.append('picture', file);
            }
            handleSubmit(bodyFormData)
        }
    };

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    const isValid = () => {
        return  firstName && lastName && selectedDentistry && image && specialization
    }

    const isEnable = isValid()

    return (
        <div>
            <form onSubmit={submit} className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">Имя</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Фамилия</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="specialization">Специальность</label>
                    <input
                        type="text"
                        className="form-control"
                        id="specialization"
                        value={specialization}
                        onChange={(event) => setSpecialization(event.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="dentistry">Стоматология</label>
                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                        <DropdownToggle caret>
                            {selectedDentistry.address || "Стоматология"}
                        </DropdownToggle>
                        <DropdownMenu>
                            { dentistry.length ?
                                dentistry.map((d) => <DropdownItem key={d._id} action={'true'}
                                                                   onClick={() => setSelectedDentistry(d)} >
                                    {d.address}</DropdownItem>) :
                                <DropdownItem disabled>Загрузка</DropdownItem>}

                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="image">Фото сотрудника</label>
                    <input
                        type="file"
                        className={styles.formControlFile}
                        accept="image/*"
                        id="image"
                        onChange={(event) => {
                            setImage(event.target.files[0])
                        }}
                    />
                </div>
                {submitted ? <img src={loader}/> : <button type="submit" disabled={!isEnable} className={isEnable ? styles.btn : ''}>
                    Отправить
                </button>}
            </form>
            <DoctorItem modalOn={false} previewImage={image} props={{firstname: firstName, lastname: lastName, specialization_name: specialization}}/>
        </div>
    );
};

export default StaffForm;