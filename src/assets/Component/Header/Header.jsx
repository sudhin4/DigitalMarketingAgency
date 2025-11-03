import { FaHeadset } from "react-icons/fa";

import '../Header/Header.css'
function Header(){
    return(
        <>
        <div className="fullheadersection">
            <h1 className="Logoheading">Agency.</h1>
            <div className="routesectionheader">
                <h2 className="siderouteheadingg">Projects</h2>
                <h2 className="siderouteheadingg">Clients</h2>
                <h2 className="siderouteheadingg">Contact</h2>
                <h2 className="siderouteheadingg">Pricing</h2>
                <div className="supportlogodivv">
                <FaHeadset className="logoforheadset"/>
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Header;