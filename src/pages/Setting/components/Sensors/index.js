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

    const [sensorList, setSensorList] = useState(sensors)
    const [choose, setChoose] = useState(0)
    const [switchSensor,setSwitchSensor] = useState(sensorList[choose].mode)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
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

    // Move map when have change in lat and lng
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

    // Change lng, lat to new location
    const handleMoveMap = (long,lat) => {
        setLng(long)
        setLat(lat)
        setZoom(20)
    }

    const handleRemoveSensor = () => {

    }
    const handleEditSensor = () => {

    }
    const handleAddSensor = () => {

    }
    return (
        <div style={{height:"100%"}}>

            <Toolbars></Toolbars>
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
                                        handleMoveMap(-70.39, 43.35+index)
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
                        {sensorList[choose].long +" | "+ sensorList[choose].lat}  
                       
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