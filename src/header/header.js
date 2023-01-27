import React, { useState } from 'react';
import styles from '../header/header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import logo from '../images/logo.jpg'
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";

function Header(args){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.header}>
            <Navbar{...args} className={styles.header__navbar}>
                <NavbarBrand href="/">
                    <img alt={"logo"} src={logo} className={styles.header__logo}/>
                </NavbarBrand>
                    <Nav className={styles.header__nav}>
                        <NavItem>
                            <NavLink href={"/"} style={{color: "black"}}>
                                Почему мы
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"/"} style={{color: "black"}}>
                                Врачи
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"/"} style={{color: "black"}}>
                                Записаться на прием
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav caret style={{color: "black"}}>
                                Контакты
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink href="tel: +7 702 920 6161" style={{color: "black"}}>
                                        <BsFillTelephoneFill/> +7 702 920 6161
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="https://api.whatsapp.com/send?phone=77029206161" style={{color: "black"}}>
                                        <BsWhatsapp/> Написать на WhatsApp
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Header;