
import "../styles/Feed.css";
import send from '../images/send.svg'
import downloadIcon from '../images/download.svg'
import heart from '../images/heart.svg'
import { RWebShare } from "react-web-share";
import React from 'react'
import { saveAs } from 'file-saver'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ReactPlayer from 'react-player'
import { async } from "@firebase/util";

const FeedTile = (props) => {
  console.log("https://firebasestorage.googleapis.com/v0/b/atl-sharing-zone.appspot.com/o/"+props.docname + 1 + ".jpg?alt=media")

  const download = async () => {

    for (let i = 0; i < props.imglength; i++) {
     document.getElementById("image1").click();
    }
 
    
 
  };



  var title = "ATL Code: " + props.atlcode + "; " +props.city + ", " + props.schoolState;
var desig = props.designation;
    const colors = ["#f8cdf2", "#cde6f8", "#cdf8d4", "#f8cdcd"]
  return (
    <>
      <div className="feedtilebody" title={title} style={{"backgroundColor": desig=="Student"?  colors[0]: desig=="Teacher"?colors[1]:colors[2]}}>
       <div className="tileheader">
        <div className="pfp"></div>
        <div className="namedes">
            <p className="name">{props.name}</p>
            <p className="designation">{props.schoolName + ", " + props.city}</p>
        </div>
       </div>
       <p className="p" style={{"marginBottom": "-1rem"}}><b>{props.postTitle}</b></p>
       <p className="p">{props.desc}</p>
      
       <div className="vidsimages">
        <Carousel axis="horizontal"  showStatus={false}> 
       {props.link!=null?<ReactPlayer url={props.link} height="10rem" width="100%" controls="true" />: <div></div>}
    {
  
  props.imglength>0?  [...Array(props.imglength)].map((e, i) => 
  <a href={"https://firebasestorage.googleapis.com/v0/b/atl-sharing-zone.appspot.com/o/"+props.docname + i + ".jpg?alt=media"} id={"image"+i}>
    <img src={"https://firebasestorage.googleapis.com/v0/b/atl-sharing-zone.appspot.com/o/"+props.docname + i + ".jpg?alt=media"} style={{"width": "15rem", "maxHeight": "10rem", "maxWidth": "15rem"}} alt=""/>
  </a>
  ):
   <p></p>
  }</Carousel>
       </div>
       <div className="iconsdiv">
       {/* <img src={heart} alt="" /> */}
       
        <img src={downloadIcon} alt=""  onClick={()=>{download()}} style={{"cursor": "pointer"}}/>
        <RWebShare
        data={{
          text: "Check out this amazing post by " + props.name + "\n",
          url: "https://atl-sharing-zone.web.app/view?"+props.docname,
          title: "ATL Showcase",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <img src={send} alt="icon" />
      </RWebShare>
       </div>

      </div>


    </>
  );
};

export default FeedTile;
