import React, { useState } from 'react'
import axios from 'axios'

export default function LoginHooks(props) {

    const[email,setemail]=useState("")
    const [show, setshow] = useState(false);
    const[serverotp,setserverotp] =useState("")
    const[userotp,setuserotp] =useState("")
   

    const Validateemail=(e)=>{
        e.preventDefault();
        const data ={
            Email:email
       }
     
       axios.post("https://localhost:7249/api/Register/login",data)
      .then(res=>{
       alert(res.data);
       setserverotp(res.data)

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
    const Loginvalidate=(e)=>{
        e.preventDefault();
        if(userotp==serverotp)
        {
            alert("Login Sucessful")
           
          
           
        }
        else
        {
          
           alert("Login Unsucessful")
        }

   }

  return (
    <div>
         <div className="background">
          <div className='container '>
           <div className='row'>
           
            <div className='col-md-6 img'>
              
            
            
           <img src="https://www.terralogic.com/wp-content/themes/terralogic/img/brand-logo.svg" width="500" height="500"/>
            </div>
            
              <div className='col-md-4'>
                <form onSubmit={Validateemail} >
                <div className='form-group'>
                <div className='row '>
                
                    <label >Enter Email</label>
                  <input type="text" className='input' placeholder='Enter ur Email Address'value={email} onChange={(e)=>setemail(e.target.value)}/>

                  <div>
            {
                show?<div>
         
                        <label className='otpclass'>OTP</label><br/>
                       <input  onChange={(e) => setuserotp(e.target.value)} type="text" placeholder="****" id="otp" className='otpinput' />
                       
                       <a className='btn btn-primary log' onClick={Loginvalidate}>Log In</a>
                       
                       
               </div> : null
             }
        </div> 
                  </div>
                  <div>
                  <button className=" btn btn-outline-success submitlogin" >Submit</button>
                  <div className='loginlabel'>
              <a className="btn btn-warning" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</a>
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
