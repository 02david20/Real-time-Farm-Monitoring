import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-supported";
import mapboxgl from "mapbox-gl";
// import mapboxgl from '!mapbox-gl';
import { useRef, useEffect, useState } from 'react';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import {sensors} from "./api";
import Container from 'react-bootstrap/Container';
import {map, draw} from "../pages/Home/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faMessage } from "@fortawesome/free-solid-svg-icons";

var current_filter_type = 'all';

export function Draw_icon_sensor_type(){
    for (const marker of sensors) {
        let icon_name = '';
        switch(marker.type) {
            case 'moist':
                icon_name = 'fa-solid fa-droplet';
                break;
            case 'temp':
                icon_name = 'fa-solid fa-temperature-sun';
                break;
            case 'pump':
                icon_name = 'fa-solid fa-pump';
                break;
            default:
                icon_name = 'fa-solid fa-droplet';
        }
        const el = <div className={marker.type}><FontAwesomeIcon icon={icon_name} /></div>;
        new mapboxgl.Marker(el)
        .setLngLat(marker.coordinate)
        .addTo(map.current);
    }
}

export function Filter(sensorType){
    let current_visual_sensors = document.getElementsByClassName('mapboxgl-marker mapboxgl-marker-anchor-center');
    // console.log(current_visual_sensors.length);
    for (let i=current_visual_sensors.length - 1; i >= 0 ; i--){
        current_visual_sensors[i].remove();
    }
    if (current_filter_type === sensorType){
        current_filter_type = 'all';
        Draw_icon_sensor_type();
        return;
    }

    let icon_name = 'temp';
    switch(sensorType) {
        case 'moist':
            icon_name = 'fa-solid fa-droplet';
            break;
        case 'temp':
            icon_name = 'fa-solid fa-temperature-sun';
            break;
        case 'pump':
            icon_name = 'fa-solid fa-pump';
            break;
        default:
            icon_name = 'fa-solid fa-droplet';
    }
    for (const marker of sensors) {
        if (marker.type !== sensorType) continue;
        const el = <div><FontAwesomeIcon icon={icon_name}/></div>;
        new mapboxgl.Marker(el)
        .setLngLat(marker.coordinate)
        .addTo(map.current);
    }
    current_filter_type = sensorType;
}

var first_time_click_add_control = false;
var visualize_toggle = false;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export function CreateNewField(){ 
    if (first_time_click_add_control === false){
        map.current.addControl(draw.current);
        first_time_click_add_control = true;
    }
    if (visualize_toggle){
        document.getElementsByClassName('mapboxgl-ctrl-top-right')[0].style.visibility = 'hidden';
        visualize_toggle = !visualize_toggle;
    }
    else{
        document.getElementsByClassName('mapboxgl-ctrl-top-right')[0].style.visibility = 'visible';
        visualize_toggle = !visualize_toggle;
    }
    map.current.on('draw.create', createArea);
    map.current.on('draw.update', updateArea);
    map.current.on('draw.delete', deleteArea);
}

function createArea(e) {
    // console.log(data);
    // console.log(data.features.length);
    let id = e.features[0].id;
    // console.log(e.features[0].geometry);
    map.current.addSource('polygon'+String(id),{
        'type': 'geojson',
        'data': e.features[0].geometry
    });

    map.current.addLayer({
        'id': 'layer_polygon' + String(id),
        'type': 'fill',
        'source': 'polygon' + String(id),
        'paint': {
            'fill-color': getRandomColor(),
            // 'fill-outline-color': '#3bb2d0',
            'fill-opacity': 0.5
        }
    });
}

function updateArea(e) {
    // console.log(e.features);
    let id = e.features[0].id;

    // map.current.removeLayer('layer_polygon' + String(id));
    // console.log(id);
    // map.current.getSource('polygon' + String(id)).setData({
    //     "type": "FeatureCollection",
    //     "features": [{
    //         "type": "geojson",
    //         'data': e.features[0].geometry
    //     }]
    // });    

    // map.current.addLayer({
    //     'id': 'layer_polygon' + String(id),
    //     'type': 'fill',
    //     'source': 'polygon' + String(id),
    //     'paint': {
    //         'fill-color': getRandomColor(),
    //         // 'fill-outline-color': '#3bb2d0',
    //         'fill-opacity': 0.4
    //     }
    // });
    
}


function deleteArea(e){
    // console.log(data);
    let id = e.features[0].id;
    // console.log(id);
    map.current.removeLayer('layer_polygon' + String(id));
    map.current.removeSource('polygon' + String(id));
}