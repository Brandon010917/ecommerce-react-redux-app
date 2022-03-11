// Styles
import "./App.css";
// React-ruoter-dom
import { Routes, Route } from "react-router-dom";
import history from "./utils/history";
import CustomRouter from "./components/Custom/CustomRouter";
// Redux
import { useSelector } from "react-redux";
// Views
import {
  Cart,
  Contact,
  Home,
  SignIn,
  SignUp,
  ProductDetail,
  Shop,
} from "./pages";
// Layout
import MainLayout from "./layouts/MainLayout";
// Components
import ProtectedRoutes from "./components/Custom/ProtectedRoutes";
import Loader from "./components/Custom/Loader";

function App() {
  // Redux-hooks
  const { isLoading } = useSelector((state) => state.app);

  return (
    <CustomRouter history={history}>
      {isLoading && <Loader />}

      <Routes>
        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
