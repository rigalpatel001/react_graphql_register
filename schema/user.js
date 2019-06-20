import { gql } from 'apollo-server-express';

export default gql`
	extend type Query {
		getUsers: [User!]
		getUserById(id: ID!): User
		me: User
	}
	extend type Mutation {
		signUp(
			username: String!
			email: String!
			phone: String!
			password: String!
		): Token!
		signIn(login: String!, password: String!): Token!
	}
	type Token {
		token: String!
	}
	type User {
		id: ID!
		username: String!
		email: String!
		phone: String!
	}
`;
