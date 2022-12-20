import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import College from "./Components/College";
import Testimonial from "./Components/Testimonial"
import Timer from "./Components/Timer";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/college" element={<College />}/>
        <Route exact path="/testimonial" element={<Testimonial />}/>
        <Route exact path="/timer" element={<Timer />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
