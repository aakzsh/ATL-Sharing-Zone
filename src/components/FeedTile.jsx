
import "../styles/Feed.css";
import send from '../images/send.svg'
import download from '../images/download.svg'
import heart from '../images/heart.svg'

const FeedTile = () => {
  return (
    <>
      <div className="feedtilebody">
       <div className="tileheader">
        <div className="pfp"></div>
        <div className="namedes">
            <p className="name">Raghav bajaj</p>
            <p className="designation">Designation</p>
        </div>
       </div>
       <p className="p">I have built an amazing Line Follower Robot using Arduino in my ATL Lab</p>
      
       <div className="vidsimages"></div>
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
