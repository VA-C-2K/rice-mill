const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
  {
    phone_number: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    vendor_or_cust: { type: String, required: true, trim: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    modified_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
