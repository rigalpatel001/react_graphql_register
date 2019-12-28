import "dotenv/config";
const express = require("express");
const nextApp = require("next");
const bodyParser = require("body-parser");
import { ApolloServer, AuthenticationError, gql } from "apollo-server-express";

import schema from "./schema";
import resolvers from "./resolvers";
import models, { sequelize } from "./models";

const port = parseInt(process.env.PORT, 10) || 5500;
const dev = process.env.NODE_ENV !== "production";
const app = nextApp({
	dev
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	const apolloServer = new ApolloServer({
		typeDefs: schema,
		resolvers,
		formatError: error => {
			// remove the internal sequelize error message
			const message = error.message
				.replace("SequelizeValidationError: ", "")
				.replace("Validation error: ", "");

			return {
				...error,
				message
			};
		},
		context: async ({ req }) => {
			//const me = await getMe(req);
			return {
				models
			};
		}
	});

	apolloServer.applyMiddleware({
		app: server
	}); // app is from an existing express app

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	sequelize.sync({ force: false }).then(async () => {
		server.listen(port, error => {
			if (error) throw error;
			console.log(`Server started on http://localhost:${port}`);
		});
	});
});
