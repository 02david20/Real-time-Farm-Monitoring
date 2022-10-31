import Header from "./Header";

function DefaultLayout({children}) {
    return ( 
        <div>        
            <Headers>
            </Headers>
            <div className="container">
                <div className = "content">{children}</div>
            
            </div>
        </div>
    );
}

export default DefaultLayout;