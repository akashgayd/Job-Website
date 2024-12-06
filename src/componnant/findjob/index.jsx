
import DisplayNewJob from "../displayAllJob";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
import Header from "../header";
import './index.css';
import Filter from "../filter";
import Footer from "../home5Footer";



// use Cookies for get the Authorization to API






const Jobs = ()=>{
    const token = Cookies.get("jwtToken");
    const[allvalue,setvalue]=useState({

        alljob:[],
        userSearch:"",
        typeEmplayee:[],
        minPackege:[]

        //  thease four componant represent to the 1.can see all data on api
        //  2. user Search any type of jobs give some result 
        //  3.  is a checkbox user checkbox can click checkboc will checked give some output for user
        //  4. it is a radio button with a minimun sallary have a user they can click and give some result


    })

    const[newjobs,setjobs] = useState({

        itjobs:[]
    })

    


    useEffect(()=>{

    

    const getAllJob = async()=>{


        //   the api fething for use async function

        const api = `https://apis.ccbp.in/jobs?employment_type=${allvalue.typeEmplayee}&minimum_package=${allvalue.minPackege}&search=${allvalue.userSearch}`;

        const option = {


            //  usinsg a Get method

            method:"Get",
          headers:{
            Authorization:`Bearer ${token}`

            //  give Authorization for API
          }
 
        }

        try{

            const response = await fetch(api,option);

            //  fetch the api 
            const data = await response.json();
                         


            if(response.ok === true ){

                setvalue({...allvalue,alljob:data.jobs});

                setjobs({...newjobs,itjobs:data.jobs})

                //  will can succenss the fetch api wi will get all data
                         
         
            }

        }
        catch(erroe){
console.log("the pasr code will be run");

        }


    }

    getAllJob();

},[allvalue.userSearch,allvalue.typeEmplayee,allvalue.minPackege])




//  search button function

const userSearchJob =(e)=>{
if(e.key === "Enter"){
e.preventDefault();

    setvalue({...allvalue,userSearch:e.target.value})


}

}

//  checkbox function
const randerAllData = (value,isChecked)=>{

    if(isChecked === true){

        setvalue({...allvalue,typeEmplayee : [...allvalue.typeEmplayee,value]});
    }
    else{

        setvalue({...allvalue,typeEmplayee : allvalue.typeEmplayee.filter(each => each !== value)})
    }

}

// radio button function

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





</div>






</div>

<div className="filter-cont">

<h4>Type of Employment</h4>


{/* send a props for Filter componant  send a (data)*/ }

<Filter usergetData ={randerAllData} radioRander ={randerRadio}></Filter>

</div>

<ul className="dislpay-job">
    
    {/* send a props for displayNewJob Compoannt */}
  
    {

        allvalue.alljob.map(each=>( <DisplayNewJob userList ={each} key={each.id}/>))
    }
</ul>





</div>

<Footer/>

    </div>
    )
    
}
export default Jobs;