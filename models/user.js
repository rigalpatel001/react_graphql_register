import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		minlength: 2,
		maxlength: 50,
		unique: true,
		validate: {
			validator: function(v) {
				return /^[a-zA-Z0-9._-]{5,50}$/.test(v);
			},
			message: props => `${props.value} is not a valid username!`
		},
		required: [true, "User username required"]
	},
	email: {
		type: String,
		required: true,
		maxlength: 100,
		validate: [isEmail, "Please input valid email address!"],
		unique: true
	},
	phone: {
		type: String,
		validate: {
			validator: function(v) {
				//return /\d{3}-\d{3}-\d{4}/.test(v);
				return /^[0-9-+s()]*$/.test(v);
			},
			message: props => `${props.value} is not a valid phone number!`
		},
		required: [true, "User phone number required"]
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	}
});

userSchema.statics.findByLogin = async function(login) {
	let user = await this.findOne({
		username: login
	});

	if (!user) {
		user = await this.findOne({
			email: login
		});
	}

	return user;
};

userSchema.pre("save", async function() {
	this.password = await this.generatePasswordHash();
});

userSchema.methods.generatePasswordHash = async function() {
	const saltRounds = 10;
	return await bcrypt.hash(this.password, saltRounds);
};

userSchema.methods.validatePassword = async function(password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
