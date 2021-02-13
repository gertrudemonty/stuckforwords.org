/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import {Container, Row, Col} from "reactstrap";

import primaryLogo from "../../assets/img/brand/primaryLogo.png";
import tuslaLogo from "../../assets/img/brand/tusla.png";
import irishLogo from "../../assets/img/brand/irish-prison-service.png";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <Row className="align-items-end">
            <Col md="6">
              <div>
                <Link to="/">
                  <img src={primaryLogo} className="footer-brand" alt={'brand-logo'}/>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <img src={tuslaLogo} className="tusla-img mb-0" alt={'brand-logo'}/>
                </Link>
                <Link to="/">
                  <img src={irishLogo} className="irish-img" alt={'brand-logo'}/>
                </Link>
              </div>
            </Col>
            <Col md="6" className="mt-lg-0 mt-md-0 mt-sm-5 mt-5">
              <Row>
                <Col>
                  <p>Contact us:</p>
                  <div className="d-flex mb-2"><span className="big-letter">E</span><a
                   className="text-white" href="mailto:hello@littletalks.com">hello@littletalks.com</a></div>
                  <div className="d-flex mb-2"><span className="big-letter">A</span><span>Galway, Ireland</span></div>
                </Col>
                <Col>
                  <p>Follow us:</p>
                </Col>
              </Row>
              <div className="mt-4">
                Privacy Policy, Cookies, Terms & Conditions. {new Date().getFullYear()}.
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
