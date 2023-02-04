import React from 'react';
import styles from './footer.module.css'
import logo from '../images/logo.jpg'
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import {FiMapPin} from "react-icons/fi";

const Footer = () => {
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
                </Nav>
                <div className={styles.footer__card}>
                    <div className={styles.footer__sub}>
                        <NavLink href="tel: +7 702 920 6161" style={{color: "black", marginBottom: "12px"}}>
                            <BsFillTelephoneFill style={{color: "#3caaf7"}}/> +7 702 920 6161
                        </NavLink>
                        <NavLink href="https://api.whatsapp.com/send?phone=77029206161" style={{color: "black", marginBottom: "12px"}}>
                            <BsWhatsapp style={{color: "#3caaf7"}}/> Написать на WhatsApp
                        </NavLink>
                        <NavLink href={"https://go.2gis.com/xbns1"}>
                            <FiMapPin style={{color: "#3caaf7", fontSize: "large"}}/> Проспект Кабанбай батыр, 48/7
                        </NavLink>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default Footer;