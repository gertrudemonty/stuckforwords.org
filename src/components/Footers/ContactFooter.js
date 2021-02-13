/*eslint-disable*/
import React from "react";

// reactstrap components
import {Button, Col, Container, Input, InputGroupText, Row} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function ContactFooter() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  return (
    <>
      <div className="section section-contact-us" id="contact-us">
        <Container>
          <Row className="align-items-end">
            <Col lg="5" md="12">
              <h2 className="text-info pt-0">
                Contact us in the <br/>
                general enquiries form
                here or <Link to="/contact"><span className="text-underline">go to this page.</span></Link>
              </h2>
              <p className="description text-info">
                Contact us for more information or if you
                are a carer of a child who would like to use
                LittleTalks, then please fill out the form
                <span className="text-underline pl-1">here.</span>
              </p>
              <p className="description text-info">
                <div className="d-flex mb-2"><span className="big-letter">E</span><a
                  href="mailto:hello@littletalks.com">hello@littletalks.com</a></div>
                <div className="d-flex mb-2"><span className="big-letter">A</span><span>Galway, Ireland</span></div>

                <div className="d-flex align-items-center">
                    <span className="">Follow us on <a className="text-underline"
                                                       href="#">Instagram.</a></span></div>
              </p>
            </Col>
            <Col lg={{size: 5, offset: 1}}>
              <Input
                className="form-control-lg"
                aria-describedby="textHelp"
                id="inputName"
                placeholder="Your name"
                type="text"
              />
              <Input
                className="form-control-lg"
                aria-describedby="emailHelp"
                id="inputEmail"
                placeholder="Your email"
                type="email"
              />
              <div className="textarea-container">
                <Input
                  cols="140"
                  name="name"
                  placeholder="Your message..."
                  rows="4"
                  type="textarea"
                />
              </div>
              <div className="send-button">
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  outline
                  size="lg"
                >
                  Send
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactFooter;
