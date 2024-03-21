/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Button, Col, Row } from "antd";
import Image1 from "../../images/freedomlaundry.avif";
import WashImage from "../../images/wash_big.png";
import DryCleaning from "../../images/dry_cleaning_big.png";
import WashIron from "../../images/wash_and_iron_big.png";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const Home = () => {
  const Navigate = useNavigate();
  const navigateToServices = () => {
    Navigate("/Services");
  };
  return (
    <div>
      {/* Header */}
      <header className="flex justify-center items-center p-5 bg-[#0890F3]">
        <div className="container flex justify-center">
          <Row gutter={24}>
            <Col sm={24} md={24} lg={12}>
              <div className="text-white text-center text_lato text-xl md:text-4xl lg:text-6xl font-semibold lg:mt-20 sm:mt-4 md:mt-4">
                Laundry & dry <br /> cleaning with 24h <br /> delivery in
                <br />
                <span className="font-semibold text-[#FFD06D]">London</span>
              </div>
            </Col>
            <Col sm={24} md={24} lg={12} className="hidden md:block">
              <img
                className="h-auto w-full md:max-w-full md:h-auto md:w-full object-cover object-center"
                src="https://prod-cdn.laundryheap.com/assets/landing/hero/europe_2x-84ba6531f5d54ec36e102db75557217e96b2af462f95154931d2202acdb33bfa.avif"
                alt="Logo"
              />
            </Col>
          </Row>
        </div>
      </header>

      {/* Header End*/}

      <section className="text-center my-12">
        {/* Services */}
        <h1 className="text_lato lg:text-4xl md:text-xl sm:text-5xl font-bold">
          We collect, clean, and deliver
          <br /> your laundry and dry cleaning.
        </h1>

        <Row className="mt-6 below_header">
          <Col sm={8} md={8} lg={8}>
            <div className="flex items-center justify-center mt-3">
              <img
                src="https://prod-cdn.laundryheap.com/assets/landing/icons/24-3435ffaf292eb948ff83ca5e64dabec878e0c27316dec67b632cbf492e34f97e.svg"
                alt="Logo"
              />
              <span className="text_lato font-bold lg:text-xl ml-4 ">
                24h turnaround time
              </span>
            </div>
          </Col>
          <Col sm={8} md={8} lg={8}>
            <div className="flex items-center justify-center mt-3">
              <img
                src="https://prod-cdn.laundryheap.com/assets/landing/icons/truck-714a3cd6450430a204a46d86196df6dd97b711709c9852df248c930c52ebfe49.svg"
                alt="Logo"
              />
              <span className="text_lato font-bold lg:text-xl ml-4">
                Free collection and delivery
              </span>
            </div>
          </Col>
          <Col sm={8} md={8} lg={8}>
            <div className="flex items-center justify-center mt-3">
              <img
                src="https://prod-cdn.laundryheap.com/assets/landing/icons/chat-ecb700cb9b10e2d9668526900e47d154e28ef3b6a82dd4b0989b86cf1167ad76.svg"
                alt="Logo"
              />
              <span className="text_lato font-bold lg:text-xl ml-4">
                Dedicated 24/7 support
              </span>
            </div>
          </Col>
        </Row>

        {/* Services end */}

        {/*  how it works portion */}

        <Row className="items-center text-start mt-20">
          <Col sm={24} md={24} lg={12} className="px-20">
            <img
              src={Image1}
              alt="No image found"
              // className="img-fluid w-1/2"
            />
          </Col>
          <Col sm={24} md={24} lg={12} className="px-20">
            <p className="text-[grey] text-base mb-3 font-bold text_lato">
              FREEDOM FROM LAUNDRY
            </p>
            <h1 className="text_lato font-bold text-4xl mb-3">
              A laundry service designed for you
            </h1>
            <p className="text-lg mb-3 text_lato font-normal">
              Never worry about staining your favourite shirt. We offer laundry,
              dry cleaning and ironing in London at a schedule that fits your
              lifestyle.
            </p>

            {/* <p className="text-[#0890F3]">See How its Works ?</p> */}
          </Col>

          <Col sm={24} md={24} lg={12} className="px-20 ">
            <p className="text-[grey] text-base mb-3 font-bold text_lato">
              24H TURNAROUND TIME
            </p>
            <h1 className="text_lato font-bold text-4xl mb-3">
              No need to plan in advance
            </h1>
            <div className="flex items-center mt-3">
              <img
                alt="no image found"
                src="https://prod-cdn.laundryheap.com/assets/landing/benefits/bag-4ce09f20854869392ff759b2698a6890b263730052076f348f7d5b12e357514a.svg"
              />
              <span className="text_lato font-bold lg:text-xl ml-4 ">
                Schedule a collection today
              </span>
            </div>
            <div className="flex items-center mt-3">
              <img
                alt="no image found"
                src="https://prod-cdn.laundryheap.com/assets/landing/benefits/24-3dda1cab62308588e1c24a7e2101e5cc182f9dd21bf47a280056a3a0e6d0192d.svg"
              />
              <span className="text_lato font-bold lg:text-xl ml-4 ">
                Get your laundry back in 24h
              </span>
            </div>

            {/* <p className="text-[#0890F3]">See How its Works ?</p> */}
          </Col>
          <Col sm={24} md={24} lg={12} className="px-20">
            <img
              src={Image1}
              alt="No image found"
              // className="img-fluid w-1/2"
            />
          </Col>

          <Col sm={24} md={24} lg={12} className="px-20">
            <img
              src={Image1}
              alt="No image found"
              // className="img-fluid w-1/2"
            />
          </Col>
          <Col sm={24} md={24} lg={12} className="px-20">
            <p className="text-[grey] text-base mb-3 font-bold text_lato">
              24/7 CUSTOMER SUPPORT
            </p>
            <h1 className="text_lato font-bold text-4xl mb-3">
              We're here for you
            </h1>
            <p className="text-lg mb-3 text_lato font-normal">
              Any change in delivery times or date, or if something goes wrong,
              we are here. Our online customer support team will assist you day
              and night.
            </p>

            {/* <p className="text-[#0890F3]">See How its Works ?</p> */}
          </Col>
        </Row>

        {/*  how it works portion End */}

        {/* Pricing Cards */}
        <div>
          <h1 className="text_lato text-3xl font-semibold text-center my-10">
            Our Services
          </h1>
          <Row className="items-center text-start">
            <Col sm={24} md={24} lg={8} className="px-10">
              <Card hoverable className="service_card_content">
                <img src={WashImage} alt="no image found" className="w-1/2" />
                <p className="text-2xl font-medium my-4">Wash</p>
                <Meta
                  title="Europe Street beatfdfdf"
                  description="www.instagram.comfdfd"
                />
              </Card>
            </Col>
            <Col sm={24} md={24} lg={8} className="px-10">
              <Card hoverable className="service_card_content">
                <img src={DryCleaning} alt="no image found" className="w-1/2" />
                <p className="text-2xl font-medium my-4">Dry Cleaning</p>
                <Meta
                  title="Europe Street beatfdfdf"
                  description="www.instagram.comfdfd"
                />
              </Card>
            </Col>
            <Col sm={24} md={24} lg={8} className="px-10">
              <Card hoverable className="service_card_content">
                <img src={WashIron} alt="no image found" className="w-1/2" />
                <p className="text-2xl font-medium my-4">Wash & Iron</p>
                <Meta
                  title="Europe Street beatfdfdf"
                  description="www.instagram.comfdfd"
                />
              </Card>
            </Col>
          </Row>
          <Button
            type="primary"
            className="bg-[#0890F3] mt-5 rounded-2xl"
            size="large"
            onClick={() => navigateToServices()}
          >
            Explore More
          </Button>
        </div>
        {/* Pricing Cards */}
      </section>
    </div>
  );
};

export default Home;
