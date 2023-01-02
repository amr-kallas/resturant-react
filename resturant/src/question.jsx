import './questions.css';
function Question(){
    return(
        <>
        <div className="container">
            <div className="con-ques">
            <h4>Frequently Asked Questions</h4>
            <div className="questions">
                <div className="question">
                    <p>~ Is Foodera Bread really baked fresh each day?</p>
                    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>
                </div>
                <div className="question">
                    <p>~ Do you bake breads containing animal fats or products?</p>
                    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>
                </div>
                <div className="question">
                    <p>~ Can I order your products online?</p>
                    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>
                </div>
                <div className="question">
                    <p>~ When are you opening a shop near me?</p>
                    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</span>
                </div>
            </div>
        </div>
        </div>
        <div className="pizza">
        <div className="text">
            <h4>Baked fresh daily by bakers with passion.</h4>
            <button className='btn-red pizaa-btn'>Learn More</button>
        </div>
    </div>
    <div className="hurry">
        <h4>Hurry up! Subscribe our newsletter
and get 25% Off</h4>
        <p>Limited time offer for this month. No credit card required.</p>
        <form action="">
            <input type="text" placeholder='Email Address Here'/>
            <button className="btn-red subscribe">Subscribe</button>
        </form>
    </div>
    </>
    )
}

export default Question;