import { useEffect, useState } from "react";
import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";
import { instance } from "../../api/axios";

const OrderList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance
      .get("booked")
      .then((res) => setData(res.data.result))
      .then((err) => alert(err.message));
  }, []);
  return (
    <>
      <div className="container mx-auto px-6 my-6">
        <h1 className="text-3xl text-ellipsis my-4">All Customer List</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="py-2 px-4">SL.NO</th>
              <th className="py-2 px-4">Id</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            {data.map((item, i) => (
              <tr key={i}>
                <td className="py-2 px-4">{i + 1}</td>
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default withDashboard(OrderList);
