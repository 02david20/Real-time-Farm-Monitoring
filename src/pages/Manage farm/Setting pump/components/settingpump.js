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
            <div ref={mapContainer} className='map-container'>
                <div className='pump-detail'>
                    <div className='leftSide'>
                        <div className='show-id'>
                            <div>ID</div>
                            <div className='id'>01750175</div>
                        </div>
                        <div className='show-water-remain'>
                            <div className='text'>Lượng nước còn lại</div>
                            <div className='full'>
                                <div className='water-remain'>

                                </div>
                            </div>
                        </div>
                        <div className='setting-water'>
                            <div className='text'>
                                Thiết lập lượng nước tưới
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <div className='start-time'>
                            <label for='start'>Từ:</label>
                            <input type='datetime-local' name='start'></input>
                        </div>
                        <div className='end-time'>
                            <label for='end'>Đến:</label>
                            <input type='datetime-local' name='end'></input>
                        </div>
                        <div>
                            <select>
                                <option default>Không lặp</option>
                                <option>Hằng ngày</option>
                                <option>Hằng tuần</option>
                                <option>Hằng tháng</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting_pump