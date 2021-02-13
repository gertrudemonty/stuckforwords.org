import React from "react";

// reactstrap components
import {Button, Row, Col, Container} from "reactstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";


// core components

import ourStoryHero from "../../assets/img/our-story/story-hero.png";


function OurStoryHeader() {
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
      <div className="page-header page-header-our-story">
        <div
          className="page-header-image "
          ref={pageHeader}
        />
        <Container>
          <Row className="align-items-center">
            <Col className="text-left" lg={{size: 5, order: 1}} md={{order: 2}} sm={{order: 2}} xs={{order: 2}}>
              <h1 className="title">
                LittleTalks believes in
                empowering children to
                take communication
                into their own hands.</h1>
              <AnchorLink href='#how-it-began'>
                <Button
                  className="btn-round"
                  color="blue"
                  outline
                  size="lg"
                >
                  Our Story
                </Button>
              </AnchorLink>
            </Col>
            <Col lg={{size: 7, order: 2}} md={{order: 1}}  sm={{order: 1}} xs={{order: 1}}>
              <img src={ourStoryHero} className="img-fluid" alt={'ourStoryHero'}/>
            </Col>
          </Row>

        </Container>
      </div>
    </>
  );
}

export default OurStoryHeader;
