import { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

import { availableSensors } from "../../../../../../api/api";
import Sensor from "../Sensor";
import SensorDetail from "../SensorDetail"


function renderSensor(arr, choose, setChoose) {
    if(arr.length === 0) {
        return (
            <div 
                style={{
                    backgroundColor:"green",
                    overflowY:"scroll !important",
                    cursor:"pointer",
                    height:'80%'
                }}
            >                                           
            </div>
        )
    }
    else {

        return (
                <ol className="list-group"
                    >

                        {arr.map((sensor,index) => {
                            return (
                                <li key = {index}
                                    className="list-group-item m-2"
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
        )
    }
}



function AddingForm({setSensorList, sensorList, sensorChange, setShowForm}) {
    const [lchoose, setLChoose] = useState(0)
    const [rchoose, setRChoose] = useState(0)
    const [ableSensors, setAbleSensors] = useState(() => availableSensors)
    const [addSensors, setAddSensors] = useState([])
    const [showNew, setShowNew] = useState(false)

    const handleSubmit = () => {
        // Update SensorList
        addSensors.forEach(elem => {elem["new"]=true})
        setSensorList(prev => [...prev, ...addSensors])
        console.log(addSensors);
        setShowForm(prev => !prev)
    }

    const handleCancel =  () => {

        setShowForm(prev => !prev)
    }

    const handleAddSensor = () => {
        setShowNew(!showNew)
    }

    const moveSensor = (srcArr, srcChoose, setSrc,setSrcChoose, setDes, all=null) => {
        if(all) {
            setSrc([])
            setDes(prev => [...srcArr,...prev])
            setSrcChoose(0)
            return;
        }
        if(srcArr.length) {
            const choose = srcChoose > srcArr.length ? srcArr.length-1 : srcChoose;
            const addingSensor = srcArr[choose]
            setSrc(prev => [...prev.slice(0, choose), ...prev.slice(choose + 1)])
            setDes(prev => [addingSensor,...prev])
            if(choose ===  0) {
                setSrcChoose(0)
            }else if(choose === srcArr.length-1) {
                setSrcChoose(srcArr.length-2)
            }
        }
    }

    return (
        <Container fluid
            style={{
                backgroundColor: 'white',
                position: 'fixed',
                top: '70px',
                width: '100%',
                zIndex: '10',
                height: '100vh',
                left: '64px',
            }}
        >
            {   
                showNew &&
                <SensorDetail
                    choose={-1}
                    setSensorList = {setAbleSensors}
                    sensorList={ableSensors}
                    sensorChange={null}
                    setShowForm={setShowNew}
                ></SensorDetail>
            }
            <Row style={{height:'75%', marginTop:"2%"}}>
                <Col xs={2}
                    
                ></Col>

                <Col xs={3}  
                    className = "hideScroll"
                    style={{
                        backgroundColor:"green",
                        overflowY:"scroll",
                        cursor:"pointer",
                        padding: '10px',
                        height:"80%",
                    }}                  
                >
                    {renderSensor(ableSensors,lchoose, setLChoose)}
                </Col>

                <Col xs={1} className="d-flex flex-column mt-auto mb-auto ">
                    <Button className="mb-2" onClick={()=>moveSensor(addSensors, rchoose, setAddSensors, setRChoose, setAbleSensors,1)} >
                        <Icon icon="material-symbols:keyboard-double-arrow-left" width="50" />
                    </Button>

                    <Button onClick={()=>moveSensor(addSensors, rchoose, setAddSensors, setRChoose, setAbleSensors)} >
                        <Icon icon="material-symbols:arrow-circle-left-outline-rounded" width="50" />
                    </Button>

                    <Button className='mt-2'
                            onClick={()=>moveSensor(ableSensors, lchoose, setAbleSensors, setLChoose, setAddSensors)}
                    >
                        <Icon icon="material-symbols:arrow-circle-right-outline" width="50" />
                    </Button>

                    <Button className='mt-2'
                            onClick={()=>moveSensor(ableSensors, lchoose, setAbleSensors, setLChoose, setAddSensors,1)}
                    >
                        <Icon icon="material-symbols:keyboard-double-arrow-right" width="50" />
                    </Button>
                    
                </Col>

                <Col xs={3}   
                    className = "hideScroll"
                    style={{
                        backgroundColor:"green",
                        overflowY:"scroll",
                        cursor:"pointer",
                        padding: '10px',
                        height:"80%",
                    }}                  
                >
                    {renderSensor(addSensors,rchoose, setRChoose)}
                </Col>
                <Col xs={3}>
                </Col>

            </Row>


            <Container className = "dflex"
                style={{
                    padding: 0,
                    margin:0,
                }}
            >
                <Button variant='primary' 
                        style={{width:'10%'}}
                        className="m-2"
                        onClick={()=>handleAddSensor()}
                >Thêm mới</Button>

                <Button variant='success' 
                        style={{width:'10%'}}
                        className="m-2"
                        onClick={() => handleSubmit()}
                >Xác nhận</Button>
                <Button variant="danger" 
                        style={{width:'10%'}}
                        className="m-2"
                        onClick={()=>handleCancel()}
                >Hủy</Button>
            </Container>
        </Container>
    );
}

export default AddingForm;