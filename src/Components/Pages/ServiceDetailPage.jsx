import React from "react";
import { Card, Row, Col, Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { useNavigate} from "react-router-dom";
const { Meta } = Card;







const ServicesDetail = ({ data, serviceName, setShowDetails }) => {
    const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#0890F3] py-14  ">
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
          type="primary"
          className="mt-4 bg-[#0890F3] py-1 px-4"
        >
          <div className="flex gap-2">
            <RollbackOutlined /> <span>Go back</span>
          </div>
        </Button>
      </div>
      <div className="px-10 my-10">
        <Row gutter={[8, 16]}>
          {data.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} key={index}>
              <Card>
                <Meta
                  className="servicesCards"
                  title={service.item}
                  description={`${service.price}£`}
                />
                <Button
                  type="primary"
                  className="mt-4 bg-[#0890F3]"
                  onClick={() => navigate("/contact")}
                >
                  Book Now
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ServicesDetail;
