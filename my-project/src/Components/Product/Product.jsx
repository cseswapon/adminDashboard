/**
 * Title: Online E-commerce Product Sell
 * Description: It is Component with a Home page.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Product = () => {
  // data store
  const [data, setData] = useState([]);
  useEffect(() => {
    // api calling
    instance
      .get("product")
      .then((res) => setData(res.data.result))
      .then((err) => console.log(err.message));
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold my-3 text-center">Our Product</h2>
      <div className="flex flex-wrap">
        {/* 0-6 product show home page */}
        {data.slice(0, 6).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      <div className="text-center">
        {/* click another route and all product show */}
        <Link to="/product">
          <button className="border-blue-300 border px-5 py-2 rounded bg-zinc-700 text-white my-4">
            More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Product;
