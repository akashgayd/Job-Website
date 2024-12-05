import './index.css'
import Header from "../header";
import Footer from '../home5Footer';
const Blog = ()=>{


    return(

        <>
      <Header/>  



      <div className="br-tags">
        <br /><br /><br /><br /><br />
      </div>


      <div className='container main-blog-cont'>

<h1>Top Career Advice</h1>
<p className='blog-advice'>Browse the latest career advices</p>
<br />

<div className='carausal-blog'>


<div id="carouselExampleCaptions" className="carousel slide carausal-blog1" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active cr-itm">
      <img src="public/homeimg/job5.avif"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className='color'>How to find your first job out of college</h2>
        <p className='color'>It’s keyword-optimized, industry-specified, full of achievements, backed by data, and double-checked by an expert. If it’s none of these things, stop right here and learn how to get your resume...</p>
      </div>
    </div>
    <div className="carousel-item cr-itm">
      <img src="public/homeimg/job7.jpg"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className='color'>100 top interview questions  be prepared</h2>

        <p className='color'>Have realistic expectations Most designers will tell you that, as much as we all love to watch home design shows, their prevalence has done them a bit of a disservice....</p>
      </div>
    </div>
    <div className="carousel-item cr-itm">
      <img src="homeimg/job4.png"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className='color'>Resume samples</h2>
        <p className='color'>Your resume is perfect. It’s keyword-optimized, industry-specified, full of achievements, backed by data, and double-checked by an expert. If it’s none of these things, stop right here and learn how...</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



<br /><br /><br />


</div>

<div className='jobs-all-stu'>

<div className='jobs-student'>


<img src="homeimg/st1.jpg" alt="" />

<h4>How to find your first job out of college</h4>
<p>It’s keyword-optimized, industry-specified, full of achievements, backed by data, and double-checked by an expert. If it’s none of these things, stop right here and learn how to get your resume</p>


</div>




<div className='jobs-student'>


<img src="homeimg/st2.jpg" alt="" />

<h4>Mental health in the workplace</h4>
<p>But with more than 5 million jobs on Jobster, where do you even begin? Follow our tips and tricks below to help you find better, faster. Let the Perfect Job...</p>


</div>







<div className='jobs-student'>


<img src="homeimg/st3.webp" alt="" />

<h4>100 top interview questions – be prepared</h4>
<p>Have realistic expectations Most designers will tell you that, as much as we all love to watch home design shows, their prevalence has done them a bit of a disservice....</p>


</div>






<div className='jobs-student'>


<img src="homeimg/st4.avif" alt="" />

<h4>Resume samples</h4>
<p>Your resume is perfect. It’s keyword-optimized, industry-specified, full of achievements, backed by data, and double-checked by an expert. If it’s none of these things, stop right here and learn how...</p>


</div>





<div className='jobs-student'>


<img src="homeimg/st5.avif" alt="" />

<h4>10 awesome free career self assessments</h4>
<p>But with more than 5 million jobs on Jobster, where do you even begin? Follow our tips and tricks below to help you find better, faster. Let the Perfect Job......</p>


</div>




<div className='jobs-student'>


<img src="homeimg/st6.png" alt="" />

<h4>How to start looking for a new job</h4>
<p>Have realistic expectations Most designers will tell you that, as much as we all love to watch home design shows, their prevalence has done them a bit of a disservice.......</p>


</div>




</div>


<br />


      </div>
      <Footer></Footer>
      </>
      
    )
}
export default Blog;