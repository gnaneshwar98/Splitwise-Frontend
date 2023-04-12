import React from 'react'
import { Navigate } from 'react-router'
import { isLogin } from './AuthContext';
import { useNavigate } from "react-router-dom";
import LoginHooks from './LoginHooks';


const PrivateRoute = ({component:Component, ...rest})=> {
    const navigate = useNavigate();
   
   debugger
    if(isLogin()){
        return (<Component {...rest}/>);
    }
   else{
      return(<LoginHooks/>)
   }
  
   
 
};
export default PrivateRoute;