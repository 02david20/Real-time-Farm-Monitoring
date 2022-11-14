import Sensor from './components/Sensor'
import Toolbars from './components/Toolbars'
import SensorDetail from './components/SensorDetail'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";

import Container from 'react-bootstrap/Container'
import { useRef, useEffect, useState } from 'react'


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// Sensor API array
import {sensors} from '../../../../api/api'


mapboxgl.accessToken = 'pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw';

function Sensors() {
    const sensorForm  = useRef({
        userName:'',
        add : [''],
        remove: [''],
        modify:[
            {
                sensorID:'',
                name:'',
                type:'',
                coordinate:[]
            }
        ]
    })
    // Record Change In Action of Every Sensor
    // {key:value}, 'deleted'
    const sensorChange  = useRef({})

    const [sensorList, setSensorList] = useState(() => {
        sensors.forEach(sensor => {sensorChange.current[sensor['id']]=[]})
        return sensors
    })

    const [choose, setChoose] = useState(0)
    const [switchSensor,setSwitchSensor] = useState(() => sensorList[0].mode)
    const [showForm, setShowForm] = useState(false)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(() => sensorList[0].coordinate[0]);
    const [lat, setLat] = useState(() => sensorList[0].coordinate[1]);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
            if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/satellite-v9',
                center: [lng, lat],
                zoom: zoom
            });
    });

    // Add Marker on
    useEffect(() => {
        const marker = new mapboxgl.Marker(
            <div
            style={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              cursor: 'pointer',
            }} />
        )
            .setLngLat([lng, lat])
            .addTo(map.current);
    },[lng,lat]);
    

    // Move map when have change in lat and lng
    // Change OnClick or change in sensorList
    useEffect(() => {
        handleMoveMap(sensorList[choose].coordinate[0], sensorList[choose].coordinate[1])

        setSwitchSensor(sensorList[choose].mode)
    },[choose])

    useEffect(() => {
        if(sensorList.length){
            // If delete sensor between except last element
            if(0 <= choose && choose < sensorList.length-1)
               handleMoveMap(sensorList[choose].coordinate[0], sensorList[choose].coordinate[1])
            else  {
                if(sensorList.length > 1) {
                    const chooseAfterDelete = choose-1;
                    setChoose(chooseAfterDelete)
                    handleMoveMap(sensorList[chooseAfterDelete].coordinate[0], sensorList[chooseAfterDelete].coordinate[1])
                } else {
                    setChoose(0)
                    handleMoveMap(sensorList[0].coordinate[0], sensorList[0].coordinate[1])
                }     
            }
        }
        
    },[sensorList])

    // Jump map to new lng, lat if changed
    useEffect(() => {
        map.current.jumpTo({
            'center':[lng,lat],
            'zoom':15
         }
        )
    },[lng,lat]);

    const handleSwitch = () => {
        if(switchSensor === "active") {
            setSwitchSensor("disable")
            setSensorList(prev => {
                prev[choose].mode='disable'
                return prev;
            })
        }
        else if(switchSensor === "disable") {
            setSwitchSensor("active")
            setSensorList(prev => {
                prev[choose].mode='active'
                return prev;
            })
        }
    }

    const handleSubmitChange = () => {
        // Compare State of sensorList and initSensorList

        // Call Change API
        console.log(sensorForm)
    }

    // Change lng, lat to new location
    const handleMoveMap = (long,lat) => {
        setLng(long)
        setLat(lat)
        setZoom(20)
    }
    // Xóa một sensor
    const handleRemoveSensor = () => {
        const len = sensorList.length;
        if(len) {
            setSensorList(prev => [...prev.slice(0, choose), ...prev.slice(choose + 1)])
            const id = sensorList[choose]['id']
            sensorChange.current[id].push('deleted')
            console.log(sensorChange)
        }else {
            alert("There are no sensors left");
        }
    }

    // Chỉnh sửa thông tin của 1 sensor
    const handleEditSensor = () => {
        setShowForm(prev => !prev)
    }
    const handleAddSensor = () => {
        
    }

    
    return (
        <div>
            <div className="btn btn-success"
                 style = {{
                    position: 'fixed',
                    bottom: '10px',
                    right:'7%',
                 }}    
                 onClick={()=>handleSubmitChange()}
            >
                Xác nhận
            </div>
            <Toolbars
                 removeSensor = {handleRemoveSensor}
                 editSensor = {handleEditSensor}
                 addSensor = {handleAddSensor}
            ></Toolbars>

            {   showForm &&
                <SensorDetail
                    choose={choose}
                    setSensorList = {setSensorList}
                    sensorList={sensorList}
                    sensorChange={sensorChange}
                    showForm={showForm}
                ></SensorDetail>
            }


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
                                        long = {sensor.coordinate[0]}
                                        lat = {sensor.coordinate[1]}
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