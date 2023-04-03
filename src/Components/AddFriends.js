import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./AddFriendsstyle.css"

function  AddFriends(probs){
    
    const[name,setName]=useState('');
    const[mobile,setmobile]=useState('');
    const[email,setEmail]=useState('');
    
      
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    }
    return(
    
        <div className="auth-form-container">
            <h2 className="heading"><u>User Contacts</u></h2>
            <div className="container">
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
                    <input type="text" name="name" className="inputname" placeholder="Enter Name"></input>
                    <input type="number" name="mobile" className="inputmobile" placeholder="Enter Mobile Number"></input>
                    <input type="email" name="email" className="inputemail" placeholder="Enter Email "></input>
                    </div>
                    </div>
                    <div className="row">
                 
                  <div className="col-md-12 addfriendsbutton">
                  <a className="btn btn-primary ">AddFriends</a>
                  </div>
                 
                 
                    </div>
            </div>
               
                <div className="col-md-4">
                  
                </div>
              </div>
            </div>
       
        </div>
    )
            

    }
    export default AddFriends