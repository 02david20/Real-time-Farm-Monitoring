import Header from "./Header";
import Sidebar from "./Sidebar"

function DefaultLayout({children}) {
    return ( 
        <div>        
            <Headers>
            </Headers>
            <div className="container">
                <Sidebar>
                </Sidebar>
                <div className = "content">{children}</div>
            
            </div>
        </div>
    );
}

export default DefaultLayout;