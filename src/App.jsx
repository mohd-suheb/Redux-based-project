import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>

      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" elements = {<Home/>}/>
        <Route path="/cart" elements = {<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
