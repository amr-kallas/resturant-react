import './footer.css'
function Footer(){
    return(
    <div className="footer">
        <ul className='data'>
            <li>Register</li>
            <li>Fourme</li>
            <li>Affiliate</li>
            <li>FAQ</li>
        </ul>
        <ul className='icons'>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
            <li><i className="fa-brands fa-github"></i></li>
            <li><i className="fa-brands fa-youtube"></i></li>
        </ul>
        <p>© 2021. Foodera. All rights reserved.</p>
    </div>
    )
}
export default Footer