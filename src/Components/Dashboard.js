import React from 'react'
import "./Dashboardstyle.css"
import "./Createbill"
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const  Dashboard=()=> {
  return (
    <div>
     <Header/>
    <div style={{ 
      backgroundImage: `url("https://splitwise.files.wordpress.com/2019/07/blog-cover-image.png")`, 
     backgroundRepeat:'no-repeat',
     
    }} >
     
      
      <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
         
        </div>
        <div className='col-md-4'>
         
         </div>
         <div className='col-md-4 buttons '>
         <a className='btn btn-warning' href="/createbill">Create Bill</a>
         </div>
      </div>

     </div>
      
    </div>
    <Footer/>
    
    </div>
  )
}
export default Dashboard
