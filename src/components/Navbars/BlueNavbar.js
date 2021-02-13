import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  Navbar,
  Container,
} from "reactstrap";

import blueLogo from "assets/img/brand/blueLogo.png"
import primaryLogo from "../../assets/img/brand/primaryLogo.png";

function BlueNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate blue-navbar">
            <a
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }} className="navbar-link d-lg-block d-md-block d-sm-none d-none" href="javascript:void(0)">
              Menu
            </a>
            <button
              className="navbar-toggler navbar-toggler d-lg-none d-md-none d-sm-block d-block"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
            <Link to="/">
              <img src={blueLogo} className="brand-logo" alt={'brand-logo'}/>
            </Link>
            <Link to={'contact'} className="navbar-link d-lg-block d-md-block d-sm-none d-none">
              Request a pack
            </Link>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <div className="sidebar">
              <div>
                <Button onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }} className="btn-link close-button" color="info">
                  <i className="now-ui-icons ui-1_simple-remove"/>
                </Button>
                <Link to={''} className="sidebar-link">Home</Link>
                <Link to={'how-it-works'} className="sidebar-link">How it works</Link>
                <Link to={'our-story'} className="sidebar-link">Our story</Link>
                <Link to={'contact'} className="sidebar-link">Contact us</Link>
              </div>
              <div className="sidebar-contact">
                <div className="d-flex mb-2"><span className="big-letter">E</span><a href="mailto:hello@littletalks.com">hello@littletalks.com</a></div>
                <div className="d-flex mb-2"><span className="big-letter">T</span><a href="tel:028 728 3748">028 728 3748</a></div>
                <div className="d-flex mb-2"><span className="big-letter">A</span><span>Galway, Ireland</span></div>

                <div className="d-flex align-items-center"><a href="#" className="social-link"><i className="fab fa-instagram"/></a><a href="#" className={"social-link"}><i className="fab fa-twitter"/></a><span className="ml-3">Follow us</span></div>
              </div>
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BlueNavbar;
