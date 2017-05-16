var React = require('react');

var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var Image = require('react-bootstrap/lib/Image');

var facebookImage = require('../static/assets/FB-f-Logo__white_29.png');

var facebookStyle = {
    width: 20,
    height: 'auto'
};

var navbarStyle = {
    marginBottom: 0
};

var NavBar = React.createClass({
    render() {
        return (
            <Navbar style={navbarStyle} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">iTech</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Repairs" id="repair-dropdown">
                            <MenuItem eventKey={3.1}>iPhone</MenuItem>
                            <MenuItem eventKey={3.2}>Android</MenuItem>
                            <MenuItem eventKey={3.3}>Desktop/Laptop</MenuItem>
                            <MenuItem eventKey={3.3}>Game Consoles</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="IT Services" id="it-services-dropdown">
                            <MenuItem eventKey={4.1}>Business</MenuItem>
                            <MenuItem eventKey={4.2}>Home/Personal</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={1} href="#">About Us</NavItem>
                        <NavItem eventKey={2} href="#">Contact</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={5} href="http://www.facebook.com/itechadvanced/">
                            <Image style={facebookStyle} src={facebookImage}/>
                        </NavItem>
                        <NavItem eventKey={6}>(520) 789-6296</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

module.exports = NavBar;
