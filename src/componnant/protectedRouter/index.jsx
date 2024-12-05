

//  thiar is a protected rauter they can use to protect our website not a random person not acssess this website withaut having a key (token);
//  first they can resistred afterthat they will be use this website

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