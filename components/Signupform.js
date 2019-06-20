import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import Router from "next/router";
import Joi from "joi-browser";

const SIGNUP = gql`
	mutation signUp(
		$username: String!
		$email: String!
		$phone: String!
		$password: String!
	) {
		signUp(
			username: $username
			email: $email
			phone: $phone
			password: $password
		) {
			token
		}
	}
`;

const schema = {
	username: Joi.string()
		.required()
		.min(2)
		.max(50)
		.error(errors => {
			return {
				message: "Username cannot be empty and length should between 2 and 50!"
			};
		}),
	email: Joi.string()
		.required()
		.email()
		.max(100)
		.error(errors => {
			return {
				message:
					"Email cannot be empty and Email should be valid email address!"
			};
		}),
	password: Joi.string()
		.required()
		.min(5)
		.max(50)
		.error(errors => {
			return {
				message:
					"Password cannot be empty and it's length should between 5 and 50!"
			};
		})
};

class Signupform extends React.Component {
	state = {
		username: "",
		email: "",
		phone: "",
		password: "",
		errors: ""
	};
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	validate(username, email, password) {
		let errors = "";
		const result = Joi.validate(
			{
				username: username,
				email: email,
				password: password
			},
			schema
		);
		if (result.error) {
			errors = result.error.details[0].message;
		}
		return errors;
	}

	render() {
		let input;
		const { errors } = this.state;

		return (
			<Mutation mutation={SIGNUP}>
				{(signUp, { loading, error }) => (
					<div>
						<form
							onSubmit={e => {
								e.preventDefault();
								const errors = this.validate(
									e.target.username.value,
									e.target.email.value,
									e.target.password.value
								);
								if (errors) {
									this.setState({ errors });
									return;
								}
								if (!errors) {
									signUp({
										variables: {
											username: e.target.username.value,
											email: e.target.email.value,
											phone: e.target.phone.value,
											password: e.target.password.value
										}
									})
										.then(() => Router.push("/"))
										.catch(res => {
											const errors = res.graphQLErrors.map(error => {
												return error.message;
											});
											this.setState({ errors: errors[0] });
											return;
											//this.setState({ errors });
										});
								}
							}}
						>
							{errors && <p>{errors}</p>}
							<input
								type="text"
								name="username"
								id="name"
								placeholder="User Name"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="Email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
							<input
								type="text"
								name="phone"
								id="phone"
								placeholder="Phone"
								value={this.state.phone}
								onChange={this.handleChange}
							/>
							<input
								type="password"
								name="password"
								id="password"
								value={this.state.password}
								placeholder="Password"
								onChange={this.handleChange}
							/>

							<button type="submit">Register</button>
							<style jsx>{`
								form {
									border-bottom: 1px solid #ececec;
									padding-bottom: 20px;
									margin-bottom: 20px;
								}
								h1 {
									font-size: 20px;
								}
								input {
									display: block;
									margin-bottom: 10px;
								}
								form button {
									margin-right: 10px;
								}
								form p {
									color: red;
								}
							`}</style>
						</form>
						{loading && <span>Loading...</span>}
					</div>
				)}
			</Mutation>
		);
	}
}

export default Signupform;
