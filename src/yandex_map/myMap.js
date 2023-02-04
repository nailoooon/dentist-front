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
            <div className={styles.map__title}>
                Где мы<span style={{color: "#3caaf7"}}> находимся</span>
            </div>
            <div className={styles.map__divider}>
                ______
            </div>
            <MapContainer style={{height: "80vh", width: "80vw"}} center={[51.111192, 71.41304]} zoom={14.5}
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
        </div>
    );
};

export default MyMap;