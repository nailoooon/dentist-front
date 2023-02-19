import React from 'react';
import {useState} from "react";
import styles from "../../../pricelist/pricelist.module.css";
import NameAndPriceModal from "./NameAndPriceModal";

const SubServiceModal = ({item, pToggle}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)

    console.log(pToggle)

    return (
        <div>
            <div onClick={toggle} className={styles.main__subheader}>
                {item.name}
            </div>
            {
                isOpen && ( item.services.length > 0 ?
                        <div>
                            <div style={{display: "flex"}}>
                                <div className={styles.price__column__name}>
                                    Наименование услуги
                                </div>
                                <div className={styles.price__column__name}>
                                    Стоимость (в тенге)
                                </div>
                                <div className={styles.price__column__name}>
                                    Действия
                                </div>
                            </div>
                            {item.services.map(obj => {
                                    return <NameAndPriceModal key={obj._id} item={obj} handleChoose={pToggle}/>
                                }
                            )}
                        </div> : 'Ничего нет'

                )
            }
        </div>
    );
};

export default SubServiceModal;