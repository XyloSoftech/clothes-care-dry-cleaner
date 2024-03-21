import { Row, Col, Button } from "antd";
import React from "react";
import { Input } from "antd";
const { TextArea } = Input;
function ContactUs() {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-semibold text_lato">
        Contact Us
      </h1>
      <p className="text_lato text-center text-[#717171] text-lg mt-3">
        Any questions or remarks? Just write a message
      </p>

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
          <h1 className="text_lato text-5xl font-bold">
            Clothes Care <br />
            <span className="text-[#0890F3]">Dry Cleaner</span>
          </h1>
          <p className="text-base text_lato font-semibold my-2">
            Do not hesitate to contact us directly. We will respond to you as
            soon as possible.{" "}
            <span className="text-[#0890F3]">
              You will be amazed by our solutions!
            </span>
          </p>
          <p className="text-base mt-2">
            Phone :{" "}
            <span className="font-semibold text-[red]">020 7736 6688</span>
          </p>
          <address className="text-base text_lato ">
            Address : 688 Fulham Rd., London SW6 5SA, United Kingdom
          </address>
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
            Let us help you.
          </h1>
          <label>Name</label>
          <Input placeholder="Name" type="text" size={"large"} />
          <label>Phone</label>
          <Input placeholder="Phone Number" type="phone" size={"large"} />
          <label>Email</label>
          <Input placeholder="Email" type="email" size={"large"} />
          <label>Message</label>
          <TextArea
            placeholder="textarea with clear icon"
            allowClear
            rows={4}
          />

          <Button size="large" className="my-2">
            Send
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
