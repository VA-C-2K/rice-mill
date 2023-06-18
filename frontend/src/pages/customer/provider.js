import { useCallback, useMemo, useState } from "react";
import generateContext from "../../utils/generate-context";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { config } from "../../api/auth.api";

function useCustomerPage() {
  axios.defaults.withCredentials = true;
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(
    async (values, actions) => {
      const { phonenumber, password } = values;
      setLoading(true);
      if (!phonenumber) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
      try {
        const data = await axios.post(`http://127.0.0.1:5000/user/login`, { password, phonenumber }, config);
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        actions.resetForm();
        navigate("/home");
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
    [navigate, toast]
  );

  const handleSignUp = useCallback(
    async (values, actions) => {
      const { username, phonenumber, password, confirmpassword } = values;
      setLoading(true);
      if (!username || !password || !confirmpassword || !phonenumber) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
      if (password !== confirmpassword) {
        toast({
          title: "Passwords Do Not Match",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:5000/user",
          {
            name: username,
            password,
            phonenumber,
          },
          config
        );
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        actions.resetForm();
        navigate("/home");
      } catch (error) {
        console.log("error: ", error);
        toast({
          title: "Error Occured!",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    },
    [navigate, toast]
  );

  return useMemo(() => {
    return {
      loading,
      handleLogin,
      handleSignUp,
    };
  }, [loading, handleLogin, handleSignUp]);
}

export const [CustomerPageProvider, useCustomerPageContext] = generateContext(useCustomerPage);
