import React, { useState } from 'react'
import "./Accountstyle.css"
import Header from './Header';
import Footer from './Footer';

export default function Account() {
  const [file, setFile] = useState();

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
  return (
    <div>
      <Header/>
     <div className='profile'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          
            <div className='row'>
          <div className='col-md-6'>
           
           <div className='pic'>
           <h4>Profile Pic</h4>
           <input type="file" onChange={handleChange} />
           </div>
           <label className='name' htmlFor="name"><h4>Name</h4></label>
           <div className='mobile'><h4 >Mobile Number</h4></div>
           <div className='email'><h4 >Email</h4></div>
           <div className=' save'><a className="btn btn-primary">Save</a></div>
           
           
           </div>
            
            <div className='col-md-6'>
            <div>
            <img src={file} className="rounded-circle" height="200px" width="300px"/>
            </div>
            <input type="text" className='iname' id="name" disabled value="Gnaneshwar"></input>
            <input type="text" className='imobile' disabled value="6281556143"></input>
            <input type="text" className='iemail' disabled value="mgnaneshwar2020@gmail.com"></input>
           
           
          </div>
          </div>
          </div>
           
          
          <div className='col-md-6'>

          </div>
          
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    
  
  )
}
