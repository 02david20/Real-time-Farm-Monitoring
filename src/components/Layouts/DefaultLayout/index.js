import Header from "../components/Header";
import UserSidebar from "../components/UserSidebar"
// import Navbar from './components/Navbar';

function DefaultLayout({children}) {

    return ( 
        <div>        
            <Header>
            </Header>

            <UserSidebar></UserSidebar>
            <div className="container">
                <div className = "content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;