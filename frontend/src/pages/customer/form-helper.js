import * as Yup from "yup";

export const FIELD_NAMES = {
  PHONE_NUMBER: "phonenumber",
  NAME: "name",
  ADDRESS: "address",
  GOVT_OR_CUST: "gov_or_cust",
};

export const getInitialValues = (data = {}) => {
  return {
    [FIELD_NAMES.PHONE_NUMBER]: data[FIELD_NAMES.PHONE_NUMBER] || "",
    [FIELD_NAMES.NAME]: data[FIELD_NAMES.NAME] || "",
    [FIELD_NAMES.ADDRESS]: data[FIELD_NAMES.ADDRESS] || "",
    [FIELD_NAMES.GOVT_OR_CUST]: data[FIELD_NAMES.GOVT_OR_CUST] || "cust",
  };
};

export const getValidation = () => {
  return Yup.object({
    [FIELD_NAMES.NAME]: Yup.string().required("Name is required"),
    [FIELD_NAMES.PHONE_NUMBER]: Yup.string().required("Phone number is required").min(10, "Phone number is too short").max(10, "Phone number is too long"),
    [FIELD_NAMES.ADDRESS]: Yup.string().required("Address is required"),
    [FIELD_NAMES.GOVT_OR_CUST]: Yup.string().required("Select Government or Customer"),
  });
};

export const GovtOrCustEnums = () => {
  return [
    { label: "Government", value: "govt" },
    { label: "Customer", value: "cust" },
  ];
};
