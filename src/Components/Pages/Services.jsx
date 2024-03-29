import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Spin } from "antd"; // Import Spin component for loader
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { firebaseConfig } from "../../firebaseConfig";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const { Meta } = Card;

const Services = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Service"), (snapshot) => {
      const servicesData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setServices(servicesData);
      setLoading(false); // Set loading to false when data is fetched
    });

    // Cleanup function to unsubscribe from the snapshot listener when the component unmounts
    return () => unsubscribe();
  }, []);

 

  return (
    <>
      {loading ? ( // Display loader if loading is true
        <div className="text-center py-4">
          <Spin size="large" />
        </div>
      ) : (
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
                    {service.description && ( // Check if ServiceDetail is present
                      <Button
                        type="primary"
                        className="mt-4 bg-[#0890F3]"
                        onClick={() =>
                          navigate(`/ServiceDetail/${service.id}/${service.name}`)
                        }
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
    </>
  );
};

export default Services;
