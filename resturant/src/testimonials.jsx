import person from './../img/person.jpg'
import './testimonials.css';
function Test(){
    // window.onresize=function(){
    //     console.log(document.body.offsetWidth)
    //     if(document.body.offsetWidth<=1120){
    //         console.log("hello")
    //         boxess.style.width=`${3340-document.body.offsetWidth }px`;
    //         console.log("hello")
    //     }
    // }
    const one=document.querySelector(".one");
    const two=document.querySelector(".two");
    const three=document.querySelector(".three");
    const bullets=document.querySelectorAll('.bullets span');
    const boxess=document.querySelector(".boxess")
    bullets.forEach((bullet)=>{
        bullet.addEventListener("click",()=>{
            for(let i=0;i<bullets.length;i++){
                bullets[i].classList.remove('active')
            }
            bullet.classList.add('active')
        })
    })
    return(
        <div className="test">
            <h3>Testimonials</h3>
            <div className="boxess">
                <div className="box one">
                    <img src={person} alt="" />
                    <p>"Far far away, behind the word mountains, far from the countries vokalia and Consonantia, there live the blind texts. "</p>
                    <span>Maccy Doe - Front End</span>
                </div>
                <div className="box two">
                    <img src={person} alt="" />
                    <p>"Far far away, behind the word mountains, far from the countries vokalia and Consonantia, there live the blind texts. "</p>
                    <span>Amr Kallas - Front End</span>
                </div>
                <div className="box three">
                    <img src={person} alt="" />
                    <p>"Far far away, behind the word mountains, far from the countries vokalia and Consonantia, there live the blind texts. "</p>
                    <span>Jhonathan Dow - UI & UX Designer</span>
                </div>
            </div>
            <div className="bullets">
                <span className='active' onClick={()=>{
                    one.style.display="block";
                    two.style.display="none";
                    three.style.display="none";

                }}></span>
                <span onClick={()=>{
                    two.style.display="block";
                    three.style.display="none";
                    one.style.display="none";
                }}></span>
                <span onClick={()=>{
                    three.style.display="block";
                    two.style.display="none";
                    one.style.display="none";
                }}></span>
            </div>
        </div>
    )
}
export default Test;