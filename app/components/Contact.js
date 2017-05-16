var React = require('react');

var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Col = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');

var Contact = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    render() {
        return (
            <Col xs={12} md={12} style={{backgroundColor: this.props.backgroundColor}}>
                <div>
                    <h1 style={{textAlign: 'center'}}>Contact Us</h1>
                    <Col xs={3} md={2}/>

                    <Col sm={12} md={8}>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <Col sm={12} md={8}>
                                    <Col xs={4} md={2}>
                                        <ControlLabel>Name:</ControlLabel>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <FormControl
                                            type="text"
                                            value={this.state.value}
                                        />
                                    </Col>
                                </Col>


                                <Col sm={12} md={8}>
                                    <Col xs={4} md={2}>
                                        <ControlLabel>Email:</ControlLabel>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <FormControl
                                            type="text"
                                            value={this.state.value}
                                        />
                                    </Col>
                                </Col>

                                <Col sm={12} md={8}>
                                    <Col xs={4} md={2}>
                                        <ControlLabel>Message:</ControlLabel>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <FormControl
                                            type="text"
                                            value={this.state.value}
                                        />
                                    </Col>
                                </Col>
                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Col>

                    <Col xs={3} md={2}/>
                </div>
                <div>
                    <Button bsStyle="primary" type="submit"> Submit </Button>
                </div>
            </Col>
        );
    }
});

module.exports = Contact;