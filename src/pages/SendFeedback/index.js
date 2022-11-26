import styles from '../mainpage.module.css'
import Navbar from './components/navbar.js'
import FeedbackForm from './components/FeedbackForm.jsx'

function SendFeedback() {

    return (
        <div>
            <Navbar />
            <FeedbackForm/>
        </div>
    );
}

export default SendFeedback;