import styles from './mainpage.module.css'
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import mapboxgl from '!mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
// npm install @mapbox/mapbox-gl-draw
// https://github.com/mapbox/mapbox-gl-draw
import mapboxgl from 'mapbox-gl';
// https://docs.mapbox.com/mapbox-gl-js/guides/install/ ----------guide
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import ReactDOM from "react-dom";
// import ReactMapboxGl from "react-mapbox-gl";
// import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// https://github.com/amaurym/react-mapbox-gl-draw


// const Map = ReactMapboxGl({
//     accessToken:
//     'pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw'
// });
const onDrawCreate = ({ features }) => {
    console.log(features);
};

const onDrawUpdate = ({ features }) => {
    console.log(features);
};
function HomePage() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw';
    const mapContainer = useRef(0);
    const map = useRef(0);
    const [lng, setLng] = useState(-91.874);
    const [lat, setLat] = useState(42.76);
    const [zoom, setZoom] = useState(10);
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

    const areaContainer = useRef(0);
    const draw = useRef(0);
    useEffect(() => {
        if (draw.current) return; // initialize map only once
        // map.current.addControl(draw);
        draw.current = new MapboxDraw({
            displayControlsDefault: false,
            // Select which mapbox-gl-draw control buttons to add to the map.
            controls: {
                polygon: true,
                trash: true
            },  
            // Set mapbox-gl-draw to draw by default.
            // The user does not have to click the polygon control button first.
            defaultMode: 'draw_polygon'
        });
    });
    var Draw = new MapboxDraw();

    // Map#addControl takes an optional second argument to set the position of the control.
    // If no position is specified the control defaults to `top-right`. See the docs
    // for more details: https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol

    map.addControl(Draw, 'top-left');

    map.on('load', function() {
    // ALL YOUR APPLICATION CODE
    });
    // map.current.addControl(draw.current);

    // useEffect(() => {
    //     if (!map.current) return;
    //     map.current.addControl(draw.current);
    // },[]);
    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.addControl(draw.current);
    //     // map.current.on('load', () =>{
    //     //     map.current.addControl(draw.current);
    //     // });
    // });
    // map.addControl(draw.current);
        // map.on('draw.create', updateArea);
        // map.on('draw.delete', updateArea);
        // map.on('draw.update', updateArea);

        // function updateArea(e) {
        //     const data = draw.getAll();
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
        <div ref={mapContainer} className={styles.mapContainer}></div>
    );
}

export default HomePage;