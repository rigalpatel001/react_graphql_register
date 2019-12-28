import { AuthenticationError, UserInputError } from "apollo-server";

export default {
	Mutation: {
		signUp: async (
			parent,
			{ name, email, phone, address, zipcode, profilephoto, documents },

			{ models, secret }
		) => {
			profilephoto.then(file => {
				const { createReadStream, filename, mimetype } = file;
				const fileStream = createReadStream();
				fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${filename}`));
				//return file;
			});

			// const profilephoto1 = "111";
			// const documents1 = "100";

			const user = await models.User.create({
				name,
				email,
				phone,
				address,
				zipcode,
				profilephoto,
				documents
			});
			return user;
		}
	}
};
