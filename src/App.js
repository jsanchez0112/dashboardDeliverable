
// import './App.css';
import Nav from "./components/Nav"
import Rating from "./components/Rating"
import Reviews from "./components/Reviews"
import Visitors from "./components/Visitors"
import Analysis from "./components/Analysis"
import './styles.css'


function App () {
  return (
    <div className="dashboard">
      <Nav/>
      <div className="rightSide">
      <div className="topBoxes">
      <Reviews/>
      <Rating/>
      <Analysis/>
      </div>
      <Visitors/>
      </div>
    </div>
  )
}


export default App;
