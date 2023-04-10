
import axios from "axios";
import jwt_decode from "jwt-decode"


const  { createContext,useState }= require("react");





const AuthContext = createContext();

export  const AuthContextProvider = ({children}) =>{

    const[user,setuser] =useState(null);
    const login= async(payload)=>{
        const apiResponse = await axios.post("https://localhost:7262/api/Account/login-token",payload);
        let accessToken =jwt_decode(apiResponse.data.accessToken)
        console.log(accessToken)
       setuser(accessToken)
    };

    return (<AuthContext.Provider value={{login,user}}>
        {children}

    </AuthContext.Provider>);

};

export default AuthContext