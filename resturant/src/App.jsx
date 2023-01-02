import Cake from './Cake'
import Avocado from './component/Avocado'
import Food from './component/Food'
import Header from './component/header'
import Main from './component/Main'
import Nav from './component/Nav'
import FoodCart from './FoodCart'
import Footer from './Footer'
import Question from './question'
import Test from './testimonials'

function App() {

  return (
    <>
    <div className="container">
      <Nav/>
    </div>
    <Header/>
    <Main/>
    <div className="container">
      <Avocado/>
      <Food/>
    </div>
    <Cake/>
    <FoodCart/>
    <Test/>
    <Question/>
    <Footer/>
    </>
  )
}

export default App
