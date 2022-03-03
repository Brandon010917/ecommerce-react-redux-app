import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { getProductsListThunk } from "../redux/actions";
// Components
import Newsletter from "../components/Custom/Newsletter";
import Hero from "../components/Home/Hero";
import Story from "../components/Home/Story";
import GalleryTop from "../components/Home/GalleryTop";
import GalleryBottom from "../components/Home/GalleryBottom";
import EssentialLuxury from "../components/Home/EssentialLuxury";
import EffortlessPieces from "../components/Home/EffortlessPieces";

const Home = () => {
  // Redux-hooks
  const { productsList } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Effect
  useEffect(() => {
    dispatch(getProductsListThunk());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Story />
      <GalleryTop />
      <EssentialLuxury />
      <EffortlessPieces productsList={productsList} />
      <Newsletter />
      <GalleryBottom />
    </>
  );
};

export default Home;
