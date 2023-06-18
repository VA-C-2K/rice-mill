import React, { useState } from "react";
import FormContainer from "./form-container";
import CustomerTable from "./customer-table";

const Cutomer = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <>
      <FormContainer isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
      <CustomerTable isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
    </>
  );
};

export default Cutomer;
