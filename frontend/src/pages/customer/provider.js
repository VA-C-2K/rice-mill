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

  const handleCreate = useCallback(async () => {}, []);

  const handleUpdate = useCallback(
    async ({ id, isUpdate, setIsUpdate, formik }) => {
      formik.resetForm({
        values: getInitialValues(),
      });
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

  const handleDelete = useCallback(async (id) => {
    console.log("id: ", id);
  }, []);

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
    getCustomers(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, tabChanged]);

  return useMemo(() => {
    return {
      loading,
      customerList,
      handleCreate,
      handleUpdate,
      handleDelete,
      getCustomers,
    };
  }, [customerList, getCustomers, handleCreate, handleDelete, handleUpdate, loading]);
}

export const [CustomerPageProvider, useCustomerPageContext] = generateContext(useCustomerPage);
