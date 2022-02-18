import { useEffect } from "react";
//Syles
import "../styles/Home.css";
//Images
import ImageRing1 from "../assets/images/image-ring-1.jpg";
import ImageRing2 from "../assets/images/image-ring-2.jpg";
//React-router-dom
import { Link } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Actions
import { getProductsListThunk } from "../redux/actions";
//Components
import ProductSlider from "../components/Custom/ProductSlider";
import Newsletter from "../components/Custom/Newsletter";
import Hero from "../components/Home/Hero";
import Story from "../components/Home/Story";
import GalleryTop from "../components/Home/GalleryTop";
import GalleryBottom from "../components/Home/GalleryBottom";

const Home = () => {
  //Redux-hooks
  const productsList = useSelector((state) => state.productsList);
  const dispatch = useDispatch();

  //Effect
  useEffect(() => {
    dispatch(getProductsListThunk());
  }, [dispatch]);

  return (
    <div className="home">
      <Hero />
      <Story />
      <GalleryTop />

      <div className="luxury">
        <div className="grid grid-cols-2">
          <div className="p-4 pt-0">
            <h2 className="mb-8 font-teimer text-4xl">Essential Luxury</h2>
            <button className="border-2 border-black py-2.5 px-4 font-sans hover:bg-black hover:text-white transition-colors">
              <Link to="/about">Shop Rings</Link>
            </button>
          </div>
          <div className="p-4 pt-0 grid md:grid-cols-2 gap-3">
            <div className="text-center text-sm">
              <img src={ImageRing1} alt="ring-1" />
              <p className="mt-2 mb-1">Maggie Ring</p>
              <p>$150.00</p>
            </div>
            <div className="text-center">
              <img src={ImageRing2} alt="ring-2" />
              <p className="mt-2 mb-1">$Katey Ring</p>
              <p>210.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="effortless-pieces flex justify-between lg:min-h-screen">
        <div className="container-content text-white flex-grow">
          <div className="p-4 pt-0 lg:p-0 h-full flex flex-col">
            <h2 className="text-3xl mb-4">Effortless pieces, timeless style</h2>
            <div className="grid grid-cols-12 h-full flex-grow">
              <div className="col-span-12 md:col-span-9 pr-4 self-center">
                <div className="w-5/12">
                  <p className="mb-8 text-sm">
                    We design each of our collections with the intention of
                    creating pieces that can be passed down through generations,
                    with minimal waste and minimal carbon footprint.
                  </p>

                  <button className="border-2 border-white py-2.5 px-4 font-sans text-xl hover:bg-white hover:text-black transition-colors">
                    <Link to="/shop">Shop Now</Link>
                  </button>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 pl-4">
                <ProductSlider images={productsList[0]?.images || []} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />

      <GalleryBottom />
    </div>
  );
};

export default Home;
