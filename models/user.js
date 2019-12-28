const user = (sequelize, DataTypes) => {
	const User = sequelize.define("user", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true,
				isEmail: true
			}
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		address: {
			type: DataTypes.STRING
		},
		zipcode: {
			type: DataTypes.STRING,
			allowNull: false
		},
		profilephoto: {
			type: DataTypes.STRING,
			allowNull: false
		},
		documents: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	return User;
};
export default user;
