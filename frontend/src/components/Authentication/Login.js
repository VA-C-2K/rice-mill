import { InputRightElement, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { config } from "../../api/auth.api";
import CustomButton from '../CustomButton';
import { Formik } from "formik";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import FormikInput from '../FormikInput';

const Login = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  axios.defaults.withCredentials = true;
  const toast = useToast();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const submitHandler = async (values) => {
    const { phonenumber,password } = values;
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
      const data = await axios.post(`http://127.0.0.1:5000/user/login`, { password, phonenum: phonenumber }, config);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
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
  }

  return (
    <Formik
      initialValues={{ phonenumber: "", password: "" }}
      validationSchema={Yup.object({
        phonenumber: Yup.string()
          .required("Phone number is required")
          .min(10, "Phone number is too short"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password is too short"),
      })}
      onSubmit={(values, actions) => {
        submitHandler(values);
        actions.resetForm();
      }}
    >
      {formik => (
        <VStack
          as="form"
          spacing={'5px'}
          onSubmit={formik.handleSubmit}
        >
          <FormikInput name="phonenumber" label={"Phone Number"} placeholder='Enter Your Phone Number'
            variant='outline'
            focusBorderColor='#609966'
            _placeholder={{ opacity: 0.5, color: '#40513B' }}
            color="#609966"
            fontWeight={500}
            type="number"
            border="1px"
          />
          <FormikInput
            name="password"
            type={show ? 'text' : 'password'}
            placeholder='Enter Your Password'
            label={"Password"}
            variant='outline'
            _placeholder={{ opacity: 0.5, color: '#40513B' }}
            color="#609966"
            fontWeight={500}
            focusBorderColor='#609966'
            border="1px"
            childern={
            <InputRightElement width={"4.5rem"}>
                <CustomButton
                  size="sm"
                  onClick={handleClick}
                  bg="transparent"
                  color="#609966"
                  _hover={{}}
                >
                  {show ? <ViewOffIcon w={5} h={5} /> : <ViewIcon w={5} h={5} />}
                </CustomButton>
              </InputRightElement>
            } 
          />

          <CustomButton 
            w="100%"
            style={{marginTop:15}} 
            type="submit"
            isLoading={loading}
            loadingText='Logging In Please Wait...'
            >
              Login
          </CustomButton>
        </VStack>
      )}
    </Formik>
  )
}

export default Login