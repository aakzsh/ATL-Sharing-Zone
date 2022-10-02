import FeedTile from "../components/FeedTile"
import { db } from "../utils/utils";
import {  getDocs,  collectionGroup } from "firebase/firestore";
// import { async } from "@firebase/util";
import { useEffect, useState } from "react";



const Feed =()=>{

    const [feed, setFeed] = useState([]);

const getData = async (data) => {
    const colRef = collectionGroup(db, "posts");
    let temp = []

    await getDocs(colRef).then((val)=>{
        
        val.docs.forEach((item)=>{
           temp.push(item.data())
         })
   
   
       })
   
    setFeed(temp)

   

  }

  

  useEffect(() => {
  

getData().then((_)=>{
    console.log(feed.length)
});


   }, [] );
   const listItems = feed.map((item) => <FeedTile name={item['name']} schoolName = {item['schoolName']} city={item['city']} desc= {item['description']} link={item['videoLink']} imglength={item['imglength']} docname= {item['docname']}/>);

    return (
        <>
       <center>
        {listItems}
       </center>
        </>
    )
    }
    
    export default Feed