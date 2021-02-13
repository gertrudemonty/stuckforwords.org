import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";


// core components
import BlueNavbar from "../components/Navbars/BlueNavbar";
import OurStoryHeader from "../components/Headers/OurStoryHeader";
import ContactFooter from "../components/Footers/ContactFooter";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import began1 from "../assets/img/our-story/began1.jpg";
import began2 from "../assets/img/our-story/began2.jpg";



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
      <BlueNavbar/>
      <div className="wrapper">
        <OurStoryHeader/>
        <div className="section section-how-it-began" id="how-it-began">
          <Container>
            <Row className="mb-lg-5 mb-md-4 mb-sm-0 mb-0">
              <Col>
                <h2 className="text-primary" style={{textDecoration: 'underline'}}>How it all began?</h2>
              </Col>
            </Row>
            <Row className="mb-lg-5 mb-md-4 mb-sm-3 mb-3 pb-lg-5 pb-md-4 pb-sm-3 pb-3 align-items-center">
              <Col lg={{size: 4, offset: 0}}>
                <p className="text-primary title pt-0 mb-4">
                  With a child of a prisoner.
                </p>
                <p className="text-primary">
                  When Stephanie was 15 years old, her Dad
                  was sentenced to prison for 7 years in Ireland.
                  For her family, the consequences of this were
                  shattering.
                </p>
                <p className="text-primary">
                  For herself and her siblings, over the years
                  the previous relationship they had with their
                  Dad was lost.
                </p>
              </Col>

              <Col lg={{size: 5, offset: 2}} className="image-block">
                <img
                  className="img-fluid"
                  src={began1}
                  alt={'began-image'}
                />
              </Col>
            </Row>
            <Row className="">
              <Col lg={{size: 5, offset: 0}}>
                <img
                  className="img-fluid mb-lg-0 mb-md-5 mb-sm-4 mb-4"
                  src={began2}
                  alt={'began-image'}
                />
              </Col>

              <Col lg={{size: 5, offset: 1}} className="image-block">

                <p className="text-primary title pt-0 mb-lg-5 mb-md-4 mb-sm-3 mb-3">
                  Bringing LittleTalks to life
                </p>
                <p className="text-primary">
                  In 2017, after studying Visual Communications
                  in IADT, she decided to look at her own life for
                  inspiration for her graduate showcase project.
                  Looking back at this time in her life, she realised
                  that all the power of communications laid in the
                  hands of the person in prison. This is where the
                  idea for LittleTalks began.
                </p>
                <p className="text-primary">
                  Since then, she has continued her education
                  at NCAD with the MA in Communication Design
                  and further developed LittleTalks into a reality.
                  After 18 months of research, LittleTalks was
                  developed into what it is today. It has been
                  fuelled and led by leading industry experts
                  and advisees along the way.
                </p>
                <p className="text-primary">
                  Stephanie is now a member of the Action Trust
                  Network for the Children of Prisoners in Ireland.
                  She sees a long and positive future working in
                  the crossroads of design for social causes.
                </p>
              </Col>
            </Row>
          </Container>
        </div>


        <div className="section section-our-aims">
          <Container>
            <Row className="mb-lg-5 mb-md-4 mb-sm-3 mb-3 pb-lg-4 pb-md-4 pb-sm-1 pb-1">
              <Col>
                <h2 style={{textDecoration: 'underline'}}>Our Aims</h2>
              </Col>
            </Row>
            <Row>
              <Col lg={{size: 5}}>
                <div className="aims-block">
                  <div className="arrow-block"><i className="fa fa-arrow-right"/></div>
                  <div>
                    <h2>
                      To preserve and keep
                      the relationship bond
                      between a child and
                      their loved one who
                      is in prison,
                    </h2>
                  </div>
                </div>
                <div className="aims-block">
                  <div className="arrow-block"><i className="fa fa-arrow-right"/></div>
                  <div>
                    <h2>
                      To grow to help more
                      children whose loved
                      ones are separated
                      from them.
                    </h2>
                  </div>
                </div>
                <div className="aims-block">
                  <div className="arrow-block"><i className="fa fa-arrow-right"/></div>
                  <div>
                    <h2>
                      To bring awareness
                      to the effects of being
                      a child of a person in
                      prison.
                    </h2>
                  </div>
                </div>
              </Col>
              <Col lg={{size: 5, offset: 1}}>
                <div className="aims-block">
                  <div className="arrow-block"><i className="fa fa-arrow-right"/></div>
                  <div>
                    <h2>
                      To empower children
                      and be child-first in all
                      that it does.
                    </h2>
                  </div>
                </div>
                <div className="aims-block">
                  <div className="arrow-block"><i className="fa fa-arrow-right"/></div>
                  <div>
                    <h2>
                      To work with the prison
                      system and family
                      organisations in place
                      already.
                    </h2>
                  </div>
                </div>
                <div className="aims-block">
                  <div className="arrow-block"><i className="fa fa-arrow-right"/></div>
                  <div>
                    <h2>
                      To encourage creativity
                      and innovation in prison
                      system worldwide.
                    </h2>
                  </div>
                </div>
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
