import React, { useRef, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form'
import './settingpump.scss'

const Marker = ({ onClick, children, pumpInfo }) => {
    const _onClick = () => {
        onClick(pumpInfo);
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
    const [zoom, setZoom] = useState(6);
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
    
    const pumps = [
        {
            id: 1,
            coordinates: [11.71, 17.82],
            water_remain_percent: 0.9,
            water_value: 500,
            start_time: "2022-12-01T01:02",
            end_time: "2022-12-15T04:15"
        },
        {
            id: 2,
            coordinates: [11.71, 19.82],
            water_remain_percent: 0.5,
            water_value: 900,
            start_time: "2022-12-02T11:23",
            end_time: "2022-12-30T06:48"
        }
    ]
    const [pumpList, updatePumpList] = useState(pumps)
    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(12));
        });
        pumpList.map((pump) => {
            const ref = React.createRef()
            ref.current = document.createElement("div")
            const root = createRoot(ref.current)
            root.render(
                <Marker onClick={markerClicked} pumpInfo={pump}/>
            )

            new mapboxgl.Marker(ref.current)
                .setLngLat(pump.coordinates)
                .addTo(map.current)
        })
    });

    const [showDetail, setShowDetail] = useState(false)
    const [pumpInfo, setPumpInfo] = useState([])
    const { register, getValues, setValue } = useForm();

    const markerClicked = (pump) => {
        let newpumpInfo = pump
        setPumpInfo(newpumpInfo)
        setValue('water_value', pump.water_value)
        setValue('start_time', pump.start_time)
        setValue('end_time', pump.end_time)
        setShowDetail(!showDetail)
    };

    const handleBack = () => {
        setShowDetail(!showDetail)
    }

    const handleUpdate = () => {
        const newPumpList = pumpList.map((pump) => {
            if (pump.id == pumpInfo.id) {
                const updatedPump = pump
                updatedPump.water_value = getValues().water_value
                updatedPump.start_time = getValues().start_time
                updatedPump.end_time = getValues().end_time
            }
            return pump
        })
        setShowDetail(!showDetail)
        pumpList = newPumpList
        updatePumpList(newPumpList)
    }

    function convertToCssStyle(number) {
        let percent = number * 100
        let s = percent + '%'
        return s
    }

    return (
        <div>
            <div>
                Longtitude: {lng} | Latitude: {lat}
            </div>
            <div ref={mapContainer} className='map-container'>
                <div className='info-container' id={showDetail ? "open" : "close"}>
                    <div className='pump-detail'>
                        <div className='leftSide'>
                            <div className='show-id'>
                                <div>ID</div>
                                <div className='id'>01750175</div>
                            </div>
                            <div className='show-water-remain'>
                                <div className='text'>Lượng nước còn lại</div>
                                <div className='full'>
                                    <div className='water-remain' 
                                        style={{width: convertToCssStyle(pumpInfo.water_remain_percent)}}>
                                    </div>
                                </div>
                            </div>
                            <div className='setting-water'>
                                <div className='text'>
                                    <label for='pump'>Thiết lập lượng nước tưới:</label>
                                    <input 
                                        type='number' 
                                        name='pump' 
                                        step='100' 
                                        {...register("water_value")}
                                    ></input> ml
                                </div>
                                <div>
    
                                </div>
                            </div>
                        </div>
                        <div className='rightSide'>
                            <div className='start-time'>
                                <label for='start'>Từ:</label>
                                <input 
                                    type='datetime-local' 
                                    name='start'
                                    {...register("start_time")}
                                ></input>
                            </div>
                            <div className='end-time'>
                                <label for='end'>Đến:</label>
                                <input 
                                    type='datetime-local' 
                                    name='end'
                                    {...register("end_time")}
                                ></input>
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
                    <div className='buttons'>
                        <button className='back' onClick={handleBack}>Trở về</button>
                        <button className='update' onClick={handleUpdate}>Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting_pump