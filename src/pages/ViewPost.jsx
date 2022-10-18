
import aimlogo from '../images/aimlogo.png'
import '../styles/ViewPost.css'
import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { db, initialise } from '../utils/utils'
import FeedTile from '../components/FeedTile'
import { doc, getDoc } from 'firebase/firestore'

const ViewPost =()=>{
    const navigate = useNavigate()
    const queryString = window.location.search.split('?')[1];
    console.log(queryString);
    // var params = "222"
    const [feedPost, setFeedPost] = useState({});
    // useState()


    const getPost = () => {
        initialise()
        const docRef = doc(db, "posts", window.location.search.split('?')[1]);
        getDoc(docRef).then((value) => {
          if (value.exists()) {
            setFeedPost(value.data())
          }
          else {
            console.log("empty")
            alert("ran into some error")
          }
        });
    
      }

    useEffect(() => {
// uses
        getPost()
        
        
           }, [] );

  



return (
    <>
<center>
<div>
<img src={aimlogo} alt=""  className='logo'/>

<FeedTile name={feedPost['name']} postTitle={feedPost['title']} schoolName = {feedPost['schoolName']} city={feedPost['city']} schoolState={feedPost['state']} desc= {feedPost['description']} link={feedPost['videoLink']} imglength={feedPost['imglength']} atlcode = {feedPost['ATLCode']} docname= {feedPost['docname']} designation={feedPost['designation']}/>

<button onClick={()=>{navigate('/')}}>Navigate to Home</button>
</div>
</center>
    </>
)
}

export default ViewPost