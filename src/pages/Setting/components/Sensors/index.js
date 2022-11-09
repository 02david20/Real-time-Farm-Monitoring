import Sensor from './components/Sensor'
import Toolbars from './components/Toolbars'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'
import { useRef, useEffect, useState } from 'react'

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// Sensor API array
import {sensors} from '../../../../api/api'


mapboxgl.accessToken = 'pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw';

function Sensors() {
    const [sensorForm, setSensorForm] = useState({
        userName:'',
        add : [''],
        remove: [''],
        modify:[
            {
                sensorID:'',
                name:'',
                type:'',
                long: 0,
                lat: 0,
            }
        ]
    })
    
    const [sensorList, setSensorList] = useState(() => sensors)
    const [choose, setChoose] = useState(0)
    const [switchSensor,setSwitchSensor] = useState(() => sensorList[0].mode)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(() => sensorList[0].long);
    const [lat, setLat] = useState(() => sensorList[0].lat);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
            if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom
            });
    });

    console.log(lng,lat)

    // Move map when have change in lat and lng
    // Change OnClick or change in sensorList
    useEffect(() => {
        
        handleMoveMap(sensorList[choose].long, sensorList[choose].lat)
        
    },[choose])

    useEffect(() => {
        if(sensorList.length){
            if(0 <= choose && choose < sensorList.length-1)
               handleMoveMap(sensorList[choose].long, sensorList[choose].lat)
            else 
                setChoose(prev=>prev-1)
        }
        
    },[sensorList])

    // Jump map to new lng, lat if changed
    useEffect(() => {
        map.current.jumpTo({
            'center':[lng,lat],
            'zoom':14
         }
        )
    },[lng,lat]);

    const handleSwitch = () => {
        if(switchSensor === "active") {
            setSwitchSensor("disabled")
            setSensorList(prev => {
                prev[choose].mode='disabled'
                return prev;
            })
        }
        else if(switchSensor === "disabled") {
            setSwitchSensor("active")
            setSensorList(prev => {
                prev[choose].mode='active'
                return prev;
            })
        }
    }

    const handleSubmitChange = () => {
        
    }

    // Change lng, lat to new location
    const handleMoveMap = (long,lat) => {
        setLng(long)
        setLat(lat)
        setZoom(20)
    }

    const handleRemoveSensor = () => {
        console.log(sensorList)
        const len = sensorList.length;
        if(len) {
            setSensorList(prev => [...prev.slice(0, choose), ...prev.slice(choose + 1)])
        }else {
            alert("There are no sensors left");
        }
    }
    const handleEditSensor = () => {

    }
    const handleAddSensor = () => {

    }
    return (
        <div style={{height:"100%"}}>
            <div className="btn btn-success"
                 style = {{
                    position: 'fixed',
                    bottom: '10px',
                    right:'7%',
                 }}    
            >
                Xác nhận
            </div>
            <Toolbars
                 removeSensor = {handleRemoveSensor}
                 editSensor = {handleEditSensor}
                 addSensor = {handleAddSensor}
            ></Toolbars>
            <Row style={{height:"inherit"}}>
                <Col xs={3}
                    className="hideScroll"
                    style={{
                        backgroundColor:"green",
                        overflow:"scroll",
                        cursor:"pointer"
                    }}
                >
                    <ol className="list-group">

                        {sensorList.map((sensor,index) => {
                            return (
                                <li key = {sensor.id}
                                    className="list-group-item mt-2"
                                    style={{
                                        borderRadius:"2px", 
                                        backgroundColor : (index === choose) ? "orange" : "white"                                   
                                    }}    
                                    onClick={()=>{
                                        setChoose(index)
                                    }}
                                >
                                    <Sensor
                                        id = {sensor.id}
                                        type={sensor.type}
                                        mode={sensor.mode}
                                        long = {sensor.long}
                                        lat = {sensor.lat}
                                    ></Sensor>
                                </li>
                            )
                        })}
                    
                    </ol>
                </Col>

                <Col xs={9} style = {{backgroundColor:"greenyellow"}}>

                    <Container>                        
                         
                       
                        <div>
                            <div ref={mapContainer} style={{height:"450px"}} />
                        </div>
                    </Container>

                    <Container>

                        <Form.Switch
                            id="custom-switch"
                            checked = {switchSensor==="active"}
                            onChange = {handleSwitch}
                        >
                        </Form.Switch> 

                    </Container>
                </Col>
            </Row>

        </div>
    )
}

export default Sensors;