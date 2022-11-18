
import { Icon } from '@iconify/react';
function Sensor(props) {
    const handleSensorState = (mode) => {
        if(mode ==="active")
            return <Icon icon="fluent-emoji-flat:green-circle" />
        else if(mode === "disable")
            return <Icon icon="emojione:red-circle" />
        else if(mode === "error")
            return <Icon icon="emojione-v1:warning" />
        else    
            return <Icon icon="akar-icons:circle-fill" />
    }
    return(
        <div className=" d-flex justify-content-between  ">
            <div className="ms-2">
                {props.id}
            </div>

            <div>
                {
                   handleSensorState(props.mode)
                }
            </div>
        </div>
    )
}

export default Sensor;