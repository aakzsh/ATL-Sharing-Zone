import FeedTile from "../components/FeedTile"




const Feed =()=>{

var feed = [2,2,2,2,2,2]
    return (
        <>
       <center>
       {feed.map(item => {
              return <FeedTile/>
            })}
       {/* <FeedTile/>*100 */}
       </center>
        </>
    )
    }
    
    export default Feed