const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
	const { name, phonenum, password } = req.body;
	if (!name || !password || !phonenum) {
		res.status(400);
		throw new Error("Please Enter all the Feilds");
	}
	let userExists;
	if(!isNaN(phonenum)){
		userExists = await User.findOne({ phonenum });
	}
	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}
	const user = await User.create({
		name,
		password,
		phonenum
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			phonenum:user.phonenum,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error("Failed to Create the User");
	}
});

const authUser = asyncHandler(async (req, res) => {
	const { phonenum,password } = req.body;
	let user;
	if(!isNaN(phonenum)){
		user = await User.findOne({ phonenum });
	}
	if(user){
		const checkMatchPassword = await user.matchPassword(password);
		if (checkMatchPassword) {
			res.json({
				_id: user._id,
				name: user.name,
				phonenum: user.phonenum,
				token: generateToken(user._id),
			});
		}else{
			res.status(401);
			throw new Error("Invalid Email or Password");
		}
	}else{
		res.status(401);
		throw new Error("User Not Found");
	}
});


module.exports = { registerUser, authUser };