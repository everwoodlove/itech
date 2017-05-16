const React = require('react');

const FormGroup = require('react-bootstrap/lib/FormGroup');
const FormControl = require('react-bootstrap/lib/FormControl');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');
const Col = require('react-bootstrap/lib/Col');
const Button = require('react-bootstrap/lib/Button');
const ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar')

const Contact = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    render() {

        return (
            <Col xs={12} md={12} style={{backgroundColor: this.props.backgroundColor}}>
                <h1 style={{textAlign: 'center'}}>
                    Contact Us
                </h1>

                <Col md={8} mdOffset={2}>
                    <form>
                        <FormGroup controlId="formBasicText">
                            <Col md={6}>
                                <ControlLabel>
                                    <h4>First Name</h4>
                                </ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.value}
                                />
                            </Col>

                            <Col md={6}>
                                <ControlLabel>
                                    <h4>Last Name</h4>
                                </ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.value}
                                />
                            </Col>
                            <Col md={6}>
                                <ControlLabel>
                                    <h4>Email Address</h4>
                                </ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Email Address"
                                    value={this.state.value}
                                />
                            </Col>

                            <Col md={6}>
                                <ControlLabel>
                                    <h4>Phone Number</h4>
                                </ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Phone Number"
                                    value={this.state.value}
                                />
                            </Col>

                            <Col md={12}>
                                <ControlLabel>
                                    <h4>Message</h4>
                                </ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Enter your feedback, message, or issue"
                                    value={this.state.value}
                                />
                            </Col>

                            <FormControl.Feedback />

                        </FormGroup>
                    </form>
                    <Col xs={8} md={6} mdOffset={3}>
                        <Button bsStyle="primary" type="submit" block style={{marginTop: 20}}>
                            Send Your Message
                        </Button>
                    </Col>
                </Col>
            </Col>
        );
    }
});

module.exports = Contact;