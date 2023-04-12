
import axios from "axios";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router";


const  { createContext,useState }= require("react");





const AuthContext = createContext();

export  const AuthContextProvider = ({children}) =>{

    const[user,setuser] =useState(null);
    


    const login= async(payload)=>{
        const apiResponse = await axios.post("https://localhost:7262/api/Account/login-token",payload);
        let accessToken =jwt_decode(apiResponse.data.accessToken)
        console.log(accessToken)
        localStorage.setItem("token",JSON.stringify(apiResponse.data))
       
       setuser(accessToken)
      
    };

  

    return (<AuthContext.Provider value={{login,user}}>
        {children}

    </AuthContext.Provider>);

};
export const isLogin=()=>{
    if(localStorage.getItem("token"))
    {
        return true;
    }
    else{
        return false;
    }
}

export default AuthContext