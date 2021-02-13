import React from "react";

// reactstrap components
import {Button, Row, Col, Container} from "reactstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";


// core components

import contactHero from "../../assets/img/contact/contact-header.png";


function ContactHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-our-story text-primary">
        <div
          className="page-header-image "
          ref={pageHeader}
        />
        <Container>
          <Row className="align-items-center">
            <Col className="text-left" lg={{size: 5, order: 1}} md={{order: 2}} sm={{order: 2}} xs={{order: 2}}>
              <h1 className="title">
                Want to sign up for
                a kit or just a general
                query? We’re here
                to help.</h1>
              <AnchorLink href='#contact-us'>
                <Button
                  className="btn-round"
                  color="primary"
                  outline
                  size="lg"
                >
                  Contact us below
                </Button>
              </AnchorLink>
            </Col>
            <Col lg={{size: 7, offset: 0, order: 2}} md={{order: 1}}  sm={{order: 1}} xs={{order: 1}}>
              <img src={contactHero} className="img-fluid" alt={'contactHero'}/>
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default ContactHeader;
