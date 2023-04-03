import React, { useState } from 'react'
import Basic from './Components/basic';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { Hooksex } from './Components/Hooksex';
import { RegistrationHooks } from './Components/RegistrationHooks';
import LoginHooks from './Components/LoginHooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Slidebar from './Components/Slidebar';
import Routing from './Components/Routing';
import { redirect } from 'react-router-dom';
import  "./Components/Regstyle.css";
import Checkbox from './Components/Checkbox';



function App() {
  const [currentForm, setCurrentForm] = useState('login');

   const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
     <div className="App">
       {/*{
       currentForm === "login" ? <LoginHooks onFormSwitch={toggleForm} /> : <RegistrationHooks onFormSwitch={toggleForm} />
     }*/}
    <Header/>
    <Routing/>
    <Footer/>
    
    
     
    
    </div>
    

    
  );
}

export default App;
