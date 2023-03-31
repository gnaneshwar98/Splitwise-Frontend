import { Button } from 'bootstrap'
import React, { Component } from 'react'
import "../App.css"
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       otp:"",
        email:""  
      }
    }
   
    Putemail=(e)=>{
        this.setState({
        email:e.target.value
        })
    }
  Checkemail=(e)=>{
    e.preventDefault();
    let email=this.state.email;
    const data ={
       Email:email
  }

  axios.post("https://localhost:7249/api/Register/login",data)
 .then(res=>{
  alert(res.data);
  let otp =res.data
  })

  .catch(res=>{
    console.log(res);
    alert("Email not sent for verification")
 })






}


  render() {
   
    const {email} = this.state;
    return (
    
       
        <div className="background">
          <div className='container '>
           <div className='row'>
            <div className='col-md-4'>
            </div>
              <div className='col-md-4'>
                <form onSubmit={this.Checkemail}>
                <div className='form-group'>
                <div className='row'>
                    <label>Email</label>
                  <input type="text" placeholder='Enter ur Email Address'value={email} onChange={this.Putemail}/>
                  </div>
                  </div>
                 <button className="submitlogin" >Submit</button>
                </form>
  
              </div>
              <div className='col-md-4'>
              </div>
              </div>
              </div>

              
              


              </div>
              
          
    )
  }
    }
               
                  
                  
          
          
       

    