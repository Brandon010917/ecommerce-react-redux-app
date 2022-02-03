import { useEffect } from "react";

//Redux
import { useDispatch } from "react-redux";

//Actions
import { getCategoriesThunk, getProductsListThunk } from "../redux/actions";
import { Link } from "react-router-dom";

//Components
import Sliders from "../components/Sliders";

const Home = () => {
  //Redux-hooks
  const dispatch = useDispatch();

  //Effect
  useEffect(() => {
    dispatch(getProductsListThunk());
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  return (
    <div className="font-literation">
      <div className="container-content">
        <div className="hero-container relative flex flex-col justify-end ">
          <div className="w-full md:w-1/3">
            <strong className="block mb-4 text-sm">NEW COLLECTION</strong>
            <p className="mt-7 font-teimer text-2xl md:text-3xl">
              <span>Universal — </span>
              <Link className="underline" to="/shop">
                Shop Now
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="home-story">
        <div className="container-content">
          <div className="story-details flex flex-col items-center">
            <div className="flex flex-col items-center gap-8 p-4 text-center md:w-1/2">
              <p className="text-sm">
                We create modern gold and sterling silver jewelry with a focus
                on timeless designs, local production, and responsibly sourced
                materials.
              </p>
              <button className="border-2 border-black py-2.5 px-4 font-sans hover:bg-black hover:text-white transition-colors">
                <Link to="/about">Our Story</Link>
              </button>
            </div>
          </div>

          <div className="home-gallery-top grid grid-cols-2 md:grid-cols-3">
            <div className="col-span-1">
              <img
                src={require("../assets/images/image-gallery-1.jpg")}
                alt="gallery-1"
                className="object-cover h-full animate__animated animate__fadeIn"
              />
            </div>
            <div className="col-span-1">
              <img
                src={require("../assets/images/image-gallery-2.jpg")}
                alt="gallery-1"
                className="object-cover h-full animate__animated animate__fadeIn"
              />
            </div>
            <div className="md:col-span-1"></div>
          </div>

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
                  <img
                    src={require("../assets/images/image-ring-1.jpg")}
                    alt="ring-1"
                  />
                  <p className="mt-2 mb-1">Maggie Ring</p>
                  <p>$150.00</p>
                </div>
                <div className="text-center">
                  <img
                    src={require("../assets/images/image-ring-2.jpg")}
                    alt="ring-2"
                  />
                  <p className="mt-2 mb-1">$Katey Ring</p>
                  <p>210.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="effortless-pieces lg:min-h-screen">
        <div className="container-content text-white">
          <div className="p-4 pt-0 lg:p-0">
            <h2 className="text-3xl mb-4">Effortless pieces, timeless style</h2>
            <div className="grid grid-cols-12">
              <div className="md:col-span-9 pr-4">
                <div className="w-5/12">
                  <p className="mb-8 text-sm">
                    We design each of our collections with the intention of
                    creating pieces that can be passed down through generations,
                    with minimal waste and minimal carbon footprint.
                  </p>

                  <button className="border-2 border-white py-2.5 px-4 font-sans hover:bg-white hover:text-black transition-colors">
                    <Link to="/shop">Shop Now</Link>
                  </button>
                </div>
              </div>
              <div className="md:col-span-3 pl-4">
                <Sliders />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <div className="container-content">
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <h3 className="font-teimer text-3xl mb-7">Newsletter</h3>
              <p className="text-sm">
                Be the first to know about our new collection <br /> launches,
                special offers & other updates.
              </p>
            </div>
            <div className="col-span-4 p-4 pt-0 text-sm">
              <form className="mb-4 flex items-center">
                <div className="mt-4 py-2 pr-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-7 py-5"
                  />
                </div>
                <div className="mt-4 py-2 pl-1">
                  <button className="px-7 py-5 border-2 border-black hover:bg-black hover:text-white transition duration-300">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full border border-black border-opacity-60 mt-8 mb-4"></div>
        </div>
      </div>

      <div className="home-gallery-bottom">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
            <img
              src={require("../assets/images/image-gallery-3.jpg")}
              alt="gallery-3"
              className="w-full h-full max-h-60 md:max-h-80 object-cover"
            />
            <img
              src={require("../assets/images/image-gallery-4.jpg")}
              alt="gallery-4"
              className="w-full h-full max-h-60 md:max-h-80 object-cover"
            />
            <img
              src={require("../assets/images/image-gallery-5.jpg")}
              alt="gallery-5"
              className="w-full h-full max-h-60 md:max-h-80 object-cover"
            />
            <img
              src={require("../assets/images/image-gallery-6.jpg")}
              alt="gallery-6"
              className="w-full h-full max-h-60 md:max-h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
