import React,{useContext, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./AddFriendsstyle.css"
import axios from "axios";
import AuthContext from "./AuthContext";

function AddFriends(){
    
    const[name,setname]=useState('');
    const[mobile,setmobile]=useState('');
    const[email,setemail]=useState('');
   
    const{user} =useContext(AuthContext);
    
    const Submitdetails=(e)=>{
      e.preventDefault();
     
      let loginemail= user.email
      const data2={
       
  name: name,
  moblie_Number: mobile,
  email: email,
  lemail: loginemail
      }

    axios.post("https://localhost:7262/api/AddContacts/addcontacts",data2)
    .then(res=>{
     console.log(res);
     alert("Record inserted")})
   
     .catch(res=>{
       console.log(res);
       alert("Record not inserted")
    })
  }

      
     
  
    return(
    
        <div className="auth-form-container">
            <h2 className="heading"><u>User Contacts</u></h2>
            <div className="container">
            <form >
              <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
               
                 <div className="row">
                  
                  <div className="col-md-6">
                    
                   <label className="name">Full Name</label>
                   <label className="mobile">Mobile Number</label>
                   <label className="email">Email Address</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="name" className="inputname" placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)} ></input>
                    <input type="number" name="mobile" className="inputmobile" placeholder="Enter Mobile Number" value={mobile} onChange={(e)=>setmobile(e.target.value)}></input>
                    <input type="email" name="email" className="inputemail" placeholder="Enter Email " value={email} onChange={(e)=>setemail(e.target.value)}></input>
                    </div>
                    </div>
                    <div className="row">
                 
                  <div className="col-md-12 addfriendsbutton">
                  <a className="btn btn-primary " onClick={Submitdetails}>AddFriends</a>
                 
                  </div>

                 
                 
                    </div>
                   
            </div>
               
                <div className="col-md-4">
                  
                </div>
              </div>
              </form>
            </div>
       
        </div>
    )
};        

    
    export default AddFriends