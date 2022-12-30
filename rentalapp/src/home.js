import React from "react";
import Apartment from './apart1.webp'
import Apartment1 from './th.webp'
import Logo from './logoapart.png'
import './App.css'
import { Link } from "react-router-dom";

class Home extends React.Component{
      constructor(props){
        super(props)    }


    render(){
        return(
            <div className="homepage">
               <div className="homebody">
                <div className="homeimage">
                    <div><img src={Logo} width={'40px'} height={'70px'}/><h3>Diani Apartment</h3>
                 </div>
                <div className="homeDesc">
                    <div className="dialogBox">
                        <button><Link to={'/admin'}>Admin</Link></button>
                        <button><Link to={'/apply'}>Apply</Link></button>
                        <button><Link to={'/login'}>Tenant</Link></button>
                </div>
                 </div>
                </div>
               </div>
            </div>
        )
    }
}

export default Home
