import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Icon } from '@iconify/react';
import './settingpump.scss'

function Setting_pump() {
    const mapContainer = useRef(0);
    const map = useRef(0);
    const [lng, setLng] = useState(-91.874);
    const [lat, setLat] = useState(42.76);
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
    });

    return (
        <div>
            <div>
                Longtitude: {lng} | Latitude: {lat}
            </div>
            <div ref={mapContainer} style={{height:"600px"}}></div>
        </div>
    )
}

export default Setting_pump