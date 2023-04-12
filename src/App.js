import React, { useContext,useState } from 'react'
import Basic from './Components/basic';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { Hooksex } from './Components/Hooksex';
import { RegistrationHooks } from './Components/RegistrationHooks';
import LoginHooks from './Components/LoginHooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Routes,Redirect,Route, Navigate,} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Slidebar from './Components/Slidebar';
import Routing from './Components/Routing';
import { redirect } from 'react-router-dom';
import  "./Components/Regstyle.css";
import Checkbox from './Components/Checkbox';
import Parentcomponent from './Components/Parentcomponent';
import Childcomponent from './Components/Childcomponent';
import { AuthContextProvider } from './Components/AuthContext';
import LoginToken from './Components/LoginToken';
import AddFriends from './Components/AddFriends';
import AuthContext from "./Components/AuthContext";
import GroupMember from"./Components/GroupMember";
import Createbill from './Components/Createbill';
import Account from './Components/Account';
import Addgroup from './Components/Addgroup';
import Hello from './Components/Hello';
import UserDashboard from './Components/UserDashboard';





function App(props) {
 const[show, setshow] =useState(false)
   
 
  return (
  
     <div className="App"> 
              
      <AuthContextProvider>
                   
                   <Routes>
            <Route path="/" element={<LoginHooks/>} ></Route>
            <Route path="/registration" element={<RegistrationHooks/>} ></Route>    
           
                  </Routes> 
                         
              <Routing/>

      
    </AuthContextProvider>
   
    
            
   
      
   
    </div>
    

    
  );
}

export default App;
