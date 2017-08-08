import React, { Component } from "react";
import Input from "./Input";
import InputError from "./InputError";
import { debounce } from "../utils";

class ValidatedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationStarted: props.value ? true : false
    };

    const startValidation = function() {
      this.setState({
        validationStarted: true
      });
    };

    this.prepareToValidate = debounce(startValidation, 300);
  }

  handleChange = e => {
    if (!this.state.validationStarted) {
      this.prepareToValidate();
    }
    this.props.onChange && this.props.onChange(e);
  };

  render() {
    const { error, ...props } = this.props;
    const validationStarted = this.state.validationStarted;
    return (
      <div>
        <Input
          {...props}
          onChange={this.handleChange}
          error={validationStarted && error}
        />
        {validationStarted &&
          error &&
          <InputError color="red">
            {error}
          </InputError>}
      </div>
    );
  }
}

export default ValidatedInput;
