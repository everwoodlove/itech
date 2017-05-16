var React = require('react');
var NavBar = require('./NavBar');
var Marquee = require('./Marquee');
var Contact = require('./Contact');
var Features = require('./features');

var backgroundImage = require('../static/assets/meeting.jpg');

var App = React.createClass({
    render() {
        return (
            <div>
                <NavBar />
                <Marquee backgroundImage={backgroundImage}/>
                <Features />
                <Contact backgroundColor='lightblue'/>
            </div>
        );
    }
});

module.exports = App;