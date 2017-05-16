var React = require('react');

var Col = require('react-bootstrap/lib/Col');
var Image = require('react-bootstrap/lib/Image');

var arizona = require('../static/assets/phoenix.jpg');
var money = require('../static/assets/creditcard.jpg');
var car = require('../static/assets/car.jpg');

var Features = React.createClass({
    render() {
        var featureImageStyle = {
            width: 150,
            height: 150,
            display: 'block',
            margin: 'auto',
            borderRadius: 100,
            WebkitBorderRadius: 100,
            MozBorderRadius: 100
        };

        return (
            <Col xd={12} md={12} style={{textAlign: 'center'}}>
                <h1>Why iTech?</h1>
                <br/>
                <Col xs={6} md={4}>
                    <Image src={arizona} style={featureImageStyle} circle responsive></Image>
                    <h3>Support small business</h3>
                    <p>We are founded and ran in Phoenix, Arizona with a focus on supporting the people and small businesses of the city.</p>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={money} style={featureImageStyle} circle responsive></Image>
                    <h3>Low prices</h3>
                    <p>Being a small business means that we have less overhead and no middle man, which means we can offer you lower prices than others.</p>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={car} style={featureImageStyle} circle responsive></Image>
                    <h3>On-call services</h3>
                    <p>Since we have no store front, we come to you! Whether its at your home, your work or just meeting to grab a cup of coffee, we can meet you there.</p>
                </Col>
            </Col>
        );
    }
});

module.exports = Features;