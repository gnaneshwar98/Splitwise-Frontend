import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';



export default function Slidebar() {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-sm-2 bg-black d-flex  flex-column justify-content-between min-vh-100'>
                    <div>
                    <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
                        <span className='fs-4'>Side Menu</span>
                    </a>
                    <hr className='text-white d-none d-sm-block'></hr>
                    <ul class="nav nav-pills flex-column ">
                        <li class="nav-item text-white">
                            <a href="#" class="nav-link" aria-current="page">Add Friends</a>
                        </li><br/>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Group</a>
                        </li>
                        <li class="nav-item ">
                            <a href="#" class="nav-link">Group Members</a>
                        </li>
                        <li class="nav-item ">
                            <a href="#" class="nav-link">Account</a>
                        </li>
                    </ul>
                 </div>
                </div>
              
            </div>
        </div>
    </div>
  )
}
