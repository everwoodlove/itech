const React = require('react');

const Navbar = require('react-bootstrap/lib/Navbar');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const Image = require('react-bootstrap/lib/Image');

const facebookImage = require('../static/photos/FB-f-Logo__white_29.png');

const NavBar = React.createClass({
    render() {
        const facebookStyle = {
            width: 20,
            height: 'auto'
        };

        const navbarStyle = {
            marginBottom: 0
        };

        return (
            <Navbar style={navbarStyle} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">
                            iTech
                        </a>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Repairs" id="repair-dropdown">
                            <MenuItem eventKey={1.1}>
                                iPhone
                            </MenuItem>
                            <MenuItem eventKey={1.2}>
                                Android
                            </MenuItem>
                            <MenuItem eventKey={1.3}>
                                Desktop/Laptop
                            </MenuItem>
                            <MenuItem eventKey={1.4}>
                                Game Consoles
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="IT Services" id="it-services-dropdown">
                            <MenuItem eventKey={2.1}>
                                Business
                            </MenuItem>
                            <MenuItem eventKey={2.2}>
                                Home/Personal
                            </MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="#">
                            About Us
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            Contact
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={5} href="http://www.facebook.com/itechadvanced/">
                            <Image style={facebookStyle} src={facebookImage}/>
                        </NavItem>
                        <NavItem eventKey={6}>
                            (520) 789-6296
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

module.exports = NavBar;
