import { gql } from "apollo-server-express";
export default gql`
	extend type Mutation {
		signUp(
			name: String!
			email: String!
			phone: String!
			address: String
			zipcode: String
			profilephoto: Upload
			documents: Upload
		): User!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		phone: String!
		address: String
		zipcode: String
		profilephoto: File
		documents: File
	}

	type File {
		filename: String!
		mimetype: String!
		encoding: String!
	}
`;
