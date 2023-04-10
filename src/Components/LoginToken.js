import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from 'react';
import AuthContext from './AuthContext';

export default function LoginToken() {
    const[email,setemail]=useState("")
    const[name,setname]=useState("")
    const {login} = useContext(AuthContext);


    const Submitdetails= async ()=>{
        let payload={           
  name: name,
  email: email
        }
    await login(payload);

    };

  return (
    <div>
        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                <label >Enter Email</label>
                  <input type="email" className='input' placeholder='Enter ur Email Address'value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
                  <label >Enter name</label>
                  <input type="text" className='input' placeholder='Enter ur Name'value={name} onChange={(e)=>setname(e.target.value)}/><br/>
                  <a className='btn btn-primary'onClick={Submitdetails}>Submit</a>
                </div>
                <div className='col-md-6'>
                    
                </div>
            </div>

        </div>
    </div>
  )
}
