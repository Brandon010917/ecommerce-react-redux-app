// React-router-dom
import { Outlet } from "react-router-dom";
// Componets
import Header from "../components/Custom/Header";
import Footer from "../components/Custom/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
