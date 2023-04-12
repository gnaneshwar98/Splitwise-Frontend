
import React, { useContext, useState } from 'react'
import axios from 'axios'
import AddFriends from './AddFriends';
import "./loginhooks.css";
import Routing from './Routing';
import { useNavigate } from "react-router-dom";

import AuthContext from './AuthContext';
import Dashboard from './Dashboard';
import Header from './Header';


const  LoginHooks=()=> {

    const[email,setemail]=useState("")
    const [show, setshow] = useState(false);
    const [open, setopen] = useState(true);
    
    const[userotp,setuserotp] =useState("")
    const[user,setuser]=useState(null);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    
   
    

  

    const Validateemail=(e)=>{
        e.preventDefault();
        const data ={
          email: email
       }
      
     
       axios.post("https://localhost:7262/api/Login/Emailverify",data)
      .then(res=>{
       alert(res.data);
      

      if(res.data==="Invalid User"){
        setshow(show)
      }
      else{
        setshow(!show)
      }

      })
       .catch(res=>{
        console.log(res.data);
        alert("Email not sent for verification")
       })

    }

    const validateotp= async (e)=>{
      e.preventDefault();
      const data={ 
        email:email,
          otp: userotp
      }
      axios.post("https://localhost:7262/api/Login/OTPverify",data)
      .then(res=>{
       
      console.log(res.data);
       alert(res.data); 
       if(res.data=== "Login Successful")
       {
        navigate("/dashboard");
       }
       
       });

      
    
      


      {/*const data2={
        email: email
}
       

    axios.post("https://localhost:7262/api/Account/login-token",data2)
       .then(res=>{
        console.log(res.data.accessToken);  
        setuser(jwt_decode())
       }).catch(res=>{
        console.log(res.data);
        
       })*/}
       let payload= {
        email:email
       }
       await login(payload);
      

  };

  return (
    
    <div>
         <div className="background">
          <div className='container '>
           <div className='row'>
           
            <div className='col-md-6 img'>
              
            
            
           <img src="https://assets.splitwise.com/assets/core/open-graph-preview-c1b55b0dc7c2b2d5bd6f40bbe34989f3eb2317843246727606cf3e96ee254609.png" width="600" height="400"/>
            </div>
            
              <div className='col-md-4'>
                <form onSubmit={Validateemail} >
                <div className='form-group'>
                <div className='row '>
                
                    <label >Enter Email</label>
                    <div >
                  <input type="text"className='input'  placeholder='Enter ur Email Address'value={email} onChange={(e)=>setemail(e.target.value)}/>
                  </div>
                  <div>
                 
            {
                show?<div>
         
                        <label className='otpclass'>OTP</label><br/>
                       <input  onChange={(e) => setuserotp(e.target.value)} type="text" placeholder="****" id="otp" className='otpinput' />
                       
                       <a className='btn btn-primary log' onClick={validateotp}>Log In</a>
                       
                       
               </div> : null
             }
            
        </div> 
                  </div>
                  <div>
                  <button className=" btn btn-outline-success submitlogin" >Submit</button>
                  <div className='loginlabel'>
              <a className="btn btn-warning link-btn" href="/registration">Don't have an account? Register here.</a>
              </div>
                  
                 </div>
                  </div>
                 
                 <div>
                 
                 </div>
                </form>
               
                
              </div>
              
              <div className='col-md-2'>
              
              </div>
              </div>
              </div>

              
            </div>
              
    </div>
  )
}
export default LoginHooks
