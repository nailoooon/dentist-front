import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './myMap.module.css'
import {Button} from "reactstrap";

const MyMap = () => {

    const [dentistry, setDentistry] = useState({
        position: {x: 51.111840, y: 71.41328}
    })

    return (
        <div className={styles.map}>
            <div className={styles.map__title}>
                Где мы<span style={{color: "#3caaf7"}}> находимся</span>
            </div>
            <div className={styles.map__divider}>
                ______
            </div>
            <MapContainer style={{height: "80vh", width: "80vw"}} center={[dentistry.position.x, dentistry.position.y]} zoom={14.5}
                          scrollWheelZoom={true}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    key={1219}
                    position={[
                        dentistry.position.x,
                        dentistry.position.y
                    ]}
                />
                ))}
            </MapContainer>
        </div>
    );
};

export default MyMap;