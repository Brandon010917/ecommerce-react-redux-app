import "./App.css";

//React-ruoter-dom
import { HashRouter, Routes, Route } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

//Pages
import {
  About,
  Cart,
  Contact,
  Home,
  SignIn,
  SignUp,
  ProductDetail,
  Shop,
} from "./pages";

//Layout
import MainLayout from "./layouts/MainLayout";

//Components
import ProtectedRoutes from "./components/ProtectedRoutes";
import Loader from "./components/Loader";

function App() {
  //Redux-hooks
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      {isLoading && <Loader />}

      <Routes>
        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
