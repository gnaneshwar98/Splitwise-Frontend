import React from 'react'
import "./Createbill.css"
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


export default function Createbill() {
  return (
      <div className='container'>
        <div className="row">
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>
          <div className="row">
          <div className='col-md-6'>
          <h5 className='groupname'>Select Group Name</h5>
        <h5 className='billname'>Select Bill Members</h5>
        <h5 className='billamount'>Bill Amount</h5>
        <h5 className='billamount'>Select Date To Pay</h5>
        <div className="row">
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>
          <a className='btn btn-primary button'>SplitEqually</a>
          </div>
          </div>
          </div>
          <div className='col-md-6'>  
            <select  className='dropdown'>
                <option>Party</option>
                <option>Hotel</option>
                <option>Restaurant</option>
            </select>
            <div className='icheckbox'>
            <DropdownMultiselect 
        options={["Ravi", "hari", "balu", "vikky", "Srilekha", "babu"]}
        name="Friends"
      />
      </div>
     <input type="number" name="amount" className='amount'/>
     <input type="date" className='date'/>
    
          </div>
          </div>
          </div>
          
          <div className='col-md-4'>
            
          </div>
         
        </div>

      </div>
              
     
                 
  



  )
}
