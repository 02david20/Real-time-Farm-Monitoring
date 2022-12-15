import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import Fields from './components/Fields'
import Sensors from "./components/Sensors";

function Setting() {
    const [choice, setChoice] = useState(0)
    const handleChoice = (c) => {
        setChoice(c)
    }
    return (
        
        <div className="Setting">
            <div className="d-flex justify-content-start m-2">
                <Button variant={!choice ? "primary" : "secondary"} 
                        size="lg"
                        style={{borderRadius:0}}
                        onClick={() => handleChoice(0)}
                >
                    Điều khiển thiết bị
                </Button>
            </div>       
           
                {!choice ? <Sensors/> : <Fields/>}
        </div>
    )
}

export default Setting;