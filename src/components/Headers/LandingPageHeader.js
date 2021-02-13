import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

// core components

function LandingPageHeader() {
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
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/home-bg.jpg") + ")",
          }}
          ref={pageHeader}
        />
        <div className="content-center">
          <Container>
            <h1 className="title">Keeping bonds strong
              between children and their
              loved ones who are in prison.</h1>
          </Container>
        </div>
        <div className="content-bottom">
          <div className="text-center">
            <AnchorLink href='#more'>
              <Button
                className="btn-round"
                color="neutral"
                to="/"
                outline
                tag={Link}
                size="lg"
              >
                Learn more
              </Button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
