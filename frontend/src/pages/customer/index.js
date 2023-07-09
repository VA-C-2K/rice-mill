import React, { useState } from "react";
import { GlobalState } from "../../context/global-state-context";
import { getInitialValues, getValidation } from "./form-helper";
import { Formik } from "formik";
import { CustomerPageProvider, useCustomerPageContext } from "./provider";
import withHOC from "../../utils/with-hoc";
import { useDisclosure } from "@chakra-ui/react";
const FormContainer = React.lazy(() => import("./form-container"));
const CustomerTable = React.lazy(() => import("./customer-table"));

const Cutomer = () => {
  const { handleCreate,handleUpdate } = useCustomerPageContext();
  const { setTabChanged } = GlobalState();
  const [isUpdate, setIsUpdate] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  setTabChanged("customer");
  return (
    <>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getValidation()}
        onSubmit={(values, actions) => {
          if(isUpdate){
            handleUpdate(values,actions,setIsUpdate);
          }else{
            handleCreate(values,actions,onClose);
          }
        }}
        validateOnMount={true}
        enableReinitialize={true}
      >
        {(formik) => (
          <>
            <FormContainer 
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate} 
              formik={formik} 
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
            <CustomerTable
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
              formik={formik}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default withHOC(CustomerPageProvider, Cutomer);
