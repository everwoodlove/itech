const React = require('react');
const NavBar = require('./NavBar');
const Marquee = require('./Marquee');
const Contact = require('./Contact');
const Features = require('./Features');

const backgroundImage = require('../static/photos/meeting.jpg');

const App = React.createClass({
    render() {
        return (
            <div>
                <NavBar />
                <Marquee backgroundImage={backgroundImage}/>
                <Features />
                <Contact backgroundColor="#efefef"/>
            </div>
        );
    }
});

module.exports = App;