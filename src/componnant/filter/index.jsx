import './index.css';

const userEmplyee = [

    {
        label : "Full Time",
        job : "FULLTIME"
    },

    
    {
        label : "Part Time",
        job : "PARTTIME"
    },

    {
        label :"Freelance",
        job : "FREELANCE"
    },

    {
        label :"Internship",
        job : "INTERNSHIP"
    }

]



const userSallry =[

    {
        sallryId:"1000000",
        label :"10 LPA And Above"
    },

    {
        sallryId:"2000000",
        label :"20 LPA And Above"
    },

    {
        sallryId:"3000000",
        label :"30 LPA And Above"
    },


    {
        sallryId:"4000000",
        label :"40 LPA And Above"
    }
]





const Filter = (props)=>{

const{usergetData}=props;

const{radioRander}=props;






    const randreAllUser =()=>{

        const CheckboxEl =(e)=>{

            usergetData(e.target.value,e.target.checked);
        }

        return (

            
            <ul className='filter-cont-filter'>
            {

userEmplyee.map((each)=>(
<li>

<input type="checkbox" value={each.job} id={each.job} onChange={CheckboxEl}/>

    <label htmlFor={each.job}>{each.label}</label>
    

    </li>

))
            
            }
            </ul>

        )


    }


    const randersallary = ()=>{


        const RadioBoxEl = (e)=>{


           radioRander(e.target.value);
           

        }

        return(

        <ul className='filter-cont-filter'>

<h4>Salary Range</h4>
<br />

            {
                userSallry.map((range)=>(

                    <li>
                        <input type="radio" name="salary" id={range.sallryId} value={range.sallryId} onChange={RadioBoxEl} />
                        <label htmlFor={range.sallryId}>{range.label}</label>
                    </li>
                ))
            }
        </ul>
        )
    }
 

return(
<div>
{randreAllUser()}
<br /><br /><br />
{randersallary()}

</div>

);
    
}

export default Filter;