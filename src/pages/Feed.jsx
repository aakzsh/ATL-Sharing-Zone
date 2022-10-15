import FeedTile from "../components/FeedTile"
import { db } from "../utils/utils";
import {  getDocs,  collectionGroup, orderBy } from "firebase/firestore";
// import { async } from "@firebase/util";
import { useEffect, useState } from "react";



const Feed =()=>{

    const [feed, setFeed] = useState([]);

const getData = async (data) => {
    const colRef = collectionGroup(db, "posts");
    let temp = []

    await getDocs(colRef). then((val)=>{
        
        val.docs.forEach((item)=>{
           temp.push(item.data())
         })
   
   
       })
    
       temp.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);


   
    setFeed(temp)

   

  }

  

  useEffect(() => {
  

getData().then((_)=>{
    console.log(feed.length)
});


   }, [] );
   const listItems = feed.map((item) => <FeedTile name={item['name']} postTitle={item['title']} schoolName = {item['schoolName']} city={item['city']} schoolState={item['state']} desc= {item['description']} link={item['videoLink']} imglength={item['imglength']} atlcode = {item['ATLCode']} docname= {item['docname']} designation={item['designation']}/>);

    return (
        <>
       <center>
        {listItems}
       </center>
        </>
    )
    }
    
    export default Feed