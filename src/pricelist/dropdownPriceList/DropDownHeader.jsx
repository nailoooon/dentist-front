import React, {useState} from 'react';
import {Container} from "reactstrap";
import DrowDownSubheader from "./DrowDownSubheader";
import styles from "../pricelist.module.css"

const DropDownHeader = ({item}) => {

    console.log(item)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)

    return (
        <Container>
            <div onClick={toggle} className={styles.main__header}>
                {item.name}
            </div>
            {
                isOpen && (
                    <div>
                        {item.category.map(obj => {
                            return <DrowDownSubheader item={obj}/>
                        })}
                    </div>
                )
            }
        </Container>
    );
};

export default DropDownHeader;