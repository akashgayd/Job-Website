import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Cookies from 'js-cookie';
import Header from "../header";
import './index.css';
import Footer from "../home5Footer";

const JobDetails = ()=>{

const {id} = useParams();

const token = Cookies.get("jwtToken");


const[allvalue,setvalue] = useState({

    alljob:{},
   
    
})

const[newarray,setaaray] = useState({

    Skills:[]
})

const[newcomp,setcomp] = useState({

    lifeOfComp:{}
})

const[simjob,newjob] = useState({


    similerJob:[]

})


useEffect(()=>{


    const userDetailsAllData = async()=>{

        const api = `https://apis.ccbp.in/jobs/${id}`;

        const option = {

            method:"Get",

            headers:{

                Authorization:`Bearer ${token}`
            }


        }
        try {
            
            const response = await fetch(api,option);

            const data = await response.json();
         
            console.log(data);
            console.log(data);
             if(response.ok === true){

                setvalue({...allvalue,alljob:data.job_details});


                setaaray({...newarray,Skills:data.job_details.skills});

                setcomp({...newcomp,lifeOfComp:data.job_details.life_at_company});

               newjob({...simjob,similerJob:data.similar_jobs});
              
               
             }
             if(response.ok === true){

           
             }
        } 
        
        
        catch (error) {
            
            console.log("past code willbe exicuted");
        }
    }


    userDetailsAllData();


    

},[]);

const AlrtBtn = ()=>{

    alert("appled successfully");
}


return(
<>
    <Header/>
<div className="br-tags">
<br /><br /><br /><br /><br /><br /><br />
</div>

<div className="bg-contianer">
    <div className="jobdails-main-div container">

<img src={allvalue.alljob.company_logo_url} alt="" />

<div className="job-part-det">
    <p>{allvalue.alljob.title}  ({allvalue.alljob.employment_type})</p>
    <p>{allvalue.alljob.location}</p>
    <p>{allvalue.alljob.package_per_annum}</p>

    <hr />
    

</div>
<div className="job-discription">

<p>{allvalue.alljob.job_description}</p>

</div>


<br />


<div className="jobs-skillls">
<h2 className="skill">Skills</h2>
<br />

<br />


{
    newarray.Skills.map(each=>(
<li key={each.id} className="skills-all-job">

<span>
    

        <img src={each.image_url} alt="" />
        <p>{each.name}</p>
        
        </span>
        </li>
    ))
}    


</div>
<br />


<div className="life-of-comp">

<h5>Life of Company</h5>

<span>
<p>{newcomp.lifeOfComp.description}</p>

<img src={newcomp.lifeOfComp.image_url} alt="" />
</span>

<button className="confirm-apply" onClick={AlrtBtn}>Apply</button>
</div>


    </div>


<div className="similer-job">
<br />

    <h4 style={{color:"white", fontFamily:"fantasy"}}>Similar Jobs</h4>
<br />


<ul>
    {
        simjob.similerJob.map(each =>(

            <li key={each.id} className="similier-job">

                <img src={each.company_logo_url} alt="" /> <i>{each.title}</i>

                <h5>Discription</h5>
                <p>{each.job_description}</p>

                <span className="main-span"> <span><i class="fa-solid fa-location-dot"></i> {each.location}</span>  
                
                <span><i class="fa-solid fa-suitcase"></i> {each.employment_type
                }</span></span>

         

             

            </li>
        ) )
    }
</ul>
</div>
    
    <br />

    <Footer></Footer>
    </div>
    </>
   
)

}
export default JobDetails;