import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";


// core components
import LightNavbar from "components/Navbars/LightNavbar.js";
import HowItWorksHeader from "../components/Headers/HowItWorksHeader";
import ContactFooter from "../components/Footers/ContactFooter";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import blob from "assets/img/how-it-works/blob.png"
import HowItSlides from "../components/Sliders/HowItSlides";

const kitItems = [
  {
    title: 'Sharing Information',
    content: 'The workbook for the child is all about sharing information about themself and their life with their loved one in prison. In the Guidebook for the person in prison, they have lots of prompts and questions that they can use to help the process of sharing themself with their child too. We want you to be able to learn new things about each other.',
    src: require("assets/img/how-it-works/kitImg1.jpg"),
    subContent: 'We hope to cater to more programs soon.',
  },
  {
    title: 'Games',
    content: 'Another aspect of the workbook is the games chapter. All the games included are ones that can be played through the mail, over distance and time. This creates a new avenue for communication and is an injection of fun and playfulness into your relationship, at a time where that may be hard to find. The guidebook includes instructions on all the games.',
    src: require("assets/img/how-it-works/kitImg2.jpg"),
    subContent: 'Have you a child who would like to use our LittleTalks kits?',
  },
  {
    title: 'Learning Together',
    content: 'Included in the kit is a pack of cards; the Learning Together cards. In this pack are Outcome and Topic cards, with the instructions stated in the carers guide and Guidebook for the person in prison. You can both undertake a research project on a topic you wish, creating an outcome you pick. This allows for a chance to learn about each other\'s interest and skills.\n',
    src: require("assets/img/how-it-works/kitImg3.jpg"),
    subContent: 'We cater to all literacy levels.',
  },
]


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
      <LightNavbar/>
      <div className="wrapper">
        <HowItWorksHeader/>
        <div className="section section-whats-in-the-kit" id="whats-in-the-kit">
          <Container>
            <Row className="mb-lg-5 mb-md-4 mb-sm-3 mb-3">
              <Col>
                <h2 className="text-info text-underline">What’s in the kit?</h2>
              </Col>
            </Row>
            {kitItems.map(kitItems => {
              return (
                <Row key={kitItems.src}>
                  <Col lg={{size: 5, offset: 0}}>
                    <p className="text-info title pt-0 mb-4">
                      {kitItems.title}
                    </p>
                    <p className="text-info">
                      {kitItems.content}
                    </p>
                  </Col>

                  <Col lg={{size: 6, offset: 1}} className="image-block">
                    <img
                      className="kit-image"
                      src={kitItems.src}
                      alt={'kit-image'}
                    />

                    <div className="blob-block">
                      <img
                        className=""
                        src={blob}
                        alt={'blob-image'}
                      />
                      <small>{kitItems.subContent}</small>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </div>


        <div className="section-how-it-slides">
          <HowItSlides/>
        </div>

        <ContactFooter/>
        <DefaultFooter/>
      </div>
    </>
  );
}

export default HowItWorks;
