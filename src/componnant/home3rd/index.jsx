
import './index.css';
import { Link } from 'react-router-dom';


const AllJobsContainer =()=>{



    return(

        <div className='all-job-cont-home3 container'>

<div className='all-jobs-home3-discription'>

<h1>See right away whether candidates are the right fit</h1>
<br />

<p>We help candidates know whether they re qualified for a job  and allow you to see their match potential  giving you a better pool of qualified candidates to choose from.</p>

<br />

<Link to={"/findjob"}>

<button>All Job Offers  </button>
</Link>


</div>

<div className='interwiew-cont-img'>

<img src="public/homeimg/interwiew.avif" alt="" />

</div>

        </div>
    )


}

export default AllJobsContainer;