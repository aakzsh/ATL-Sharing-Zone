
import "../styles/Feed.css";
import send from '../images/send.svg'
import downloadIcon from '../images/download.svg'
import heart from '../images/heart.svg'
import React from 'react'
import { saveAs } from 'file-saver'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ReactPlayer from 'react-player'

const FeedTile = (props) => {
  console.log("https://firebasestorage.googleapis.com/v0/b/atl-sharing-zone.appspot.com/o/"+props.docname + 1 + ".jpg?alt=media")

  const download = () => {

    // for (let i = 0; i < props.imglength; i++) {
    
      var element = document.createElement("a");
      var file = new Blob(
        [
          "https://firebasestorage.googleapis.com/v0/b/atl-sharing-zone.appspot.com/o/"+props.docname + 1 + ".jpg?alt=media"
        ],
        { type: "image/*" }
      );
      element.href = URL.createObjectURL(file);
      element.download = props.docname + 1 + ".jpg";
      element.click();
    // }
 
    
 
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
  
  props.imglength>0?  [...Array(props.imglength)].map((e, i) => <img src={"https://firebasestorage.googleapis.com/v0/b/atl-sharing-zone.appspot.com/o/"+props.docname + i + ".jpg?alt=media"} style={{"width": "15rem", "maxHeight": "10rem", "maxWidth": "15rem"}} alt=""/>):
   <p></p>
  }</Carousel>
       </div>
       <div className="iconsdiv">
       {/* <img src={heart} alt="" /> */}
       <img src={send} alt=""  onClick={()=>{navigator.clipboard.writeText("https://atl-sharing-zone.web.app/view?"+props.docname);
      alert("The shareable link has been copied to clipboard!")
      }}/>
        <img src={downloadIcon} alt=""  onClick={()=>{download()}} style={{"cursor": "pointer"}}/>
       </div>
      </div>


    </>
  );
};

export default FeedTile;
