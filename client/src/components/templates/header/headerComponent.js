import React, { Component } from "react";
import './header.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button
} from "reactstrap";
import * as Ai from 'react-icons/ai';
import * as Md from 'react-icons/md';
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
                  <i><Ai.AiOutlineHome size={25} /></i> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/clubs">
                  <i><Md.MdLocalActivity size={25} /></i> Clubs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/feeds">
                  <i><Md.MdRssFeed size={25} /></i> Feeds
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                  <i><Md.MdFeedback size={25} /></i> Contact Us
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