import React, { useState } from "react";
import { Col, Input, Button, Row } from "antd";
import { serverTimestamp } from "firebase/firestore";

import Swal from "sweetalert2";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "../../firebaseConfig";
import { sendEmail } from "../../utills/emailSend";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const { TextArea } = Input;

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderDetails, setOrderDetails] = useState("");

  const handleSubmit = async () => {
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address",
      });
      return;
    }

    if (orderDetails.split(" ").length < 50) {
      Swal.fire({
        icon: "error",
        title: "Insufficient order details",
        text: "Please provide at least 50 words",
      });
      return;
    }

    try {
      await setDoc(doc(db, "Orders", Date.now().toString()), {
        name,
        phone,
        email,
        address,
        orderDetails,
        Status: false,
        submittedAt: serverTimestamp(),
      });
      await sendEmail(name, email, orderDetails);
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setOrderDetails("");
      Swal.fire({
        icon: "success",
        iconColor: "#0890F3",
        title: "Success!",
        text: "Order details are submitted.",
      });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div>
      <div className=" bg-[#0890F3] py-14 ">
        <h1 className="text-center text-5xl font-semibold text_lato text-white">
          Order Details
        </h1>
      </div>

      <Row className="my-10">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          className="px-16 py-3"
        >
          <div className=" mb-10">
            <h1 className="text_lato text-5xl font-bold">
              Clothes Care <br />
              <span className="text-[#0890F3]">Dry Cleaner</span>
            </h1>
            <div className="mt-10">
              <p className="text-base text_lato font-semibold my-2">
                Do not hesitate to contact us directly. We will respond to you
                as soon as possible.{" "}
                <span className="text-[#0890F3]">
                  You will be amazed by our solutions!
                </span>
              </p>
            </div>
          </div>
          <div className="mb-10">
            <p className="text-base mt-2">
              Phone :{" "}
              <span className="font-semibold text-[red]">020 7736 6688</span>
            </p>
            <address className="text-base text_lato ">
              Address : 688 Fulham Rd., London SW6 5SA, United Kingdom
            </address>
          </div>
          <div className="mb-10">
            <h1 className="my-2 text-2xl text_lato font-semibold">
              OPENING TIMES:
            </h1>
            <p className="text-base text_lato font-medium">
              Mon-Fri : <span className="font-semibold">8am - 7pm</span>
            </p>
            <p className="text-base text_lato font-medium">
              Sat : <span className="font-semibold">8am - 6pm</span>
            </p>
            <p className="text-base text_lato font-medium">
              Sun : <span className="font-semibold"> 10am - 4pm</span>
            </p>
          </div>
          <p className="text-base text_lato font-semibold my-2">
            Note:
            <span className="text-[red] ml-2">
              Prior to placing your order, kindly verify our operating hours for
              the week, as mentioned above.
            </span>
          </p>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          className="px-16 py-3"
        >
          <h1 className="text_lato text-3xl font-semibold mb-3">
            Kindly ensure all fields are accurately filled with valid
            information
          </h1>
          <label>Name</label>
          <Input
            placeholder="Name"
            type="text"
            size={"large"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Phone</label>
          <Input
            placeholder="Phone Number"
            type="phone"
            size={"large"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Email</label>
          <Input
            placeholder="Email"
            type="email"
            size={"large"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Address</label>
          <Input
            placeholder="Address"
            type="text"
            size={"large"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>Order Details</label>
          <TextArea
            placeholder="Order Details"
            allowClear
            rows={4}
            value={orderDetails}
            onChange={(e) => setOrderDetails(e.target.value)}
          />

          <Button
            size="large"
            className="block px-6  mt-2 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
