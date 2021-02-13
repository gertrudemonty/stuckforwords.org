import React from "react";
import ReactPlayer from 'react-player';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col, Modal
} from "reactstrap";
import {Link} from "react-router-dom";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// core components
import LightNavbar from "components/Navbars/LightNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import ContactFooter from "../components/Footers/ContactFooter";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import homeImg1 from "assets/img/homeImg1.jpg"
import workShops from "assets/img/workshops.jpg"
import playIcon from "assets/img/icons/play-icon.png"
import mapImg from "assets/img/map.svg"

const programs = [
  {
    uuid: 'a',
    title: 'The Cloud Program',
    criteria: 'This program is for people in prison who are male who have a close child relative under the age of 12.',
    location: 'This is available in Castlerea Prison, Co. Roscommon Ireland.',
    method: 'Please contact us in the contact form or email us on the contact page.',
  },

  {
    uuid: 'b',
    title: 'The Moon Program',
    criteria: 'This program is for people in prison who are male and from the Travelling Community, who also have a close child relative under the age of 12.',
    location: 'This is available in Castlerea Prison, Co. Roscommon Ireland.',
    method: 'Please contact us in the contact form or email us on the contact page.',
  },

  {
    uuid: 'c',
    title: 'The Sun Program',
    criteria: 'This program is for people in prison who are female who have a close child relative under the age of 12.',
    location: 'Coming soon.',
    method: 'Please contact us in the contact form or email us on the contact page.',
  },

]


function HomePage() {
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

  const [modalLive1, setModalLive1] = React.useState(false);

  return (
    <>
      <LightNavbar/>
      <div className="wrapper">
        <LandingPageHeader/>
        <div className="section section-about-us" id="more">
          <Container>
            <Row>
              <Col lg="6">
                <img
                  className="img-fluid mb-3 "
                  src={homeImg1}
                />
                <img
                  className="img-fluid"
                  src={workShops}
                />
              </Col>
              <Col lg={{size: 5, offset: 1}}>
                <h3 className="title text-info mb-lg-5 mb-md-4 mb-sm-3 mb-3">
                  LittleTalks creates tools of
                  communication that are for
                  the child first and foremost.
                </h3>
                <p className="text-info">
                  LittleTalks’ aims to protect the bond between children
                  and their loved ones in prison. It does this by using
                  alternative tools of communication that are consumable
                  in programmes for the child first and fore mostly.
                </p>
                <p className="text-info">
                  These tools of communication consist of information
                  sharing, learning together and games. They are made
                  available in the form of a kit for the child and a pack for
                  the prisoner to work on together.
                </p>
                <Button
                  className="btn-round"
                  color="primary"
                  to="/our-story"
                  outline
                  tag={Link}
                  size="lg"
                >
                  Our Story
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="full-page-video"
             style={{
               backgroundImage: "url(" + require("assets/img/video-thumbnail.jpg") + ")",
             }}>

          <Modal toggle={() => setModalLive1(false)} isOpen={modalLive1} className="modal-dialog-centered video-modal modal-xl">
            <div className="modal-body p-0">
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={() => setModalLive1(false)}
              >
                <span aria-hidden={true}><i className="fa fa-times"/></span>
              </button>
              <div className="wrapper-video">
                <ReactPlayer url='https://youtu.be/R3tTO_-AcD4'
                             config={{
                               youtube: {
                                 playerVars: { showinfo: 1 }
                               },
                             }}
                             className='player-block'
                             width={'100%'} height={'100%'} controls={true} playing style={{margin: 'auto'}}/>
              </div>
            </div>
          </Modal>
          <Button className="video-link btn-link" onClick={() => setModalLive1(true)}>
            <img
              className=""
              src={playIcon}
            />
          </Button>

        </div>
        <div className="section section-programmes">
          <Container>
            <Row>
              <Col lg="6">
                <h2 className="text-info" style={{textDecoration: 'underline'}}>What are the programmes?</h2>
                <p className="text-info">
                  The Irish Prison System in Ireland is very unique.
                  Each prison is run differently, therefore to design
                  a program for the child and their close relative that
                  could be effective, it would need to be prison specific
                  and cater to a specific literacy level.
                </p>
                <p className="text-info">
                  LittleTalks’  is currently available at Castlerea Prison
                  If you would like it to be available in a prison near you,
                  contact us via the form below.
                </p>

                <Accordion  preExpanded={['a']}>
                  {programs.map((item) => (
                    <AccordionItem key={item.uuid} uuid={item.uuid}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span className="title accordion-header">{item.title}</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-content">
                          <div className="accordion-content-list">
                            <div className="accordion-content-header">Criteria:</div>
                            <div className="accordion-content-text">{item.criteria}</div>
                          </div>
                          <div className="accordion-content-list">
                            <div className="accordion-content-header">Where is it available?</div>
                            <div className="accordion-content-text">{item.location}</div>
                          </div>
                          <div className="accordion-content-list">
                            <div className="accordion-content-header">How to request it?</div>
                            <div className="accordion-content-text">{item.method}</div>
                          </div>


                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Col>
              <Col lg="6">
                <img src={mapImg} className="img-fluid"/>
              </Col>
            </Row>
            <div className="text-center mt-5">
              <Button
                className="btn-round"
                color="primary"
                to="/how-it-works"
                outline
                tag={Link}
                size="lg"
              >
                What’s involved?
              </Button>
            </div>
          </Container>
        </div>
        <ContactFooter/>
        <DefaultFooter/>
      </div>
    </>
  );
}

export default HomePage;
