const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		phone_number: { type: Number, required: true, unique: true },
		address: { type: String, required: true },
		salary: { type: Number, required: true },
		aadhar_card_no: { type: Number, unique: true },
		no_of_leaves: { type: Number, required: true },
		role : { type: String, required: true,trim:true },
		over_time_hrs: { type: Number, required: true },
		created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		modified_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	}, {
		timestamps: true,
	}
);


const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;