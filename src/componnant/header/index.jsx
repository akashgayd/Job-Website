
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import './index.css';

const Header = ()=>{

  

    const navigate = useNavigate();

     const LogOutBtn = ()=>{

        Cookies.remove("jwtToken");

        navigate("/login")
     }



     return(



        <>


<div className="mobaile-mav">




<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={"/"} className="navbar-brand font-color" href="#">Jobstar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to={"/"} className="nav-link active" href="#">Home <span className="sr-only">(current)</span></Link>
      <Link to={"/findjob"} className="nav-link active" href="#">Find Job</Link>
      <Link to={"/itJobs"} className="nav-link active" href="#">It Jobs</Link>
      <Link to={"/blog"} className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Blog</Link>
    </div>
  </div>
</nav>


</div>











       <nav className="my-nav-bar">

<ul className="nav-ul">

    <h3>JobStar</h3>

    <li>
        <Link to ={"/"} className="link">Home</Link>
    </li>

    <li>
        <Link to ={"/findjob"} className="link">Find Jobs</Link>
    </li>

    <li>
        <Link to ={"/itJobs"} className="link">It jobs</Link>
    </li>

    <li>
        <Link to ={"/blog"} className="link">Blog</Link>
    </li>
</ul>

<div className="nav-btn">

    <button onClick={LogOutBtn}>Logout</button>
</div>

       </nav>

       </>
     )


}

export default Header;