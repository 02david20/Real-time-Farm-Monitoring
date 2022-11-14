import React, { useRef, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Icon } from '@iconify/react';
import './settingpump.scss'

const Marker = ({ onClick, children, feature }) => {
    const _onClick = () => {
        onClick(feature.properties.description);
    };
  
    return (
        <button onClick={_onClick} className="marker">
            {children}
        </button>
    );
};

function Setting_pump() {
    const mapContainer = useRef(0);
    const map = useRef(0);
    const [lng, setLng] = useState(11.71);
    const [lat, setLat] = useState(17.82);
    const [zoom, setZoom] = useState(12);
    mapboxgl.accessToken ='pk.eyJ1Ijoibmd1eWVuaHV1ZGFuaDIwMDIiLCJhIjoiY2xhODhlMm0xMDFibjNwcW1vZzZ5aGVkNyJ9.ypvSYpGdDgBuRgR-Ck9ZwQ';
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });
      
    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(12));
        });
        const feature = {
            type: "Feature",
            properties: {
                title: "Lincoln Park",
                description: "A northside park that is home to the Lincoln Park Zoo"
            },
            geometry: {
                coordinates: [11.71, 17.82],
                type: "Point"
            }
        }
        const ref = React.createRef()
        ref.current = document.createElement("div")
        const root = createRoot(ref.current)
        root.render(
            <Marker onClick={markerClicked} feature={feature} />
        )

        new mapboxgl.Marker(ref.current)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map.current)
    });

    const markerClicked = (title) => {
        alert(title);
    };

    return (
        <div>
            <div>
                Longtitude: {lng} | Latitude: {lat}
            </div>
            <div ref={mapContainer} className='map-container'></div>
        </div>
    )
}

export default Setting_pump