
import { Icon } from '@iconify/react';
function Sensor(props) {
    return(
        <div className=" d-flex justify-content-between  ">
            <div className="ms-2">
                {props.id}
            </div>

            <div>
                <Icon icon="fluent-emoji-flat:green-circle" />
            </div>
        </div>
    )
}

export default Sensor;