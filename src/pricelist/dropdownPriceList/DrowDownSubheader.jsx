import React from 'react';
import {useState} from "react";
import NameAndPrice from "./nameAndPrice";
import styles from "../pricelist.module.css"

const DrowDownSubheader = ({item}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)

    return (
        <div>
            <div onClick={toggle} className={styles.main__subheader}>
                {item.name}
            </div>
            {
                isOpen && (
                    <div>
                        <div style={{display: "flex"}}>
                            <div className={styles.price__column__name}>
                                Наименование услуги
                            </div>
                            <div className={styles.price__column__name}>
                                Стоимость (в тенге)
                            </div>
                        </div>
                        {item.services.map(obj =>
                            <NameAndPrice name={obj.name} price={obj.price}/>

                        )}
                    </div>

                )
            }
        </div>
    );
};

export default DrowDownSubheader;