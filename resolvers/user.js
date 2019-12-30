const fs = require("fs");
function ProfileImage(argsprofilephoto) {
	return argsprofilephoto
		.then(profilephoto => {
			const { createReadStream, filename, mimetype } = profilephoto;
			const fileStream = createReadStream();
			fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${filename}`));
			return filename;
		})
		.catch(e => {
			// you might want to return some sensible default depending on your usecase, or let the error bubble up by not catching
			console.log(e);
		});
}
export default {
	Mutation: {
		signUp: async (parent, args, { models, secret }) => {
			try {
				let profimgnm = "";
				let docimgnm = "";
				// Prfile Photo  Upload
				if (args.profilephoto != "") {
					profimgnm = await ProfileImage(args.profilephoto);
				}
				if (args.documents != "") {
					docimgnm = await ProfileImage(args.documents);
				}
				let name = args.name;
				let email = args.email;
				let phone = args.phone;
				let address = args.address;
				let zipcode = args.zipcode;
				let profilephoto = profimgnm;
				let documents = docimgnm;
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
			} catch (err) {
				//console.log(err);
			}
		}
	}
};
