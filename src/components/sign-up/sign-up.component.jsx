import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase.utils.js";

import * as styles from "./sign-up.styles";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <styles.SignUpContainer>
        <styles.TitleContainer as="h2">
          I do not have an account
        </styles.TitleContainer>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </styles.SignUpContainer>
    );
  }
}

export default SignUp;
