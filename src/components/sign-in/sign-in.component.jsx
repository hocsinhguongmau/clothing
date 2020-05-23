import React, {Component} from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils.js";

import "./sign-in.styles.scss";

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}
	handleSubmit = e => {
		e.preventDefault();
	};
	handleChange = e => {
		const {value, name} = e.target;
		this.setState({[name]: value});
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						value={this.state.email}
						name="email"
						required
						handleChange={this.handleChange}
						label="email"
					/>
					<FormInput
						type="password"
						value={this.state.password}
						name="password"
						required
						handleChange={this.handleChange}
						label="password"
					/>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle}>
						Sign in with Google
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
