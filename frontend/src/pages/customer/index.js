import React, { useState } from "react";
import { GlobalState } from "../../context/global-state-context";
import { getInitialValues, getValidation } from "./form-helper";
import { Formik } from "formik";
import { CustomerPageProvider, useCustomerPageContext } from "./provider";
import withHOC from "../../utils/with-hoc";
const FormContainer = React.lazy(() => import("./form-container"));
const CustomerTable = React.lazy(() => import("./customer-table"));

const Cutomer = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const { setTabChanged } = GlobalState();
  const { customerList, handleUpdate, handleDelete } = useCustomerPageContext();
  setTabChanged("customer");
  return (
    <>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getValidation()}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
        validateOnMount={true}
        enableReinitialize={true}
      >
        {(formik) => (
          <>
            <FormContainer isUpdate={isUpdate} setIsUpdate={setIsUpdate} formik={formik} />
            <CustomerTable
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
              formik={formik}
              customerList={customerList}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default withHOC(CustomerPageProvider, Cutomer);
