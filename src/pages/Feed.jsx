import FeedTile from "../components/FeedTile"
import { db, firebase } from "../utils/utils";
import { doc, collection, query, where, getDocs, updateDoc, serverTimestamp, setDoc, collectionGroup } from "firebase/firestore";
import { async } from "@firebase/util";
import { useEffect, useState } from "react";



const Feed =()=>{

    const [feed, setFeed] = useState([]);

const getData = async (data) => {
    const colRef = collectionGroup(db, "posts");
    // const docRef = db.collection('posts').doc('xyz');

    let temp = []

    await getDocs(colRef).then((val)=>{
        
        val.docs.forEach((item)=>{
           temp.push(item.data())
   
           // updateFeed(feed, item.data())
           // console.log(feed.length)
         })
   
   
       })
   
    setFeed(temp)

   

  }

  

  useEffect(() => {
  

getData().then((_)=>{
    console.log(feed.length)
});


   }, [] );
   const listItems = feed.map((item) => <FeedTile name={item['name']} schoolName = {item['schoolName']} city={item['city']} desc= {item['description']} link={item['videoLink']} />);

    return (
        <>
       <center>
        {listItems}
       </center>
        </>
    )
    }
    
    export default Feed