import food1 from './../img/food1.jpg'
import food2 from './../img/food2.jpg'
import food3 from './../img/food3.jpg'
import './foodCart.css'
function FoodCart(){

    return(
        <div className="container">
            <div className="boxes">
            <div className="cart">
                <div className="img">
                    <img src={food1} alt="" />
                </div>
                <div className="details">
                    <h5>Rainbow Vegetable Sandwich</h5>
                    <p>Time: 15 - 20 Minutes | Serves: 1</p>
                </div>
                <div className="price">
                    <p>$10.50 <span>$11.70</span></p>
                </div>
                <hr />
                <button className='btn'>Order Now</button>
            </div>
            <div className="cart">
                <div className="img">
                    <img src={food2} alt="" />
                </div>
                <div className="details">
                    <h5>Vegetarian Burger</h5>
                    <p>Time: 30 - 45 Minutes | Serves: 1</p>
                </div>
                <div className="price">
                    <p>$9.20 <span>$10.50</span></p>
                </div>
                <hr />
                <button className='btn'>Order Now</button>
            </div>
            <div className="cart">
                <div className="img">
                    <img src={food3} alt="" />
                </div>
                <div className="details">
                    <h5>Raspberry Stuffed French Toast</h5>
                    <p>Time: 10 - 15 Minutes | Serves: 1</p>
                </div>
                <div className="price">
                    <p>$12.50 <span>$13.20</span></p>
                </div>
                <hr />
                <button className='btn'>Order Now</button>
            </div>
            </div>
        </div>
    )
}
export default FoodCart;