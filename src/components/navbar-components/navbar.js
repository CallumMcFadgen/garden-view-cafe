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
      <Navbar light expand="md" style={{color: 'white', border: 'thin black solid'}}>>
        <NavbarBrand href="/">Garden View Cafe</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu-page">Menu  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/events-page">Events  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery-page">Gallery  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-page">Contact    </NavLink>
            </NavItem>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="facebook" url="https://www.facebook.com" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="twitter" url="https://twitter.com" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="instagram" url="https://www.instagram.com" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
            <NavItem>
              <div className="header-sm-icons-ui">
                <SocialIcon network="pinterest" url="https://www.pinterest.nz" style={{ height: 20, width: 20 }} bgColor="#4d4d4d" />
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
