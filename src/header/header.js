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
import {FiMapPin} from "react-icons/fi";
import {LoadingData} from "../API/Constants";

function Header({selectedDentistry, dentistry, handleSelectedDentistry}){

    return (
        <div className={styles.header}>
            <Navbar className={styles.header__navbar}>
                <NavbarBrand href="/">
                    <img alt={"logo"} src={logo} className={styles.header__logo}/>
                </NavbarBrand>
                    <Nav className={styles.header__nav}>
                        <NavItem>
                            <NavLink href={"#about"} style={{color: "black"}}>
                                Почему мы
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"#doctors"} style={{color: "black"}}>
                                Врачи
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"#services"} style={{color: "black"}}>
                                Услуги и цены
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"#footer"} style={{color: "black"}}>
                                Контакты
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav caret style={{color: "black"}}>
                                Адрес
                            </DropdownToggle>
                            <DropdownMenu>
                                {dentistry.length ? dentistry.map((d, index) =>
                                    <DropdownItem key={d._id} active={selectedDentistry._id === d._id}>
                                        <NavLink href="#" style={{color: "black"}} onClick={() => handleSelectedDentistry(index)}>
                                            <FiMapPin style={{color: "#3caaf7"}}/> {d.address}
                                        </NavLink>
                                    </DropdownItem>
                                ) : <div>{LoadingData}</div>}

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Header;