import React, { useEffect } from "react";

//Redux
import { useDispatch } from "react-redux";

//Actions
import {
  getProductsCategoriesThunk,
  getProductsListThunk,
} from "../redux/actions";

const Home = () => {
  //Redux-hooks
  const dispatch = useDispatch();

  //Effect
  useEffect(() => {
    dispatch(getProductsListThunk());
    dispatch(getProductsCategoriesThunk());
  }, [dispatch]);

  return (
    <div className="container-content">
      <div className="hero-image"></div>
    </div>
  );
};

export default Home;
