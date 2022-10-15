import aimlogo from "../images/aimlogo.png";
import "../styles/Upload.css";
import { useNavigate } from "react-router-dom";
import arrow from "../images/arrow.svg";
import { useState } from "react";
import { db } from "../utils/utils";
import { doc, setDoc } from "firebase/firestore";
// import { async } from "@firebase/util";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const Upload = () => {

  const storage = getStorage();
  const [docname, setDocName]=useState(null)
  const [uploadEvent, setUploadEvent] = useState(null)
  
// const imgRef = ref(storage);
const imageInputChanged=(e)=>{

  if(e.target.files.length > 4){
    alert("Upload 4 or lesser images")
  }
  else{
    setUploadEvent(e)
    for (let index = 0; index < 4; index++) {
      document.getElementById("img"+(index+1)).src = ""
    }

    for (let index = 0; index < e.target.files.length; index++) {
      document.getElementById("img"+(index+1)).src = URL.createObjectURL(e.target.files[index])
    }
  }




  
}


const uploadImage=(e, docstring)=>{
  console.log(e.target.files)

  for (let index = 0; index < e.target.files.length; index++) {
    var fileVal = e.target.files[index]
  uploadBytes(ref(storage, atlCode + docstring+index + ".jpg"), fileVal).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
  }

}

  const Push = async (data) => {
    uploadImage(uploadEvent, docname)
    const docRef = doc(db, 'posts', atlCode+docname);
    await setDoc(docRef, uploadInfo).then((val)=>{
      console.log(val)
    })

  }

  var uploadInfo = {}
  const [page, setPage] = useState(0);
  const [name, setName] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  const [atlCode, setATLCode] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setStateIN] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [videoLink, setVideoLink] = useState(null);
  const [anythingElse, setAnythingElse] = useState(null);
  const [designation, setDesignation] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      {page === 0 ? (
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
            <button
              onClick={(e) => {
                setPage(1);
              }}
              className="start-btn"
            >
              Start Now
            </button>
            <br />
            <img src={arrow} alt="" className="arrow" />
          </div>
        </>
      ) : page === 1 ? (
        <>
          <div className="upload-full upload2">
            <img src={aimlogo} className="aimlogo" alt="" />

            <center>
              <div className="content">
                <input type="text" className="input" placeholder="Your Name" maxLength={50}
              onInput={(e) => {
               setName(e.target.value);
              }} />{" "}
                <br /> <br />
                <input
                  type="text"
                  className="input"
                  placeholder="Name of School"
                  maxLength={100}
                  onInput={(e) => {
                    setSchoolName(e.target.value);
                   }} 
                />
                <br /> <br />
                <div className="radioparent ">
                  <label htmlFor="designation">Are you a?</label> <br />
                  <br />
                  <div className="radio1">
                    <input type="radio" value="Student" name="designation" onChange={(e) => {
                setDesignation("Student");
              }}/>{" "}
                    Student
                    <input
                      type="radio"
                      value="Teacher"
                      name="designation"
                      onChange={(e) => {
                        setDesignation("Teacher");
                      }}
                    />{" "}
                    Teacher
                    <input
                      type="radio"
                      value="Mentor"
                      name="designation"
                      onChange={(e) => {
                        setDesignation("Mentor");
                      }}
                    />{" "}
                    Mentor
                  </div>
                </div>
                <br />
                <div className="radioparent">
                  <label htmlFor="content">What are you sharing?</label> <br />
                  <br />
                  <div className="radio2">
                    <input type="radio" value="project" name="content" onChange={(e) => {
                       setSelectedType("Project")
                      }} />{" "}
                    Project
                    <input
                      type="radio"
                      value="experience"
                      name="content"
                      onChange={(e) => {
                        setSelectedType("Experience")
                       }}
                    />{" "}
                    Experience
                    <br />
                    <input type="radio" value="lab" name="content" 
                    onChange={(e) => {
                      setSelectedType("ATL Showcase")
                     }}
                    /> Just
                    showcasing my ATL Lab
                  </div>
                </div>
                <br />
                <br />
                <br />
                <input type="text" className="input" placeholder="ATL Code"  maxLength={20} onChange={(e) => {
                      setATLCode(e.target.value)
                     }}/>
                <br />
                <br />
                <input type="text" className="input cityvillage" placeholder="City/Village" 
              onInput={(e) => {
               setCity(e.target.value);
              }} />
                <select name="state" id="state" className="form-control" onChange={(e) => {
                      
                        setStateIN(e.target.value)
                       }}>
                  <option value="" disabled selected>
                    State
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Ladakh">Ladakh</option>
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
              <button
                onClick={(e) => {
                  setPage(2);
                  // console.log(selectedType)
                }}
                className="start-btn"
              >
                Next
              </button>
              <br />
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="upload-full upload2">
            <img src={aimlogo} className="aimlogo" alt="" />

            <center>
              <div className="content">
                <div className="typeofupload">
                  <p>{selectedType.toString().toUpperCase()}</p>
                </div>
                <br />
                <br />
                <input type="text" className="input" placeholder="Title" maxLength={100} onChange={(e) => {
                      
                      setTitle(e.target.value)
                     }} />{" "}
                <br /> <br />
                <textarea
                  rows="5"
                  cols="60"
                  name="description"
                  className="input expanded"
                  maxLength={250}
                  placeholder="Few lines about your experience that will inspire others"
                  onChange={(e) => {
                      
                    setDescription(e.target.value)
                   }}
                ></textarea>
                <br />
                <br />
                {
          <div className="previewparent">
                <img src="" id="img1" alt="" className="previewimages"/>
              <img src="" id="img2" alt="" className="previewimages"/>
              <img src="" id="img3" alt="" className="previewimages"/>
              <img src="" id="img4" alt="" className="previewimages"/>
          </div>
                }
               
          
                <img src="" id="preview" alt="" />
                <input multiple
                // yahan check karna hai
                  type="file"
                  id="hehe"
                  accept=".jpg, .png, .jpeg, .webp"
                  className="imginput"
                  onChange={(e) => {
                      imageInputChanged(e)

                   }}
                />

                <button
                  onClick={() => {
                    document.getElementById("hehe").click();
                  }}
                  className="upload-images"
                >
                  Add Images
                </button>
               
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="Video link if any"
                  // defaultValue=""
                  maxLength={200}
                  value={videoLink}
                  onChange={(d) => {
                      
                    setVideoLink(d.target.value)
                   }}
                />
                <br /> <br />
                <textarea
                  rows="5"
                  cols="60"
                  name="anythingelse"
                  maxLength={250}
                  className="input expanded"
                  placeholder="Anything else you want to share?"
                  onChange={(e) => {
                      
                    setAnythingElse(e.target.value)
                   }}
                ></textarea>
                <br />
                <br />
              </div>
            </center>
            <div>
              <button
                onClick={(e) => {
var x = (Math.random() + 1).toString(36).substring(4)
                  setDocName(x)
                  
                  // navigate("/");
                  uploadInfo = {
                    "name": name,
                    "schoolName": schoolName,
                    "designation": designation,
                    "sharingContent": selectedType,
                    "ATLCode": atlCode,
                    "city": city,
                    "state": state,
                    "title": title,
                    "description": description,
                    "videoLink": videoLink,
                    "anythingElse": anythingElse,
                    "imglength": uploadEvent.target.files.length,
                    "docname": atlCode + docname,
                    "timestamp": Math.floor(Date.now() / 1000)
                  }
                  console.log(uploadInfo)
                  Push(uploadInfo).then((_)=>{
                    navigate('/')
                  })
                }}
                className="start-btn"
              >
                Submit
              </button>
              <br />
              <img src={arrow} alt="" className="arrow" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Upload;
