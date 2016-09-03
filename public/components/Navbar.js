import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TGA Xchange';
  }

  render() {
    return (
      <div className="header">
            <header>
              <div className="navigation">
                  <Navbar fixedTop className="navbar-inner">
                    <Navbar.Header>
                      <Navbar.Brand>
                        <a id="logo" href="#">{this.displayName}</a>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Nav pullRight>
                        <NavItem eventKey={1} href="#">Login</NavItem>
                        <NavItem eventKey={2} href="#">Playbook</NavItem>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </div>
                <div>
                  <img id="banner" className="img-responsive"src="../images/headerphoto.jpg"/>
                </div>
              </header>
          </div>
    );
  }
}

export default NavBar;
