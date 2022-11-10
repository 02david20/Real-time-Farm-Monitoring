import styles from '../mainpage.module.css'
import Navbar from './components/navbar.js'
import Setting_pump from './components/settingpump.js'

function Manage_farm() {
    return (
        <div>
            <Navbar />
            <Setting_pump />
        </div>
    );
}

export default Manage_farm;