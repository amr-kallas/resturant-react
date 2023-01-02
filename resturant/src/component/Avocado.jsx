import './avocado.css';
import avocado from './../../img/avocado.png'
function Avocado(){
    return(
    <div className="avocado">
        <div className="img">
            <img src={avocado} alt="" />
        </div>
        <div className="text">
            <h4>We pride ourselves on making real food from the best ingredients.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <button>Learn More</button>
        </div>
    </div>
    )
}
export default Avocado;