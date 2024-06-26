import React,{ useState } from 'react'
import './Navbar.css'
import { Assets } from '../../Assets/Assets';
import { Link } from 'react-router-dom';
const Navbar = ({setshowLogin}) => {
   const [underline,setunderline]=useState("");
    return ( 
       <div className='Navbar'>
        <Link to='/'><img src={Assets.logo} alt="" className="logo"/></Link>
        <ul className="Navbar-Menu">
          <Link to="/" onClick={()=>setunderline("home")}className={underline==="home"?"active":""}>Home</Link>
          <a href='#About-us' onClick={()=>setunderline("About-us")} className={underline==="About-us"?"active":""}>About-us</a>
          <a href='#app-download' onClick={()=>setunderline("Mobile-app")}className={underline==="Mobile-app"?"active":""}>Mobile-app</a>
          <a href='#Footer' onClick={()=>setunderline("contact-us")} className={underline==="contact-us"?"active":""}>Contact us</a>
        </ul>
          <div className="Navbar-right">
          <button onClick={()=>setshowLogin(true)} class = "buttn" >sign in</button>
        </div>
       </div>
     )
}
 
export default Navbar;