import styles from '../mainpage.module.css'
import Navbar from './components/navbar.js'
import Tasking from './components/tasking.js'

function Manage_farm() {
    return (
        <div className={styles.background}>
            <Navbar />
            <Tasking />
        </div>
    );
}

export default Manage_farm;