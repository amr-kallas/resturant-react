import './food.css'
import food from './../../img/food.png'
function Food(){
    return(
    <div className="food">
        <div className="text">
            <h4>We make everything by hand with the best possible ingredients.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="other">
                <div className="row">
                <i className="fa-solid fa-check"></i>
                <span>Etiam sed dolor ac diam volutpat.</span>
                </div>
                <div className="row">
                <i className="fa-solid fa-check"></i>
                <span>Erat volutpat aliquet imperdiet.</span>
                </div>
                <div className="row">
                <i className="fa-solid fa-check"></i>
                <span>purus a odio finibus bibendum.</span>
                </div>
            </div>
            <button className='btn-red'>Learn More</button>
        </div>
        <div className="img">
            <img src={food} alt="" />
        </div>
    </div>
    )
}
export default Food;