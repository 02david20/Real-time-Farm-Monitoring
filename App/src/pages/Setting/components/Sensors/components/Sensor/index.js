import { Icon } from '@iconify/react';
function Sensor({sensor}) {
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
                <div class="row">
                    <div className="col">{sensor.id}</div>
                    <div className="col" style={{margin:0, padding:0, width: '100px'}}>{sensor.name}</div>
                    <div className="col">{sensor.type}</div>
                </div>
            </div>

            <div>
                {
                   handleSensorState(sensor.hasOwnProperty('new')?"":sensor.mode)
                }
            </div>
        </div>
    )
}

export default Sensor;