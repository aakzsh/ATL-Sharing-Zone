
import aimlogo from '../images/aimlogo.png'
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

const Home =()=>{
    const navigate = useNavigate()
return (
    <>
    <img src={aimlogo} alt=""  className='logo'/>
<div className='page-content'>
<center>
<div className='txt-parent'>
<p className='title'>ATL SHARING ZONE</p>
    <p className='subtitle'>A platform where teachers and students can share their motivational stories and also get inspired!</p>
</div>
</center>
    <div className='btn-parent'>
        <button  onClick={e => navigate('/upload')}>Share Your Story</button>
        <button  onClick={e => navigate('/feed')}>See Others' Stories</button>
    </div>
</div>
    </>
)
}

export default Home