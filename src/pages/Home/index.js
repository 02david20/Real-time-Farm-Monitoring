// import {set_up_map} from "../../api/operator_in_map.js"
import { useRef, useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import mapboxgl from "mapbox-gl";
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import {Draw_icon_sensor_type, LoadArea} from '../../api/operator_in_map';

// import "./styles.css";
// npm cache clean --force
// document: https://github.com/amaurym/react-mapbox-gl-draw
// polygon https://codesandbox.io/s/mapbox-polygon-forked-qcu4om?file=/src/index.js
mapboxgl.accessToken = "pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw";
var map = [];
var draw = [];
function HomePage() {
    const {id} = useParams()
    const location = useLocation()
    const coordinate = location.state.coordinate
    
    const mapContainer = useRef(null);
    map = useRef(null);
    // const map = useRef(null);
    const [lng, setLng] = useState(coordinate[0]);
    const [lat, setLat] = useState(coordinate[1]);
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [lng, lat],
            zoom: zoom
        });
    });

    draw = useRef(null);
    useEffect(() => {
        if (draw.current) return;
        draw.current = new MapboxDraw({
            displayControlsDefault: false,
            // Select which mapbox-gl-draw control buttons to add to the map.
            controls: {
                polygon: true,
                trash: true
            },
            id: 'draw0',
            // Set mapbox-gl-draw to draw by default.
            // The user does not have to click the polygon control button first.
            defaultMode: 'draw_polygon'
        });
        
    });

    useEffect(() => Draw_icon_sensor_type());
    // useEffect(() => LoadArea());
    // LoadArea();
    // map.current.on('load', () => LoadArea());
    return(
        <div ref={mapContainer} style={{height:"700px"}}>

        </div>
    );
}
export default HomePage;
export {map, draw};
