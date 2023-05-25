const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs");

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	phonenum: { type: Number, required: true, unique: true },
}, {
	timestamps: true,
});

userSchema.methods.matchPassword = function (enterterdPassword) {
	return bcrypt.compare(enterterdPassword, this.password);
};

userSchema.pre("save", async function (next) {
	if (!this.isModified) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);

});
const User = mongoose.model("User", userSchema);

module.exports = User;