
import { Link } from 'react-router-dom';
import './index.css';


//  give to the props for findjob componant    props(data) as name is userList

const DisplayNewJob = (props)=>{
const{userList} = props;



return(
<>

    <div className='display-all-job'>

<div className='comp-img'>
<img src={userList.company_logo_url} alt="" />

<h4>{userList.title}</h4>

<p> <i class="fa-solid fa-earth-asia"></i> {userList.location}</p> 

<p> <i class="fa-solid fa-check"></i> {userList.employment_type}</p>

<p className='aunal-salary'>{userList.package_per_annum}</p>


{/* this button can click the user user will see more details about this job */}

<Link to={`${userList.id}`}>
<button className='apppy-button-disply'>Apply</button>

</Link>





<br />
</div>







    </div>
    </>
)


}
export default DisplayNewJob;