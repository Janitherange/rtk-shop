import { Hero } from "../components/UI/Home/Hero/Hero";
import { Services } from "../components/UI/Home/Services/Services";
import { TrendingProducts } from "../components/UI/Home/TrendingProducts/TrendingProducts";
import { BestSaleProducts } from "../components/UI/Home/BestSaleProducts/BestSaleProducts";
import { LimitedOffer } from "../components/UI/Home/LimitedOffer/LimitedOffer";
import { NewArrivals } from "../components/UI/Home/NewArrivals/NewArrivals";
import { PopularInCategory } from "../components/UI/Home/PopularInCategory/PopularInCategory";
import { useEffect } from "react";
import { getProducts } from "../redux/slices/productSlice.js";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);

  useEffect(() => {
    if (!product.length) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <>
      <section className="text-blue-gray-700 bg-[#d6e5fb]">
        <Hero />
      </section>
      <section className="bg-white">
        <Services />
      </section>
      <section className="bg-white py-10">
        <TrendingProducts />
      </section>
      <section className="bg-white py-10">
        <BestSaleProducts />
      </section>
      <section className="bg-blue-gray-900 pt-10 pb-5 mt-10">
        <LimitedOffer />
      </section>
      <section className="bg-white py-10">
        <NewArrivals />
      </section>
      <section className="bg-white py-10">
        <PopularInCategory />
      </section>
    </>
  );
};
