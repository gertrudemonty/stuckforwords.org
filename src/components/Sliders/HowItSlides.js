import React, {Component} from "react";
import Slider from "react-slick";
import {Button, Col, Container, Row} from "reactstrap";

const howItSlides = [
  {
    title: 'How does it work',
    paragraph1: 'Working with the Irish Prison Service, we engage with an informal and formal support inside the prison to help get access and support across to all people in prison who require it.',
    src: require("../../assets/img/how-it-works/howitslides1.png"),
    bgColor: 'bg-primary',
    textColor: 'text-white',
    buttonColor: 'neutral'
  },
  {
    title: 'Signing up?',
    paragraph1: 'If a person in prison has signed up to use\n' +
      'the LittleTalks kit for a child themselves and\n' +
      'a close child relative, the carer will receive\n' +
      'a form of consent to this decision.',
    paragraph2: 'Without this form, a prisoner cannot use any LittleTalks material to contact a child.',
    src: require("../../assets/img/how-it-works/howitslides2.png"),
    bgColor: 'bg-white',
    textColor: 'text-blue',
    buttonColor: 'blue'
  },
  {
    title: 'Sign up a child',
    paragraph1: 'If you have heard about LittleTalks from somewhere else, and would like to sign up. Please go to the contact page and in the ‘For Families’ section you will see the form to sign up your child.',
    paragraph2: 'You will need the prison number of the person in prison who you want to use the kit with.',
    src: require("../../assets/img/how-it-works/howitslides3.png"),
    bgColor: 'bg-beige',
    textColor: 'text-primary',
    buttonColor: 'primary'
  },
  {
    title: 'When you get the kit',
    paragraph1: 'Once we have things confirmed,\n' +
      'we send you out your kit and pack\n' +
      'to the child and person in prison.',
    paragraph2: 'Or you can choose to collect it at\n' +
      'your local Support Centre.',
    src: require("../../assets/img/how-it-works/howitslides4.png"),
    bgColor: 'bg-primary',
    textColor: 'text-white',
    buttonColor: 'neutral'
  },
  {
    title: 'Continued Support',
    paragraph1: 'If consent if given when signing up,\n' +
      'we follow up sporadically with postcards,\n' +
      'reminders and gestures to make sure\n' +
      'your child still feels supported.',
    src: require("../../assets/img/how-it-works/howitslides5.png"),
    bgColor: 'bg-white',
    textColor: 'text-blue',
    buttonColor: 'blue'
  },
  {
    title: 'Your Support Centre',
    paragraph1: 'Working with your local Support Centre,\n' +
      'we have a LittleTalks liason there who can\n' +
      'help you with any questions or facilitate\n' +
      'support for a child using the LittleTalks kit\n' +
      'who may need a little help with it.',
    paragraph2: 'In your local Support Centre, there will\n' +
      'be a LittleTalks hub. A place for your child\n' +
      'to work on their workbook, leave some\n' +
      'post or collect post if they wish.',
    src: require("../../assets/img/how-it-works/howitslides6.png"),
    bgColor: 'bg-beige',
    textColor: 'text-primary',
    buttonColor: 'primary'
  },
  {
    title: 'Our Workshops',
    paragraph1: 'LittleTalks also facilitates workshops for children and their loved ones in prison. These are like ‘Presentation Days’, where a child gets to take a moment to show they’re proud of their loved one, and the person in prison gets to show off their child to everyone there.',
    src: require("../../assets/img/how-it-works/howitslides7.png"),
    bgColor: 'bg-primary',
    textColor: 'text-white',
    buttonColor: 'neutral'
  },
]


export default class HowItSlides extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {howItSlides.map(howItSlides => {
            return (
              <div className={"slider-block" + " " + (howItSlides.bgColor) + " " + (howItSlides.textColor)} key={howItSlides.src}>
                <Container>
                  <Row className="align-items-start">
                    <Col className="text-left">
                      <h2 className="title text-underline">
                        {howItSlides.title}
                      </h2>
                      <p className="text">
                        {howItSlides.paragraph1}
                      </p>
                      <p className="text">
                        {howItSlides.paragraph2}
                      </p>
                    </Col>
                    <Col lg={{size: 7, offset: 0}}>
                      <img src={howItSlides.src} className="img-fluid" alt={'howItWorksIntro'}/>
                    </Col>
                  </Row>
                </Container>
                <div className="button-block">
                  <Button
                    className="btn-round arrow-left"
                    color={howItSlides.buttonColor}
                    outline
                    size="lg"
                    onClick={this.previous}
                  >
                    <i className="fa fa-arrow-left"/>
                  </Button>
                  <Button
                    className="btn-round arrow-left"
                    color={howItSlides.buttonColor}
                    outline
                    size="lg"
                    onClick={this.next}
                  >
                    <i className="fa fa-arrow-right"/>
                  </Button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
