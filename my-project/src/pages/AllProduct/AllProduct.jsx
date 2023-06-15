import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { instance } from "../../api/axios";
import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";


const AllProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance
      .get("product")
      .then((res) => setData(res.data.result))
      .then((err) => console.log(err.message));
  }, []);
  return (
    <>
      <div className="container mx-auto my-4">
        <h2 className="text-2xl font-bold my-3 text-center">All Product</h2>
        <div className="flex flex-wrap">
          {data.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default withDashboard(AllProduct);
