import React from "react";

// reactstrap components
import {Button, Row, Col, Container} from "reactstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";


// core components

import howItWorksIntro from "../../assets/img/how-it-works/howdoesitwork1.png";


function HowItWorksHeader() {
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
      <div className="page-header page-header-how-it-works bg-primary">
        <div
          className="page-header-image "
          ref={pageHeader}
        />
        <Container>
          <Row className="align-items-center">
            <Col className="text-left" lg={{size: 5, order: 1}} md={{order: 2}} sm={{order: 2}} xs={{order: 2}}>
              <h1 className="title">
                For us at LittleTalks,
                distance means so little,
                when someone means
                so much.</h1>
              <AnchorLink href='#whats-in-the-kit'>
                <Button
                  className="btn-round"
                  color="neutral"
                  outline
                  size="lg"
                >
                  Learn more
                </Button>
              </AnchorLink>
            </Col>
            <Col lg={{size: 7, offset: 0, order: 2}} md={{order: 1}}  sm={{order: 1}} xs={{order: 1}}>
              <img src={howItWorksIntro} className="img-fluid" alt={'howItWorksIntro'}/>
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default HowItWorksHeader;
