import withDashboard from "../../Components/DashBoardLayout/DashBoardLayout";
import { instance } from "../../api/axios";
import { useEffect, useState } from "react";

const CustomerList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance
      .get("user/users")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteUserId = (id) => {
    const confirm = window.confirm("Are You Sure");
    if (confirm) {
      instance.delete(`user/users/${id}`).then((res) => {
        if (res.data.message) {
          const newData = data.filter((user) => user._id !== id);
          setData(newData);
        }
      });
    }
  };

  return (
    <div className="container mx-auto px-6 my-6">
      <h1 className="text-3xl text-ellipsis my-4">All Customer List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-0 px-4">Role</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-center">
          {data.map((item, i) => (
            <tr key={i}>
              <td className="py-2 px-4">{i + 1}</td>
              <td className="py-2 px-4">{item.personalName}</td>
              <td className="py-2 px-4">{item.email}</td>
              <td className="py-2 px-4">{item.contactNumber}</td>
              <td className="py-2 px-4">
                <span className={"bg-green-500 text-white px-2 py-1 rounded"}>
                  {item.role}
                </span>
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => deleteUserId(item._id)}
                  disabled={item.role === "admin" && true}
                  className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 ${
                    item.role === "admin"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withDashboard(CustomerList);
