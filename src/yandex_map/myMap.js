import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './myMap.module.css'
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import {NavLink} from "reactstrap";
import {HiMapPin} from "react-icons/hi2";
import {FiMapPin} from "react-icons/fi";

const MyMap = () => {
    return (
        <div className={styles.map}>
            <MapContainer style={{height: "60vh", width: "60vw"}} center={[51.111192, 71.41304]} zoom={14.5}
                          scrollWheelZoom={true}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    key={1219}
                    position={[
                        51.111840,
                        71.41328
                    ]}
                />
                ))}
            </MapContainer>
            <div className={styles.map__card}>
                <div className={styles.map__title}>
                    Контакты
                </div>
                <div className={styles.map__sub}>
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
        </div>
    );
};

export default MyMap;