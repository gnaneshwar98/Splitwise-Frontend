import React from 'react'
import "./Headstyle.css"
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import Dashboard from './Dashboard'
import { useNavigate } from "react-router-dom";


function Header(props) {
  const navigate = useNavigate();

  const Logingout =(e)=>{
    navigate("/");
    localStorage.clear();
    
  }
  return (
    <div>
    <header className='top'>
    <div className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                   
                </div>
                <div className='col-md-6'>
                 <h5 className='welcome'>Welcome To Splitwise Application</h5>
                </div>
                <div className='col-md-2'>
                 
                <a className='btn btn-danger logout' onClick={Logingout}>Logout</a>
                </div>
            </div>
        </div>
          
   </div>
   
   <div className='nav-bar'>
   
    <div className='container d-block'>
            <div className='row'>
          <div className='col-md-12'>
           <nav className='navbar navbar-expand-lg navbar-light justify-content-between'>
  <a className="navbar-brand" href="#">Splitwise</a>
  
  <div className="collapse navbar-collapse justify-content-end" id="navbarText">
    <ul className="navbar-nav ">
      <li className="nav-item ">
        <NavLink className="nav-link" to="/dashboard"><i className="fa-solid fa-house"></i>Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/addfriends"><i className="fa-solid fa-address-book"></i>Add Friends</NavLink>
      </li>
      {/*<li className="nav-item ">
        <NavLink className="nav-link" to="/groups">
         Groups</NavLink>
         
  </li>*/}
 
  <li>
  <div className="dropdown-center">
  <a className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-user-group"></i>
    Groups
  </a>
  <ul className="dropdown-menu">
    <li>< a className="dropdown-item" href="/addgroup">Add Group</a></li>
    <li><a className="dropdown-item" href="/addgroupmembers">Group Members</a></li>
    <li><a className="dropdown-item" href="#">MY Groups</a></li>
   
  </ul>
</div>
  </li>
     
      
      <li className="nav-item">
        <NavLink className="nav-link"to="/account"><i className="fa-solid fa-user"></i>Account</NavLink>
      </li>
      
    </ul>
   
  </div>
</nav>


  </div>
   </div>
   </div>

   

   </div>
  
  
   </header>
   
   </div>
   
  )
}

export default Header
       
 
 