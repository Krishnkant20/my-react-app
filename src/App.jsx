import { BrowserRouter,Routes,Router, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CartData from "./cartData";
import ProductDisplay from "./pages/ProductDisplay";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";
const App=()=>{
  return(
    <>
 <BrowserRouter>
 <Routes>

<Route path="/" element={<Layout/>}>
<Route index element={<Home/>} />
<Route path="home" element={<Home/>} />

<Route path="cartdata" element={<CartData/>} />
<Route path="productdisplay/:id" element={<ProductDisplay/>} />
<Route path="men" element={<Mens/>} />
<Route path="women" element={<Womens/>} />
<Route path="kids" element={<Kids/>} />



</Route>



</Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App;