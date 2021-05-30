import React, { Component } from "react";
import './header.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { NavLink ,Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);

  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  



  render() {
    return (
      <div>
        <Navbar dark expand="md" className="navbar ">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src={process.env.PUBLIC_URL+"/images/logo/heritage-connect-logo.png"}
                height="150"
                width="160"
                alt="Heritage Connect"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/clubs">
                    <span className="fa fa-info fa-lg" /> Clubs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/feeds">
                    <span className="fa fa-list fa-lg" /> Feeds
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <Link to="/auth/login">
                  <Button outline hre>
                    <span className="fa fa-sign-in fa-lg" /> Login
                  </Button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        
        
      </div>
    );
  }
}

export default Header;