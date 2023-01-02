import './header.css'
import headImg from'../../img/headImg.jpg' 
function Header(){
    return(
        <div className="header">
            {/* <img src={headImg} alt="" /> */}
            <div className="text">
            <h4>Good food <br /> choices are <br /> good <br /> investments.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Etiam et purus a odio finibus <br /> bibendum amet leo.</p>
            <div className="btns">
                <button className='order'>Order Now</button>
                <button className='more'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Header;