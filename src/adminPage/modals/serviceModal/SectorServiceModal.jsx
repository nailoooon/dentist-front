import React, {useState} from 'react';
import {Container} from "reactstrap";
import styles from "../../../pricelist/pricelist.module.css";
import SubServiceModal from "./SubServiceModal";

const SectorServiceModal = ({item, pToggle}) => {


    const [isOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!isOpen)

    return (
        <Container>
            <div onClick={toggle} className={styles.main__header}>
                {item.name}

            </div>
            {
                isOpen && (
                    <div>
                        {item.subSectors.map(obj => {
                            return <SubServiceModal key={obj._id} item={obj} pToggle={pToggle}/>
                        })}
                    </div>
                )
            }
        </Container>
    );
};

export default SectorServiceModal;