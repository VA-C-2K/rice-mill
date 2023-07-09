import { useCallback, useEffect, useMemo, useState } from "react";
import generateContext from "../../utils/generate-context";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { authConfig } from "../../api";
import { GlobalState } from "../../context/global-state-context";
import { baseURL } from "../../api";
import { UserState } from "../../context/user-context";
import { getInitialValues } from "./form-helper";

function useCustomerPage() {
  axios.defaults.withCredentials = true;
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { searchTerm, tabChanged } = GlobalState();
  const { user } = UserState();
  const config = authConfig(user);
  const [customerList, setCustomerList] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [customerId, setCustomerId] = useState();

  const handleCreate = useCallback(
    async (values, actions, onClose) => {
      const { address, first_name, gov_or_cust, last_name, phone_number } = values;
      setLoading(true);
      try {
        await axios.post(
          `${baseURL}/customer/create`,
          {
            address,
            first_name,
            gov_or_cust,
            last_name,
            phone_number,
          },
          {
            headers: config.headers,
          }
        );
        toast({
          title: "Customer Created Successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        actions.resetForm();
        setIsSubmited(!isSubmited);
        onClose(false);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    },
    [config.headers, isSubmited, toast]
  );

  const handleUpdate = useCallback(
    async (values, actions, setIsUpdate) => {
      const { address, first_name, gov_or_cust, last_name, phone_number } = values;
      setLoading(true);
      try {
        await axios.put(
          `${baseURL}/customer/update`,
          {
            cust_id: customerId,
            address,
            first_name,
            gov_or_cust,
            last_name,
            phone_number,
          },
          {
            headers: config.headers,
          }
        );
        toast({
          title: "Customer Updated Successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        actions.resetForm();
        setIsSubmited(!isSubmited);
        setIsUpdate(false);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    },
    [config.headers, customerId, isSubmited, toast]
  );

  const handleUpdateClick = useCallback(
    async ({ id, isUpdate, setIsUpdate, formik }) => {
      formik.resetForm({
        values: getInitialValues(),
      });
      setCustomerId(id);
      const data = await axios.get(`${baseURL}/customer?cust_id=${id}`, {
        headers: config.headers,
      });
      const values = getInitialValues(data?.data);
      Object.entries(values).forEach(([key, value]) => {
        formik.setFieldValue(key, value);
      });
      setIsUpdate(!isUpdate);
    },
    [config.headers]
  );

  const handleDelete = useCallback(
    async (id) => {
      setLoading(true);
      try {
        await axios.delete(`${baseURL}/customer/delete?cust_id=${id}`, {
          headers: config.headers,
        });
        toast({
          title: "Customer Deleted Successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        setIsSubmited(!isSubmited);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    },
    [config.headers, isSubmited, toast]
  );

  const getCustomers = useCallback(
    async (searchTerm) => {
      setLoading(true);
      try {
        const data = await axios.get(`${baseURL}/customer?term=${searchTerm}`, {
          headers: config.headers,
        });
        setCustomerList(data?.data);
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error Occurred!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    },
    [config.headers, setCustomerList, setLoading, toast]
  );

  useEffect(() => {
    getCustomers(searchTerm, isSubmited);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, tabChanged, isSubmited]);

  return useMemo(() => {
    return {
      loading,
      customerList,
      handleCreate,
      handleUpdateClick,
      handleDelete,
      getCustomers,
      handleUpdate,
    };
  }, [customerList, getCustomers, handleCreate, handleDelete, handleUpdate, handleUpdateClick, loading]);
}

export const [CustomerPageProvider, useCustomerPageContext] = generateContext(useCustomerPage);
