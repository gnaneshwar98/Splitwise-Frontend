import React, { Component } from 'react'
import "../App.css";
import axios from "axios";

export default class Registration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        mobilenumber:'',
        email:'' , 
        profilepic:''
      }
    }
   

    Changename=(e)=>{
        this.setState({
        name:e.target.value
        })
    }
        Changemobile=(e)=>{
            this.setState({
            mobilenumber:e.target.value
            })
        }
            Changeemail=(e)=>{
                this.setState({
                email:e.target.value
                })

    }
         Changepic=(e)=>{
          this.setState({
            profilepic:e.target.value

          })
         }

    Submitdetails=(e)=>{
        e.preventDefault();
        let name=this.state.name;
        let mobilenumber=this.state.mobilenumber;
        let email=this.state.email;
        let namecon=/^[a-zA-Z ]+$/;
        let mobilecon=/^[a-zA-Z ]+$/;
        let profilepic=this.state.profilepic;

        if(name==="")
        {
            document.getElementById("Namenote").innerHTML="please enter ur name"
          if(name!=="")
          {
            document.getElementById("Namenote").innerHTML=""   
          }
        }
        else
        {

         if(name.match(namecon))
         {
            document.getElementById("Namenote").innerHTML=""
         }
         else
         {
            document.getElementById("Namenote").innerHTML="Please enter characters only"
         }

        }
        if(mobilenumber==="")
        {
            document.getElementById("mobilenote").innerHTML="Please enter ur mobile number"
        }
        else
        {
          if(!mobilenumber.match(mobilecon))
          {
            if(mobilenumber.length===10)
            {
             document.getElementById("mobilenote").innerHTML=""
            }
            else 
            {
             document.getElementById("mobilenote").innerHTML="Please enter up to 10 digits"
             }
            
          }
          else{
            document.getElementById("mobilenote").innerHTML="Please enter Numbers only"
          }
           
        }
      const data ={
        ID: 0,
        Name: name,
        Moblie_Number:mobilenumber,
        Email: email,
        Status:1,
        ProfilePic:profilepic
      
      }
 axios.post("https://localhost:7249/api/Register/register",data)
 .then(res=>{
  console.log(res);
  alert("Record inserted")})

  .catch(res=>{
    console.log(res);
    alert("Record not inserted")
 })


    }
  render() {
     const {name,mobilenumber,email}=this.state

    return (
        <div className='background'>
       
      <div className='container '>
         <div className='row'>
        
            <div className='col-md-4'>

            </div>
          <div className='col-md-4 '>
            <form  onSubmit={this.Submitdetails}>
                <div className='form-group'>
                <div className='row'>
                    <div className='col-md-4'>
                      <label htmlFor="name" className='name'>Name</label>
                    </div>
                     <div className='col-md-8'>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={this.Changename}/> 
                        <div id="Namenote" className="nameerror">

                        </div>   
                     </div>
                    
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                      <label htmlFor="mobile" className='mobile'>Mobile Number</label>
                    </div>
                     <div className='col-md-8'>
                        <input type="text" className="form-control" id="mobile" placeholder="Mobile Number" value={mobilenumber} onChange={this.Changemobile}/>  
                        <div id="mobilenote" className='mobileerror'>
                            </div> 
                     </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                      <label htmlFor="email" className='email'>Email</label>
                    </div>
                     <div className='col-md-8'>
                        <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.Changeemail}/>    
                     </div>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                      <label htmlFor="pic" className='pic'>Profile Pic</label>
                    </div>
                     <div className='col-md-8'>
                        <input type="file" className="form-control" id="pic" onChange={this.Changepic} />    
                     </div>
                </div>
                <button className='submit' onClick={this.updatedata}>Submit</button>
                </div>
                <div className='col-md-4'>

                </div>   
        </form>
        </div>
        </div>
      </div>
    </div>
    
    )
}
    }

