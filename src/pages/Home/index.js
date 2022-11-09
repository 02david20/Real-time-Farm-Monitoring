import styles from './mainpage.module.css'
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import mapboxgl from '!mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
// npm install @mapbox/mapbox-gl-draw
// https://github.com/mapbox/mapbox-gl-draw
import mapboxgl from 'mapbox-gl';
// https://docs.mapbox.com/mapbox-gl-js/guides/install/ ----------guide


function HomePage() {
    const mapContainer = useRef(0);
    const map = useRef(0);
    const [lng, setLng] = useState(-91.874);
    const [lat, setLat] = useState(42.76);
    const [zoom, setZoom] = useState(10);
    mapboxgl.accessToken = 'pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw';
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
        if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));            
        });
    });
    // var Draw = new MapboxDraw();

    // // map.addControl(Draw, 'top-left');
    // map.on('draw.create', updateArea);
    // map.on('draw.delete', updateArea);
    // map.on('draw.update', updateArea);
    // function updateArea(e) {
    //     const data = Draw.getAll();
    //     // const answer = document.getElementById('calculated-area');
    //     if (data.features.length > 0) {
    //     // const area = turf.area(data);
    //     // Restrict the area to 2 decimal points.
    //     // const rounded_area = Math.round(area * 100) / 100;
    //     // answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
    //     } else {
    //     // answer.innerHTML = '';
    //     if (e.type !== 'draw.delete')
    //     alert('Click the map to draw a polygon.');
    //     }
    // }
    return (
        <div>
            {/* <div className={styles.sidebar}>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            <div ref={mapContainer} className={styles.mapContainer} />
        </div>
    );
}

export default HomePage;