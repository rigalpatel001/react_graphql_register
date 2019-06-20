import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import Signupform from "../components/Signupform";
import App from "../components/App";
import Header from "../components/Header";

class Signup extends React.Component {
	static async getInitialProps({ query }) {
		const { id } = query;
		return { id };
	}
	render() {
		// if (typeof this.props.id == "undefined") return (<App><Header /><Projectform /></App>);
		return (
			<App>
				<Header />
				<Signupform />
			</App>
		);
	}
}

export default Signup;
