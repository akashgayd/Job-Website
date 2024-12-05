import { Link } from "react-router-dom";
import './index.css';
const Footer =()=>{



    return(

        <div className="footer-cont">
<footer>
 
 <p>Let's Connect </p>

<div className="footer-mail">
 <input type="email" placeholder="Email For Job notificaton"/>

 <Link to={"/findjob"} ><button>Join</button></Link>
 
 </div>


</footer>

<div className="icon-footer"> <i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-docker"></i>
</div>

        </div>
    )
}

export default Footer;