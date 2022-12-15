
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-supported";
import mapboxgl from "!mapbox-gl";  // eslint-disable-line import/no-webpack-loader-syntax
// import mapboxgl from '!mapbox-gl';

import {sensors} from "./api";
import {map, draw} from "../pages/Home/index.js";
import "./icon_style.css";
import DataField from "./field.json";

var current_filter_type = 'all';

function add_marker(marker){
    let icon_class = marker.type+'_icon';
    const el = document.createElement('div');
    el.className = icon_class;

    new mapboxgl.Marker(el)
        .setLngLat(marker.coordinate)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                    `<h5 style="background-color: #05386B; color: white;">${marker.type}</h5>
                    <h6>data: ${marker.data}</h6>
                    <h6>mode: ${marker.mode}</h6>
                    <h6>coordinate: [${marker.coordinate}]</h6>
                    `
                )
        )
        .addTo(map.current);
}

export function Draw_icon_sensor_type(){
    // console.log('map.curret');
    // console.log(map.current);
    for (const marker of sensors) {
        add_marker(marker);
    }
}

// popup: https://docs.mapbox.com/help/tutorials/markers-js/

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
    for (const marker of sensors) {
        if (marker.type !== sensorType) continue;
        add_marker(marker);
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

// eslint-disable-next-line no-unused-vars
function saveArea(features){
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(features)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
    
}

function createArea(e) {
    let id = e.features[0].id;
    console.log(e.features[0]);
    // console.log(e.features[0].geometry);
    map.current.addSource('polygon'+String(id),{
        'type': 'geojson',
        'data': e.features[0].geometry
    });
    console.log(map.current.getSource('polygon' + String(id)));

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
    DataField.push({"features": e.features});
    console.log("new field add to data");
    console.log(DataField);
    console.log(map.current.getLayer('layer_polygon' + String(id)));
}

function updateArea(e) {
    // console.log(e);
    // console.log(e.features);
    let id = e.features[0].id;
    map.current.getSource('polygon' + String(id)).setData({
        type: "FeatureCollection",
        features: e.features
    });    
}


function deleteArea(e){
    // console.log(data);
    let id = e.features[0].id;
    // console.log(id);
    map.current.removeLayer('layer_polygon' + String(id));
    map.current.removeSource('polygon' + String(id));
}

var first_time_load_area = true;

function loadField(e) {
    let id = e.features[0].id;
    console.log(e.features[0]);
    // console.log(e.features[0].geometry);
    map.current.addSource('polygon'+String(id),{
        'type': 'geojson',
        'data': e.features[0].geometry
    });
    console.log(map.current.getSource('polygon' + String(id)));

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
    console.log(map.current.getLayer('layer_polygon' + String(id)));
}

export function LoadArea(){
// maybe field auto destroy when go to another tab
    if (first_time_load_area){
        for (let i = 0; i < DataField.length; i++){
            loadField(DataField[i]);
        }
        first_time_load_area = false;
    }
    else{
        if (DataField.length > 0){
            let id = 'layer_polygon' + DataField[0].features[0].id;
            try{
                const visibility = map.current.getLayoutProperty(id, 'visibility');
                for (let i = 0; i < DataField.length; i++){
                    let id = 'layer_polygon' + DataField[i].features[0].id;
                    try{
                        if (visibility === 'visible') {
                            map.current.setLayoutProperty(id, 'visibility', 'none');
                        } else {
                            map.current.setLayoutProperty(id, 'visibility', 'visible');
                        }
                    }
                    catch(exceptionVar){
                        loadField(DataField[i]);
                    }
                    
                }
            } catch (exceptionVar) {
                
            } finally {
                for (let i = 0; i < DataField.length; i++){
                    try{
                        loadField(DataField[i]);
                    }
                    catch(exceptionVar){

                    }
                }
            }            
        }        
    }    
}