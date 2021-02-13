import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";


// core components
import DarkNavbar from "../components/Navbars/DarkNavbar";
import ContactHeader from "../components/Headers/ContactHeader";
import ContactFooter from "../components/Footers/ContactFooter";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import contact1 from "../assets/img/contact/contact1.jpg";
import contact2 from "../assets/img/contact/contact2.jpg";



function HowItWorks() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <DarkNavbar/>
      <div className="wrapper">
        <ContactHeader/>
        <div className="section section-contact" id="how-it-began">
          <Container>
            <Row className="">
              <Col lg={{size: 6, offset: 0}}>
                <div className="mb-lg-5 mb-md-4 mb-sm-3 mb-3">
                  <h2 className="text-primary text-underline">For Families</h2>
                </div>
                <img
                  className="img-fluid mb-lg-5 mb-md-4 mb-sm-3 mb-3"
                  src={contact1}
                  alt={'contact-image'}
                />
                <p className="text-primary">
                  Looking for a consent form to sign for a person
                  in prison’s pack approval?
                </p>
                <p className="text-primary">
                  Or help us gain more awareness and find out how
                  best we can help the children of people in prison
                  by filling out our questionnaire below.
                </p>
                <p className="mb-lg-4 mb-md-4 mb-sm-2 mb-2">
                  <a download="prison-consent.pdf" href="" className="text-primary title">
                    Download person in prison consent form here.
                  </a>
                </p>
                <p className="mb-lg-4 mb-md-4 mb-sm-2 mb-2">
                  <a download="child-consent.pdf" href="" className="text-primary title">
                    Download child’s consent form here.
                  </a>
                </p>
                <p className="mb-lg-4 mb-md-4 mb-sm-5 mb-5">
                  <a download="questionnaire.pdf" href="" className="text-primary title">
                    Download questionnaire here.
                  </a>
                </p>
              </Col>

              <Col lg={{size: 6, offset: 0}}>
                <div className="mb-lg-5 mb-md-4 mb-sm-3 mb-3">
                  <h2 className="text-primary text-underline">For Services</h2>
                </div>
                <img
                  className="img-fluid mb-lg-5 mb-md-4 mb-sm-3 mb-3"
                  src={contact2}
                  alt={'contact-image'}
                />
                <p className="text-primary">
                  Want to work with us? Contact us in the general
                  enquiry form below with a clear subject line.
                </p>
                <p className="text-primary">
                  Want to see how your funding and resources might
                  further help our cause and the impact it could have?
                  Contact us below.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <ContactFooter/>
        <DefaultFooter/>
      </div>
    </>
  );
}

export default HowItWorks;
