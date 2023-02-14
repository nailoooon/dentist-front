import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent, useMap} from 'react-leaflet';
import styles from './myMap.module.css'
import {Button} from "reactstrap";

const MyMap = ({selectedDentistry}) => {

    const [dentistry, setDentistry] = useState({
        _id: "63d39190d209c5f035078283",
        address: "Проспект Сарыарка, 31",
        whatsapp_number: "+7-707-739-63-12",
        tel_number: "+7 (7172) 44-46-03",
        position_x: "51.111840",
        position_y: "71.41328"
    })

    return (
        selectedDentistry ?
        <div className={styles.map}>
            <div className={styles.map__title}>
                Где мы<span style={{color: "#3caaf7"}}> находимся</span>
            </div>
            <div className={styles.map__divider}>
                ______
            </div>
            <div>
                {selectedDentistry.address}
            </div>
            <MapContainer style={{height: "80vh", width: "80vw"}}
                          center={[selectedDentistry.position_x,
                              selectedDentistry.position_y]} zoom={14.5}
                          scrollWheelZoom={true}>
                <TileLayer
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    key={1219}
                    position={[
                        selectedDentistry.position_x,
                        selectedDentistry.position_y
                    ]}
                />
                <RecenterAutomatically lat={selectedDentistry.position_x} lng={selectedDentistry.position_y}/>
                ))}
            </MapContainer>
        </div> : <div>
            Загрузка
            </div>
    );
};

const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
}

export default MyMap;