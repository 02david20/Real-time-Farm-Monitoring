import * as RB from 'react-bootstrap'
import styles from './Toolbars.module.css'
import { Icon } from '@iconify/react';
function Toolbars (props) {
    return(
        <RB.Container className="d-flex m-2 p-2 "
            style={{
                backgroundColor: 'green',
                borderRadius: '10px'
            }}
            fluid
        >
            <RB.Button className="ms-0"><Icon icon="charm:filter" width="20" height="20" /></RB.Button>
            
            <RB.ButtonGroup className='ms-auto'>
                <RB.Button  
                    className = {styles.button} 
                    variant="danger"
                    onClick={() => props.removeSensor()}

                >Delete</RB.Button> 
                <RB.Button  className = {styles.button}>Edit</RB.Button>
                <RB.Button  className = {styles.button} 
                            variant="success"
                >Add</RB.Button>  
            </RB.ButtonGroup>
         </RB.Container>
    )
}  

export default Toolbars;