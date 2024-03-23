import React from "react";
import { Card, Row, Col, Button } from "antd";

const { Meta } = Card;

const services = [
  {
    name: "Drycleaning",
    description:
      "Professional care for delicate fabrics, ensuring garments receive meticulous cleaning and attention to detail.",
  },
  {
    name: "Shirts service",
    description:
      "Tailored cleaning process for shirts, maintaining quality, crispness, and professional appearance.",
  },
  {
    name: "Laundry",
    description:
      "Comprehensive cleaning service for everyday clothing, linens, and towels, ensuring freshness and cleanliness.",
  },
  {
    name: "Ski sportswear",
    description:
      "Specialized cleaning and maintenance for ski gear, preserving performance and durability for slopes.",
  },
  {
    name: "Household",
    description:
      "Refreshing household items including cushions, rugs, and drapes with meticulous cleaning care.",
  },
  {
    name: "Furniture covers",
    description:
      "Revitalizing furniture covers with professional cleaning, ensuring vibrancy and longevity for furnishings.",
  },
  {
    name: "Leather, fur and suede",
    description:
      "Expert cleaning for luxury items, preserving texture and appearance of leather, fur, and suede.",
  },
  {
    name: "Curtains",
    description:
      "Gentle yet effective cleaning process to remove dust, dirt, and stains, restoring curtain beauty.",
  },
  {
    name: "Wedding dresses",
    description:
      "Preserving wedding gown beauty with specialized cleaning, ensuring pristine condition and sentimental value.",
  },
  {
    name: "Service wash",
    description:
      "Convenient laundry service, providing clean clothes without the hassle of washing and drying.",
  },
  {
    name: "Duvet and bed linen",
    description:
      "Restful sleep with fresh duvet and linen cleaning, removing dirt and allergens.",
  },
  {
    name: "Alterations and repair",
    description:
      "Skilled tailoring for garment alterations and repairs, ensuring the perfect fit and craftsmanship.",
  },
  {
    name: "Specialist and delicate items",
    description:
      "Meticulous care for delicate fabrics and intricate designs, providing specialized cleaning attention.",
  },
];

const Services = () => {
  return (
    <>
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
                <Button type="primary" className="mt-4 bg-[#0890F3]">
                  Explore
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Services;
