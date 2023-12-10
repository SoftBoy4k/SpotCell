import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import PopUp from './Popup';
import './Map.css'
import Watermark from './Watermark'
import ProfileButton from './ProfileButton'; 


const Map = () => {

    const markers = [
        {
            geocode: [52.423970, 30.997541],
            popup: {
                street: "Ул. Гагарина 65",
                freePlaces: "13",
                totalPlaces: "25",
                price: "5"
            }
        },
        {
            geocode: [52.416883, 30.961631],
            popup: {
                street: "Речицкий просп. 5В",
                freePlaces: "24",
                totalPlaces: "50",
                price: "6"
            }
        },
        {
            geocode: [52.431763, 30.993970],
            popup: {
                street: "просп. Победы 29",
                freePlaces: "20",
                totalPlaces: "72",
                price: "4"
            }
        },
    ]

    const customIcon = new Icon({
        iconUrl: 'https://img.icons8.com/?size=100&id=vk4Ai_C9IAa4&format=png',
        iconSize: [38, 38]
    })

  return (
    <MapContainer center={[52.423970, 30.997541]} zoom={14} scrollWheelZoom={false} style={{ height: '100vh', width: '100%', margin: '0 auto' }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(marker => (
            <Marker 
            position={marker.geocode} 
            icon={customIcon} 
            style={{ 
                border: '2px solid #228BE6',
                borderRadius: '2px',
            }}>
                <Popup closeButton={false}>
                    <PopUp street={marker.popup.street} freePlaces={marker.popup.freePlaces} totalPlaces={marker.popup.totalPlaces} price={marker.popup.price}/>
                </Popup>
            </Marker>
        ))}
        <ProfileButton/>
        <Watermark/>
    </MapContainer>
  )
}

export default Map