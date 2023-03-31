import React from 'react'
import "./Dashboardstyle.css"
import "./Createbill"
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div >
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
  )
}
