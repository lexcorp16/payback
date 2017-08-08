import React, { Component } from "react";
import { Button, Div, H1, ValidatedInput } from "../../components";
import validate from "validate.js";

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "kachi@paystack.com",
      password: "123456"
    };

    this.constraints = {
      email: {
        email: true
      },
      password: {
        length: { minimum: 6 }
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/requests");
  };

  render() {
    const errors = validate(this.state, this.constraints);

    return (
      <form onSubmit={this.handleSubmit}>
        <H1 align="center" bold mb={4} fontSize={4} color="textPrimary">
          Payback
        </H1>
        <Div mb={1}>
          <ValidatedInput
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            error={errors && errors.email}
            value={this.state.email}
            color="textPrimary"
          />
        </Div>
        <Div mb={3}>
          <ValidatedInput
            placeholder="Password"
            type="password"
            name="password"
            fontSize={2}
            onChange={this.handleChange.bind(this)}
            error={errors && errors.password}
            value={this.state.password}
            color="textPrimary"
          />
        </Div>
        <Button disabled={errors}>Login</Button>
      </form>
    );
  }
}

export default LoginForm;
