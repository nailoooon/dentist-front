import React from 'react';
import styles from './footer.module.css'
import logo from '../images/logo.jpg'
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import {FiMapPin} from "react-icons/fi";

const Footer = ({selectedDentistry}) => {

    const deleteSpace = (str) => {
        str = str.replaceAll(/\s+/g, '');
        str = str.replaceAll('+', '')
        return str.replaceAll('-', '')
    }

    console.log(selectedDentistry ?
        selectedDentistry.whatsapp_number + "  https://api.whatsapp.com/send?phone=" + deleteSpace(selectedDentistry.whatsapp_number)
        : "")

    return (
        <div className={styles.footer}>
            <Navbar>
                <NavbarBrand href={"/"}>
                    <img src={logo} alt={"logo"} className={styles.footer__logo}/>
                </NavbarBrand>
                <Nav className={styles.footer__nav}>
                    <NavItem>
                        <NavLink href={"#about"} style={{color: "black"}}>
                            Почему мы
                        </NavLink>
                        <NavLink href={"#doctors"} style={{color: "black"}}>
                            Врачи
                        </NavLink>
                        <NavLink href={"#services"} style={{color: "black"}}>
                            Услуги и цены
                        </NavLink>
                    </NavItem>
                </Nav>{
                selectedDentistry &&
                <div className={styles.footer__card}>
                    <div className={styles.footer__sub}>
                        <NavLink href={"tel: " + selectedDentistry.tel_number} style={{color: "black", marginBottom: "12px"}}>
                            <BsFillTelephoneFill style={{color: "#3caaf7"}}/> {selectedDentistry.tel_number}
                        </NavLink>
                        <NavLink href={"https://api.whatsapp.com/send?phone=" + deleteSpace(selectedDentistry.whatsapp_number)}
                                 style={{color: "black", marginBottom: "12px"}}>
                            <BsWhatsapp style={{color: "#3caaf7"}}/> Написать на WhatsApp
                        </NavLink>
                        <NavLink href={"https://go.2gis.com/xbns1"}>
                            <FiMapPin style={{color: "#3caaf7", fontSize: "large"}}/> {selectedDentistry.address}
                        </NavLink>
                    </div>
                </div>}
            </Navbar>
        </div>
    );
};

export default Footer;