import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './index.css';

const Login = ()=>{

    const[allvalue,setvalue] = useState({

        username:"",
        password : "",
        errorMsg : ""
    })

    const token = Cookies.get("jwtToken");

    const navigate = useNavigate();

    const onLoginPage = async(e)=>{

        e.preventDefault();
        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username:allvalue.username,
            password:allvalue.password
        }

        const option = {

            method:"Post",
             body:JSON.stringify(userDetails)
        }


        try{

            const response = await fetch(api,option);

            const data = await response.json();
            console.log(data)
            
            if(response.ok === true ){

                setvalue({...allvalue,errorMsg:""})
                Cookies.set("jwtToken",data.jwt_token)
                navigate("/")

            }
            else{

                setvalue({...allvalue,errorMsg:data.error_msg})
            }


        }
        catch(error){

            console.log(error)
        }
    }

    useEffect(()=>{

        if(token !== undefined){

            navigate("/")
        }
    },[])

    return(

        <div className="login-page">

       
            <form onSubmit={onLoginPage} className="login-form">

            <img src="public/imeges/login/signin-fig (1).png" className="login-img"/>

            <h3>Welcome!</h3>

<img src="C:\jobs portaial webite react\jobs-protal-project\src\assets\signin-fig.png " alt="" />
<input type="text" placeholder="Enten Username" onChange={(e)=>{setvalue({...allvalue,username:e.target.value})}}/>
<br />
<input type="password" placeholder="Password" onChange={(e)=>{setvalue({...allvalue,password:e.target.value})}} />
<br />
                <button type="submit">Login</button>
            </form>
        </div>
    )

   
}

export default Login;