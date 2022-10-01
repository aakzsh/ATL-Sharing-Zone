
import "../styles/Feed.css";
import send from '../images/send.svg'
import download from '../images/download.svg'
import heart from '../images/heart.svg'
import React from 'react'
import ReactPlayer from 'react-player'

const FeedTile = (props) => {
  const colors = ["#f8cdf2", "#cde6f8", "#cdf8d4", "#f8cdcd"]
  return (
    <>
      <div className="feedtilebody" style={{"backgroundColor": colors[Math.floor(Math.random()*colors.length)]}}>
       <div className="tileheader">
        <div className="pfp"></div>
        <div className="namedes">
            <p className="name">{props.name}</p>
            <p className="designation">{props.schoolName + ", " + props.city}</p>
        </div>
       </div>
       <p className="p">{props.desc}</p>
      
       <div className="vidsimages">
       <ReactPlayer url={props.link} height="100%" width="100%" />
    {
  
  props.imglength>0?  [...Array(props.imglength)].map((e, i) => <img src={"https://firebasestorage.googleapis.com/v0/b/atl-sharing-zone.appspot.com/o/"+props.docname + i + ".jpg?alt=media"} style={{"width": "15rem"}}/>):
   <p></p>
  }
       </div>
       <div className="iconsdiv">
       <img src={heart} alt="" />
       <img src={send} alt="" />
        <img src={download} alt="" />
       </div>
      </div>
    </>
  );
};

export default FeedTile;
