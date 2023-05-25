const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const {isEmpty} = require("lodash");

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, phonenum, password } = req.body;
	if (!name || !email || !password || !phonenum) {
		res.status(400);
		throw new Error("Please Enter all the Feilds");
	}
	let userExists;
	if(!isEmpty(email)){
		userExists = await User.findOne({ email });
	}else if(!isNaN(phonenum)){
		userExists = await User.findOne({ phonenum });
	}
	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}
	const user = await User.create({
		name,
		email,
		password,
		phonenum
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phonenum:user.phonenum,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error("Failed to Create the User");
	}
});

const authUser = asyncHandler(async (req, res) => {
	const { email,phonenum,password } = req.body;
	let user;
	if(!isEmpty(email)){
		user = await User.findOne({ email });
	}else if(!isNaN(phonenum)){
		user = await User.findOne({ phonenum });
	}
	const checkMatchPassword = await user.matchPassword(password);
	if (user && checkMatchPassword) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phonenum: user.phonenum,
			token: generateToken(user._id),
		});
	}else{
		res.status(401);
		throw new Error("Invalid Email or Password");
	}
});


module.exports = { registerUser, authUser };