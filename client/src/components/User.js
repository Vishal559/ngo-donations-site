import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Feature from './feature.js'
import Activity from './Activity.js'

function User(){
    return(
    <div>

  <div class="container-fluid">
  <img src="//placehold.it/100"  alt="Organization " class="avatar top-img" />
   <div className="top">
     <div class="text-center top-content">
         <label for="file-upload" class="custom-file-upload">+</label>
          <input id="file-upload" type="file"/>  <br />
          <input placeholder=" Name of Organization " class="top-input" /> 
          <i class="fa fa-pencil" aria-hidden="true"></i>
          <br/>
         <input placeholder=" Other Info " class="top-input" /> 
         <i class="fa fa-pencil" aria-hidden="true"></i>    
     </div>
   </div>
 </div>
 <hr/>
  { /* Activity SECTION */}

 <div className="middle">  
  <div class="container">
    <div class= "row">
       <div class="col-md-3">
          <div className="boxs ">  
          <div className=" box-side">
          <div className="inside">   
          <p>" Around 200 people have joined our organization.  Hoping to expand help as much we can"</p>   
            </div>   
            </div>
            </div>
     </div>

         <div class="col-md-6 ">
             <div className="boxs boxs-center"> 
                  <h1  className="activities-head" >Activities</h1>
                  <div className="activities">
                     <Activity img="https://bootdey.com/img/Content/avatar/avatar1.png"
                           description="First Activity" />  
                     <br/>
                      <Activity img="https://bootdey.com/img/Content/avatar/avatar1.png"
                            description="Second Activity" />
                      <br/>
                      <Activity img="https://bootdey.com/img/Content/avatar/avatar1.png"
                            description="Third Activity" />
                   </div>
             </div>
         </div>
         <div class="col-md-3 ">
             <div className="boxs ">
               <div className="box-side"> 
                  <div className="inside"> 
                    <p>"Aiming to reach Helping hands to the ones in need."</p>  
                   </div>   
                </div>
               </div>
          </div>
    </div>
 </div>
 </div>
  <hr />
 {    /* CARDS SECTION END */}


 { /* Featured */}

 <div className="bottom"> 
  <div class="container">
     <div class="row">
            <div class="col-md-6     bottom-item">
             <h4>Featured Photos : </h4>
               <div class="feature">
                   <div class="profile-page-block-outer clearfix">
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar2.png" />
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar3.png" />                         
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar4.png" />
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar5.png" />
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar6.png" />
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar7.png" />
                    <Feature img="https://bootdey.com/img/Content/avatar/avatar5.png" />                 
                     </div>
                </div>
            </div>
            <div class="col-md-6   bottom-item">
              <h4> Reviews </h4>
                 <div className="reviews">
                   <p> " One of the best NGOs we can look for." </p>
                 </div>
             </div>
       </div>
  </div>
 </div>

  </div>
);}


export default User;
