import logo from './../../img/logo.png'
import './../../css/Nav.css'
function Nav(){
    return(
    <div className="nav">
        <div className="img">
            <img src={logo} alt="" />
        </div>
        <i className="fa-solid fa-bars" onClick={()=>{
            const ele=document.querySelector(".ul");
            ele.classList.toggle("bar")
        }}></i>
        <ul className='ul'>
            <li>Home</li>
            <li>About us</li>
            <li>Explore Foods</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li className='number'>1800 789 123</li>
        </ul>
    </div>
    )
}
export default Nav;