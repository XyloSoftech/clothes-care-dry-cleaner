// ServicesDetail.js
import React from "react";
import { List, Row, Col, Button, message } from "antd";
import { RollbackOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";

const ServicesDetail = ({ data, serviceName, setShowDetails }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleAddToCart = (service) => {
    const isAlreadyInCart = cartItems.some(
      (item) => item.item === service.item
    );
    if (!isAlreadyInCart) {
      dispatch(addToCart(service));
      message.success(`{ ${service.item} } service added to cart`);
    } else {
      message.warning(`{ ${service.item} } service is already in the cart`);
    }
  };

  const handleRemoveFromCart = (service) => {
    dispatch(removeFromCart(service));
    message.success(`${service.item} removed from cart`);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <div className="bg-[#0890F3] py-14">
        <div>
          <h1 className="text-center text-5xl font-semibold text_lato text-white">
            {serviceName}
          </h1>
        </div>
      </div>
      <div className="px-10 flex justify-end">
        <Button
          onClick={() => {
            setShowDetails([]);
          }}
          type="danger"
          className="mt-4 bg-[red] py-1 px-4 text-white flex items-center justify-center"
        >
          <RollbackOutlined /> Go back
        </Button>
      </div>
      <Row>
        <Col sm={24} md={24} lg={12}>
          <div className="px-10 my-10 h-screen overflow-auto">
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={data}
              renderItem={(service, index) => (
                <div className="subServicesMain">
                  <List.Item key={index}>
                    <div className="flex justify-between">
                      <div className="servicesCards">
                        <h3 className="text-lg text_lato font-bold">
                          {service.item}
                        </h3>
                        <p className="text-lg text_lato font-bold mt-2">
                          <span className="text-[red]">Per Item Price:</span>{" "}
                          {`${service.price}£`}
                        </p>
                      </div>
                      <Button
                        type="primary"
                        className="mt-4 bg-[#0890F3]"
                        onClick={() => handleAddToCart(service)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </List.Item>
                </div>
              )}
            />
          </div>
        </Col>
        <Col sm={24} md={24} lg={12}>
          <div className="p-10 h-screen overflow-auto">
            <h2 className="text-2xl font-bold text_lato mb-4">
              Service Cart ({cartItems.length} items)
            </h2>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between mb-2 subServicesMain"
              >
                <div className="text-base font-semibold">
                  {item.item} -{" "}
                  <span className="text-[red]"> {item.price}£ </span>
                </div>
                <Button
                  type="danger"
                  onClick={() => handleRemoveFromCart(item)}
                  className="text-[red] text-base flex items-center"
                >
                  <DeleteOutlined /> Remove
                </Button>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <div className="text-[red] text-2xl font-bold">
                Total: {calculateTotal()}£
              </div>
              <Button
                type="primary"
                className="mt-4 bg-[#0890F3]"
                // onClick={() => navigate("/checkout")}
              >
                Checkout
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ServicesDetail;
