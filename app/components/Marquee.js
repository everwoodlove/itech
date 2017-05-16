const React = require('react');

const Jumbotron = require('react-bootstrap/lib/Jumbotron');
const Button = require('react-bootstrap/lib/Button');

const Marquee = React.createClass({
    render() {
        const textColor = {
            color: 'white',
            textAlign: 'center'
        };

        const marqueeBackground = {
            backgroundImage: 'url(' + this.props.backgroundImage + ')',
            backgroundSize: '100%'
        };

        return (
            <Jumbotron style={marqueeBackground}>
                <h1 style={textColor}>Let's make it easy.</h1>
                <br/>
                <h2 style={textColor}>From device repairs to in-home and business technology services, we've got you
                    covered.</h2>
            </Jumbotron>
        );
    }
});

module.exports = Marquee;
