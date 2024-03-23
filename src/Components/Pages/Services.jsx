import React, { useState } from "react";
import { Card, Row, Col, Button } from "antd";
import { services } from "../constants/ServicesPrices";
import ServicesDetail from "./ServiceDetailPage";
import { EyeOutlined } from "@ant-design/icons";
const { Meta } = Card;

const Services = () => {
  const [showDetails, setShowDetails] = useState([]);

  const handleExplore = (index) => {
    setShowDetails((prev) => [...prev, index]);
  };

  return (
    <>
      {showDetails.length === 0 && (
        <div>
          <div className="bg-[#0890F3] py-14 ">
            <h1 className="text-center text-5xl font-semibold text_lato text-white">
              Services
            </h1>
          </div>
          <div className="flex justify-center items-center px-10 my-10">
            <Row gutter={[8, 16]}>
              {services.map((service, index) => (
                <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8} key={index}>
                  <Card>
                    <Meta
                      className="servicesCards"
                      title={service.name}
                      description={service.description}
                    />
                    {service.ServiceDetail && ( // Check if ServiceDetail is present
                      <Button
                        type="primary"
                        className="mt-4 bg-[#0890F3]"
                        onClick={() => handleExplore(index)}
                      >
                        <div className="flex gap-2">
                          <EyeOutlined /> <span>Explore</span>
                        </div>
                      </Button>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}

      {showDetails.map((index) => (
        <ServicesDetail
          key={index}
          data={services[index].ServiceDetail}
          serviceName={services[index].name}
          setShowDetails={setShowDetails}
        />
      ))}
    </>
  );
};

export default Services;
