import React, {useEffect} from 'react';
import styles from '../services/services.module.css'
import DropDownPriceList from "../pricelist/dropdownPriceList/dropDownPriceList";

const Services = ({selectedDentistry}) => {

    useEffect(() => {
        console.log("rerender")
    }, [selectedDentistry])

    return (
        <div id={"services"}>
            <div className={styles.services}>
                <div className={styles.serv__title}>
                    Наши <span style={{color: "#3caaf7"}}>услуги</span>
                </div>
                <div className={styles.serv__divider}>
                    ______
                </div>
                <div className={styles.address}>{selectedDentistry && selectedDentistry.address}</div>
            </div>
            <DropDownPriceList selectedDentistry={selectedDentistry}/>
        </div>
    );
};

export default Services;