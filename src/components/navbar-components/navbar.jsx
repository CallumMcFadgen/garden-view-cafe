import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="xl" style={{color: 'white', border: 'thin black solid'}}>>
        <NavbarBrand href="/"><span style={{fontWeight: '800', color: 'black'}}>Garden View</span> Café</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <span>&nbsp;&nbsp;</span>
            <NavItem>
              <NavLink href="/menu-page">Menu</NavLink>
            </NavItem>
            <span>&nbsp;&nbsp;</span>
            <NavItem>
              <NavLink href="/events-page">Events</NavLink>
            </NavItem>
            <span>&nbsp;&nbsp;</span>
            <NavItem>
              <NavLink href="/gallery-page">Gallery</NavLink>
            </NavItem>
            <span>&nbsp;&nbsp;</span>
            <NavItem>
              <NavLink href="/contact-page">Contact</NavLink>
            </NavItem>
            <span>&nbsp;&nbsp;</span>
            <NavItem>
              <NavLink href="/admin-page">Admin</NavLink>
            </NavItem>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="facebook" url="https://www.facebook.com" style={{ height: 30, width: 30 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="twitter" url="https://twitter.com" style={{ height: 30, width: 30 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="instagram" url="https://www.instagram.com" style={{ height: 30, width: 30 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="pinterest" url="https://www.pinterest.nz" style={{ height: 30, width: 30 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
