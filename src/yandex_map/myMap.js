import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent, useMap} from 'react-leaflet';
import styles from './myMap.module.css'
import {Button} from "reactstrap";

const MyMap = ({dentistry}) => {

    const [index, setIndex] = useState(0)
    const [selectedDentistry, setSelectedDentistry] = useState(null )

    useEffect(() => {
        if (isDentistryAvailable()) setSelectedDentistry(dentistry[index])
    }, [dentistry])

    const isDentistryAvailable = () => {
        return dentistry && dentistry.length
    }

    const increase = () => {
        let i;
        if (index + 1 >= dentistry.length) i = 0
        else i = index + 1
        setIndex(i)
        setSelectedDentistry(dentistry[i])
    }

    const decrease = () => {
        let i;
        if (index - 1 < 0) i = dentistry.length - 1
        else i = index - 1
        setIndex(i)
        setSelectedDentistry(dentistry[i])
    }

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
                <Button disabled={!isDentistryAvailable()} onClick={decrease}>{'<'}</Button>
                {selectedDentistry.address}
                <Button disabled={!isDentistryAvailable()} onClick={increase}>{'>'}</Button>
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