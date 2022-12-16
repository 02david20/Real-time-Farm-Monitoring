import Sensor from './components/Sensor'
import Toolbars from './components/Toolbars'
import SensorDetail from './components/SensorDetail'
import AddingForm from './components/AddingForm'
import PopUp from './components/PopUp'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";

import Container from 'react-bootstrap/Container'
import { useRef, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// Sensor API array
import {sensors} from '../../../../api/api'

mapboxgl.accessToken = 'pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw';

function Sensors() {
    const sensorForm  = useRef({
        add : [],
        remove: [],
        modify:{} 
    })
    let navigate = useNavigate();

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
    const [showAdd, setShowAdd] = useState(false)
    const [popup, setPopup] = useState(false)
    const [submitPopup, setSubmitPopup] = useState(false)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
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
            marker.current = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map.current);
    });

    // If there is changed is in lng and lat, remove old marker and create new
    useEffect(() => {
        marker.current.remove(); 
        marker.current = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map.current);
    },[lng,lat]);
    

    // Move map when have change in lat and lng
    // Change onclick
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

    // Change State of sensor (on/off)
    const handleSwitch = () => {
        if(sensorList[choose].hasOwnProperty("new"))
            return;
        if(switchSensor === "active") {
            setSwitchSensor("disable")
            setSensorList(prev => {
                prev[choose].mode='disable'
                sensorChange.current[choose].push({mode:"disable"})
                return prev;
            })
        }
        else if(switchSensor === "disable") {
            setSwitchSensor("active")
            setSensorList(prev => {
                prev[choose].mode='active'
                sensorChange.current[choose].push({mode:"active"})
                return prev;
            })
        }
    }


    // Submit the setting of user
    const handleSubmitChange = () => {
        // New Sensor Added
        sensorList.forEach(elem => {
            if(elem.hasOwnProperty("new"))  
                sensorForm.current.add.push(elem)
        })
        // Check Sensor Change
        Object.entries(sensorChange.current).forEach(([id,change])=> {
            if(change.length) {
                if(change[change.length-1]=="deleted") {
                    // If has deleted than add to remove array and break
                    sensorForm.current.remove.push(id)
                }else {
                    // Update The Change
                    const modify = {}
                    let key
                    for (let i = change.length-1; i >=0 ; i--) {
                        key = Object.keys(change[i])[0]
                        if(modify.hasOwnProperty(key)) {
                            continue;
                        }else {
                            modify[key] = change[i][key]
                        }
                    }
                    sensorForm.current.modify[id] = modify
                }
            }
        })

    }


    const handleShowForm = () => {
        handleSubmitChange()
        const f = JSON.stringify(sensorForm.current)
        sensorForm.current = {
            add : [],
            remove: [],
            modify:{} 
        }
        return f
    }

    const handleSubmitForm = () => {
        console.log(sensorForm);
        navigate(-1);
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
            const isNew = sensorList[choose].hasOwnProperty("new")
            if(!isNew)
                sensorChange.current[id].push('deleted')
        }else {
            alert("There are no sensors left");
        }
        setPopup(!popup)
    }

    const handleDeletePopUp = () => {
        console.log(popup);
        setPopup(!popup)
    }

    // Chỉnh sửa thông tin của 1 sensor
    const handleEditSensor = () => {
        setShowForm(prev => !prev)
    }
    const handleAddSensor = () => {
        setShowAdd(prev => !prev)
    }

    const handleSubmitPopUp = () => {
        setSubmitPopup(prev => !prev)
    }

    
    return (
        <div style={{height:"100%"}} className="container overflow-hidden">
            
             {/* Nút xác nhận */}
            <div className="btn btn-success"
                 style = {{
                    position: 'fixed',
                    bottom: '10%',
                    right:'5%',
                 }}    
                 onClick={()=>handleSubmitPopUp()}
            >
                Xác nhận
            </div>


            <Modal show={submitPopup} onHide={handleSubmitPopUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận cập nhật</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        handleShowForm()
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmitPopUp}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={()=>handleSubmitForm()}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>

            <Toolbars
                 removeSensor = {handleDeletePopUp}
                 editSensor = {handleEditSensor}
                 addSensor = {handleAddSensor}
            ></Toolbars>

            
            {
                // Delete PopUpConfirmation
            }
                 <Modal show={popup} onHide={handleDeletePopUp}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remove Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Sau khi xác nhận, một sensor sẽ được loại bỏ</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleDeletePopUp}>
                        Hủy
                        </Button>
                        <Button variant="danger" onClick={handleRemoveSensor}>
                        Xác nhận
                        </Button>
                    </Modal.Footer>
                </Modal>
                
      
            {   
                // If It is new sensor added then just modify info and not modify sensorChange
                showForm &&                
                <SensorDetail
                    choose={choose}
                    setSensorList = {setSensorList}
                    sensorList={sensorList}
                    sensorChange={sensorChange}
                    setShowForm={setShowForm}
                ></SensorDetail>
            }

            {   showAdd &&
                <AddingForm
                    choose={choose}
                    setSensorList = {setSensorList}
                    sensorList={sensorList}
                    sensorChange={sensorChange}
                    setShowForm={setShowAdd}
                ></AddingForm>
            }

            <Row style={{height:'75vh'}}>
                <Col xs={3}
                    className="overflow-auto"
                    style={{
                        backgroundColor:"green",
                        cursor:"pointer",
                        maxHeight:'75vh'
                    }}
                >
                    <ol className="list-group">

                        {   // Display all sensor
                            sensorList.map((sensor,index) => {
                            return (
                                <li key = {index}
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
                                        sensor = {sensor}
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
                            checked = {(switchSensor==="active" ? true: false)}
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