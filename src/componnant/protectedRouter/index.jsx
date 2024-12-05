

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const ProtectedRouter = (props)=>{

    const{Component}=props;
    const navigate = useNavigate();

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        if(token === undefined){

            navigate("/login")
        }

    },[])


    return(

        <Component/>
    )
 
}

export default ProtectedRouter;