import { Link } from "react-router-dom";
import Header from "../header";
import Catagury from "../home2nd/inex";
import './index.css';
import AllJobsContainer from "../home3rd";

import PopulorCity from "../home4city";

import Footer from "../home5Footer";

const Home = ()=>{


    return(
<>

     
       <div className="main-home-cont">
        
<Header className ="nav-main-home"/>
      

<div className="home-dis">
<br /><br /><br /><br /><br /><br />
<h1>Find the perfect  
   <span> job for you</span></h1>
<br />

<p className="home-para">Search your career opportunity through 12,800 jobs</p>


<div className="search"> <input type="search" placeholder="Job Title"/>  

<select className="city">

<option value="All Location"selected>All Location</option>
    <option value="Delhi">Delhi</option>
    <option value="Banglore">Banglore</option>
    <option value="Nagpur">Nagpur</option>
    <option value="Jaipur">Jaipur</option>
</select>

<Link to ={"/findjob"}>

<img src="public/homeimg/btn.png" alt="" className="btn-searc-img"/>

</Link>
</div>
<br />
<br />


<div className="populer-search">

<h5>Popular Searches</h5>

<div className="serach-btn">


<Link to={"/findjob"}>

<button>web Developer</button>

</Link>


<Link to={"/findjob"}>

<button>Adminitration</button>

</Link>


<Link to={"/findjob"}>

<button>Developer</button>

</Link>




<Link to={"/findjob"}>

<button>Team Leader</button>

</Link>



<Link to={"/findjob"}>

<button>Manager</button>

</Link>





<Link to={"/findjob"}>

<button>Fullstack Developer</button>

</Link>



<Link to={"/findjob"}>

<button>Data analitics</button>

</Link>



<Link to={"/findjob"}>

<button>Front-end Developer</button>

</Link>



<Link to={"/findjob"}>

<button>Ai Ml</button>

</Link>




<Link to={"/findjob"}>

<button>DSA expert</button>

</Link>



</div>


</div>

</div>


<div className="home-bg">

<img src="public/homeimg/home-img.png" alt="" />

</div>

<br /><br />

<Catagury></Catagury>
<br /><br />
<AllJobsContainer/>
<br />
<br />
<br />

<PopulorCity/>


<br /><br />
<Footer></Footer>

       </div>
     

        </>
    )
}

export default Home;