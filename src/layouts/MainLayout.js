//React-router-dom
import { Outlet } from "react-router-dom";

//Componets
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
