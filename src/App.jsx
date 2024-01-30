import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <Home />
    // <Router>
    //   <Routes>
    //     <Route path="/pay">
    //       <Pay/>
    //     </Route>
    //     {/* <Route path="/success">
    //       <Success/>
    //     </Route> */}
    //   </Routes>
    // </Router>
    )
};

export default App;