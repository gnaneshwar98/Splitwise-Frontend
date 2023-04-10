import React, { useState } from 'react'
import"./Addgroupstyle.css"

 function Addgroup() {
    const [show,setshow]=useState(false);
  const [name, setname] = useState();
  
const Gropusub=(e)=>{
    e.preventDefault();
    setshow(!show)
   }
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
           <h2>Welcome To Groups</h2>
           <button className='btn btn-primary Groups' onClick={Gropusub} type="submit">create Groups</button>
            </div>
            {    
            show?<div className='col-md-4'>
                <form className='formgroup'>
                    <div className='row'>
                        <div className='col-md-6'>
                        <label className='lgroupname'>Group Name</label>
                        <label className='lgroupamount'>Amount  </label>
                        <label className='lgroupcomment'>Comments  </label>
                        <label className='lgroupbill'>Bill Copy </label>
                        <div className='row'>
                            <div className='col-md-6'>
                           
                        
                            </div>
                            <div className='col-md-6'>
                            <a className=' btn btn-warning but'>Save </a>
                            </div>
                        </div>
                       
                       
                        </div>
                        <div className='col-md-6'>
                        <input type="text" name="name" placeholder='Place Enter Group Name' className='form-control input'/>
                        <input type="number" name="number" placeholder='Place Enter Amount' className='form-control input' />
                        <textarea name="comment" className='form-control textarea input' placeholder='Please Mention ur comments here'></textarea>
                        <input type="file" name="bill" className='form-control'/>
                        </div>

                    </div>
                </form>
            </div>:null
            }
            <div className='col-md-4'>

            </div>
            
            
            
        </div>
      </div>
      <br></br>
      <div className='search'>
       <div className='col-md-6'>
          {/*<input type="text" id="search" className='' width="50px" placeholder='Search'></input>
          <button type='button' className='btn btn-success'>Search</button>*/}
       </div>
      <table  className="table table-dark" align="center">
      <thead>
          <tr>
           <th scope="col">ID</th>
            <th scope="col">Group Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Option</th>
          </tr>
        </thead> 
        </table> 
        </div> 
        

            
      
     
    </div>
  )
}
export default Addgroup
