import aimlogo from '../images/aimlogo.png'
import '../styles/Upload.css'
import { useNavigate } from 'react-router-dom'
import arrow from '../images/arrow.svg'
import { useState } from "react";

const Upload2 = ()=>{
    return (
        <>
        <div className='upload-full'>
        <img src={aimlogo} className="aimlogo" alt="" />
        <br />
       <center> <p className='subtitle'>upload2</p></center>
        <button onClick={e => {}} className="start-btn">Start Now</button>
        <br />
        <img src={arrow} alt="" className='arrow' />
        </div>
        </>
    )
    }
    
    export default Upload2