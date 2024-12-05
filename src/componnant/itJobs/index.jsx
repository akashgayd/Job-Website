import { useState,useEffect } from 'react';
import Cookies from "js-cookie";
import Header from '../header';
import Footer from '../home5Footer';


import './index.css';
import { Link } from 'react-router-dom';

const ItJobs =()=>{

    const token = Cookies.get("jwtToken");

    const[allvalue,setvalue] = useState({
        
        alljobs:[]
    })

    

    useEffect(()=>{


        const AllitJobs = async()=>{

            const api = "https://apis.ccbp.in/jobs?employment_type=FULLTIME,PARTTIME&minimum_package=2000000&search=";
            const option = {

                method :"Get",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }

            try {
                
                const response = await fetch(api,option);

                const data = await response.json();

                if(response.ok === true){

                    setvalue({...allvalue,alljobs:data.jobs});
                }

            } 
            
            catch (error) {
               
                console.log("past code will be exiuted")
            }

        }

        AllitJobs();


    },[])


    return(

        <div className='main-it-jobs'>

            <Header></Header>

            <div className='br-batgs'>
            <br /><br /><br /><br /><br /><br />
            </div>

            <div className='container'>

            {
                allvalue.alljobs.map(each =>(

                    <div className='all-jobs-cont'>

                        <img src={each.company_logo_url} alt="" />

<span>
                        <h4>{each.title}</h4>

                     
                        <p>{each.employment_type}</p>

                     

                        <h5>Discription</h5>
                        
                        <p>{each.job_description}</p>
                        </span>

                        <Link to={`${each.id}`}>
                        
                        <button className='btn btn-success'>Apply</button>
                        </Link>
                    </div>
                ))
            }
            </div>

            <br />
            <br />
            <Footer></Footer>
        </div>
    )



} 
export default ItJobs;