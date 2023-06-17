import React, { useState } from "react";
import Form from "./form";
import CustomerTable from "./customer-table";
  
  const Cutomer = () => {
    const [ isUpdate , setIsUpdate] = useState(false);
    return (
      <>
        <Form isUpdate = {isUpdate} setIsUpdate={setIsUpdate}/>
        <CustomerTable isUpdate = {isUpdate} setIsUpdate={setIsUpdate}/>
      </>
    );
  };
  
  export default Cutomer;
  