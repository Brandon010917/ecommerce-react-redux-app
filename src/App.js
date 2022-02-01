import "./App.css";

//React-ruoter-dom
import { HashRouter, Routes, Route } from "react-router-dom";

//Pages
import {
  About,
  Cart,
  Contact,
  Home,
  Login,
  ProductDetail,
  Shop,
} from "./pages";

//Components
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* <ProtectedRoutes element={<ProtectedRoutes />}> */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        {/*  </ProtectedRoutes> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
