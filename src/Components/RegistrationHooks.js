import React, { useState } from 'react'
import axios from "axios";
import"./Regstyle.css";

export function RegistrationHooks () {
    const[name,Changename] =useState("")
    const[mobile,Changemobile] =useState("")
    const[email,Changeemail] =useState("")
   
    const[nameerror,setnameerror] =useState("")
    const[mobileerror,setmobileerror] =useState("")
    const[emailerror,setemailerror]=useState("")



    const updatename=(e)=>{
        Changename(e.target.value);
    }
    const updatemobile=(e)=>{
        Changemobile(e.target.value);
    }
   const Submitdetails=(e)=>{
    let namecon=/^[a-zA-Z ]+$/;
    let mobilecon=/^[a-zA-Z ]+$/;
        e.preventDefault();
        if(name==="" || name === null)
        {
            setnameerror("name should not be blank")
            if(name!==""){
                setnameerror("")
            }
           
        }
        else{
            if(name.match(namecon)){
                setnameerror("")
            }
            else{
                setnameerror("Please enter characters only")
            }

        }

        if(mobile===""){
            setmobileerror("Mobile Number should not be blank")
            if(mobile!==""){
                setmobileerror("")
            }
      }
      else{
        if(!mobile.match(mobilecon)){
            setmobileerror("")
        }
        else{
            setmobileerror("Please enter Numbers only")
        }
      }

      if(email==="" || email===null){
        setemailerror("Email is required");
      }
      const data ={
        id: 0,
        name: name,
        moblie_Number: mobile,
        email: email 
      }
      axios.post("https://localhost:7262/api/Register/register",data)
      .then(res=>{
       console.log(res);
       alert("Record inserted")})
     
       .catch(res=>{
         console.log(res);
         alert("Record not inserted")
      })



    }


  return (
    <div> 
        <div className='regbackground'>
       
       <div className='container '>
          <div className='row'>
         
             <div className='col-md-4'>
 
             </div>
           <div className='col-md-4 '>
              <h5 className='registration'><u>Registration Page</u></h5>
             <form onSubmit={Submitdetails}>
                 <div className='form-group'>
                 <div className='row'>
                     <div className='col-md-4'>
                     
                       <label htmlFor="name" className='regname'>Name</label>
                     </div>
                      <div className='col-md-8'>
                         <input type="text" className="form-control reginame " id="name" placeholder="Name" value={name} onChange={updatename}/> 
                         <span style={{color:"red"}}>{nameerror}</span>
 
                         </div>   
                      </div>
                     
                 </div>
                 <div className='row'>
                     <div className='col-md-4'>
                       <label htmlFor="mobile" className='regmobile'>Mobile Number</label>
                     </div>
                      <div className='col-md-8'>
                         <input type="text" className="form-control regimobile" id="mobile" placeholder="Mobile Number" value={mobile} onChange={updatemobile}/>  
                         <span style={{color:"red"}}>{mobileerror}</span>
                      </div>
                 </div>
                 <div className='row'>
                     <div className='col-md-4'>
                       <label htmlFor="email" className='regemail'>Email</label>
                     </div>
                      <div className='col-md-8'>
                         <input type="email" className="form-control regiemail" id="email" placeholder="Email" value={email} onChange={(e)=>Changeemail(e.target.value)}/>   
                         <span style={{color:"red"}}>{emailerror}</span> 
                      </div>
                 </div>
 
                 
                 <div className='regsubmit'>
                 <button className='btn btn-primary'>Submit</button>
                 </div>
                <div className='bottom'>
                 <a className="btn btn-warning" href="/">Already have an account? Login here.</a>
                 </div>
                 <div className='col-md-4'>
 
                 </div>   
         </form>
         </div>
         </div>
       </div>
     </div>

    </div>
  )
}

