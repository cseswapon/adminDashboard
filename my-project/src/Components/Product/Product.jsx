import { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance
      .get("product")
      .then((res) => setData(res.data.result))
      .then((err) => console.log(err.message));
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold my-3 text-center">Our Product</h2>
      <div className="flex flex-wrap">
        {data.slice(0,6).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
          </div>
          <div className="text-center">
              <Link to="/product">
              <button className="border-blue-300 border px-5 py-2 rounded bg-zinc-700 text-white my-4">More</button>
              </Link>
          </div>
    </>
  );
};

export default Product;
