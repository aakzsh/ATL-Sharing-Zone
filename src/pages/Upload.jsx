import aimlogo from "../images/aimlogo.png";
import "../styles/Upload.css";
import { useNavigate } from "react-router-dom";
import arrow from "../images/arrow.svg";
import Upload1 from "../components/Upload1";
import Upload3 from "../components/Upload3";
import Upload2 from "../components/Upload2";
import { useState } from "react";


const Upload = () => {
    const [page, setPage] = useState(0);
    // console.log(this.props.match)
  const navigate = useNavigate();
  return (
    <>
     { 
     page==0?
     <>
     <div className="upload-full">
       <img src={aimlogo} className="aimlogo" alt="" />
       <br />
       <center>
         {" "}
         <p className="subtitle">
           Share your project/experience with the community
         </p>
       </center>
       <button onClick={(e) => {setPage(1)}} className="start-btn">
         Start Now
       </button>
       <br />
       <img src={arrow} alt="" className="arrow" />
     </div>
   </>
     :page==1?
     <>
     <div className='upload-full upload2'>
     <img src={aimlogo} className="aimlogo" alt="" />
   
    <center>
      <div className="content">
        <input type="text" className="input" placeholder="Your Name" /> <br /> <br />
        <input type="text" className="input"  placeholder="Name of School" />
        <br /> <br />
        <div className="radioparent ">
          <label htmlFor="gender">Are you a?</label> <br />
       <div className="radio1">
       <input type="radio" value="Student" name="gender" /> Student
        <input type="radio" value="Teacher" name="gender" /> Teacher
        <input type="radio" value="Mentor" name="gender" /> Mentor
       </div>
      </div><br />

        <div className="radioparent">
        <label htmlFor="gender">What are you sharing?</label> <br />
        <input type="radio" value="project" name="content" /> Project
        <input type="radio" value="experience" name="content" /> Experience
        <input type="radio" value="lab" name="content" /> Just showcasing my ATL Lab
      </div><br />

        <input type="text" className="input"  placeholder="ATL Code" />
        <br />
        <br />

        <select name="state" id="state" class="form-control" >
        <option value="" disabled selected>City/Village</option>
<option value="city">City</option>
<option value="village">Village</option>
</select>



        <select name="state" id="state" class="form-control" >
        <option value="" disabled selected>State</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
      </div>
      </center>
     <div>
     <button onClick={e => {setPage(2)}} className="start-btn">Next</button>
     <br />
     <img src={arrow} alt="" className='arrow' />
     </div>
     </div>
     </>
     :
     <>
     <div className='upload-full upload2'>
     <img src={aimlogo} className="aimlogo" alt="" />
   
    <center>
      <div className="content">
        <div className="typeofupload">
          <p>PROJECT</p>
        </div>
        <br />
        <br />
        <input type="text" className="input" placeholder="Title" /> <br /> <br />
        <textarea rows = "5" cols = "60" name = "description" className="input expanded" placeholder="Few lines about your experience that will inspire others"></textarea>
<br /><br />
        <input type="file" id="hehe" accept=".jpg, .png, .jpeg, .webp" className="imginput"  />
       
        <button onClick={()=>{document.getElementById('hehe').click()}} className="upload-images">Add Images</button>
<br />
<br />
        <input type="text" className="input"  placeholder="Video link if any" />
        <br /> <br />
       
        <textarea rows = "5" cols = "60" name = "description" className="input expanded" placeholder="Anything else you want to share?"></textarea>

        <br />
        <br />

      

      </div>
      </center>
     <div>
     <button onClick={e => {navigate('/')}} className="start-btn">Submit</button>
     <br />
     <img src={arrow} alt="" className='arrow' />
     </div>
     </div>
     </>
  }
    </>
  );
};

export default Upload;
