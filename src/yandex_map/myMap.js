import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyMap = () => {
    return (
        <div>
            <MapContainer style={{height: "80vh", width: "100vm"}} center={[51.111192, 71.41304]} zoom={14.5}
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