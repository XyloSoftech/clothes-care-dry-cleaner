import React, { useEffect, useState } from "react";
import { Table, Dropdown, Menu } from "antd";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../../firebaseConfig";
import { DownOutlined } from "@ant-design/icons";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Adminside() {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login");
    } else {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "Orders"));
        setDataSource(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
        );
      };
      fetchData();
    }
  }, []);
  const logout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Navigate to /Login
    navigate("/Login");
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "key",
      key: "orderId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Contact Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (Status) => {
        const menu = (
          <Menu>
            <Menu.Item key="0">Pending</Menu.Item>
            <Menu.Item key="1">Fulfilled</Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {Status ? "Fulfilled" : "Pending"} <DownOutlined />
            </a>
          </Dropdown>
        );
      },
    },
    {
      title: "Order Placed At",
      dataIndex: "submittedAt",
      key: "submittedAt",

      render: (submittedAt) => {
        const date = new Date(submittedAt.seconds * 1000);
        return date.toLocaleString();
      },
    },
  ];

  return (
    <div>
      <div className={`sticky top-0 z-50 lg:relative lg:z-auto`}>
        <header>
          <div className="relative z-20  bg-[#0890F3]">
            <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
              <div className="flex items-center justify-between">
                <div className="relative z-30">
                  <a href="#">
                    <img
                      src="https://tailus.io/sources/blocks/navigation-layout/preview/images/logo.svg"
                      alt="logo-tailus"
                      className="w-32"
                    />
                  </a>
                </div>
                <h1 className="text-2xl font-bold text-center text-white ">Admin Dashboard</h1>
                <div className="flex items-center justify-end  lg:border-l-0">
                  <div
                   
                  >
                    <div className="py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:py-0 lg:pr-0 lg:pl-6">
                      <button
                        onClick={logout}
                        className="block px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div>
 
</div>
     <div className="mt-32"> 
     <h2 className="text-xl font-bold text-center ">Order Table</h2>
    <div className="px-10">
    <Table dataSource={dataSource} columns={columns} />
    </div>
     </div>
    </div>
  );
}

export default Adminside;
