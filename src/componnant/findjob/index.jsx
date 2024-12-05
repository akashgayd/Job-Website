
import DisplayNewJob from "../displayAllJob";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import './index.css';
import Filter from "../filter";
import Footer from "../home5Footer";
import ItJobs from "../itJobs";






const Jobs = ()=>{
    const token = Cookies.get("jwtToken");
    const[allvalue,setvalue]=useState({

        alljob:[],
        userSearch:"",
        typeEmplayee:[],
        minPackege:[]
    })

    const[newjobs,setjobs] = useState({

        itjobs:[]
    })

    


    useEffect(()=>{

    

    const getAllJob = async()=>{


         

        const api = `https://apis.ccbp.in/jobs?employment_type=${allvalue.typeEmplayee}&minimum_package=${allvalue.minPackege}&search=${allvalue.userSearch}`;

        const option = {

            method:"Get",
          headers:{
            Authorization:`Bearer ${token}`
          }
 
        }

        try{

            const response = await fetch(api,option);

            const data = await response.json();
                         


            if(response.ok === true ){

                setvalue({...allvalue,alljob:data.jobs});

                setjobs({...newjobs,itjobs:data.jobs})
                         
         
            }

        }
        catch(erroe){
console.log("the pasr code will be run");

        }


    }

    getAllJob();

},[allvalue.userSearch,allvalue.typeEmplayee,allvalue.minPackege])


const userSearchJob =(e)=>{
if(e.key === "Enter" || e.key === "Find Job"){

    setvalue({...allvalue,userSearch:e.target.value})

}


}


const randerAllData = (value,isChecked)=>{

    if(isChecked === true){

        setvalue({...allvalue,typeEmplayee : [...allvalue.typeEmplayee,value]});
    }
    else{

        setvalue({...allvalue,typeEmplayee : allvalue.typeEmplayee.filter(each => each !== value)})
    }

}


const randerRadio = (value)=>{


    setvalue({...allvalue,minPackege:value});

}



    return(

    <div>

<Header/>


<div className="bg-job-color">



<br /><br /><br /><br /><br />


<div className="search-job-user">

    <h2>Find Job</h2>
    <p>Search your career opportunity through 12,800 jobs</p>

    <div className="search-job-input-user">

<select name="Cities" id="All city">


<option value="All Locstion"> All Location</option>


</select>
<br />

<input type="search" onKeyUp={userSearchJob} placeholder="Enter Your Job" />

<br />


<button onKeyUp={userSearchJob}>Find Job</button>

</div>






</div>

<div className="filter-cont">

<h4>Type of Employment</h4>

<Filter usergetData ={randerAllData} radioRander ={randerRadio}></Filter>

</div>

<ul className="dislpay-job">
  
    {

        allvalue.alljob.map(each=>( <DisplayNewJob userList ={each} key={each.id}/>))
    }
</ul>

{/* <ul>

    {

        newjobs.itjobs.map(range=> (<ItJobs userData = {range} key={range.id}/>))
    }
</ul> */}



</div>

<Footer/>

    </div>
    )
    
}
export default Jobs;