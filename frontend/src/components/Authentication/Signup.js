import { InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { config } from "../../api/auth.api";
import CustomButton from '../CustomButton';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikInput from '../FormikInput';


const Signup = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = async (values) => {
    console.log('values: ', values);
    const { username,phonenumber,password,confirmpassword } = values;
    setLoading(true)
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
          name:username,
          password,
          phonenumber
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/home");
    } catch (error) {
      console.log('error: ', error);
      toast({
        title: "Error Occured!",
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
      initialValues={{ username:"", phonenumber: "", password: "", confirmpassword: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Name is required"),
        phonenumber: Yup.string()
          .required("Phone number is required")
          .min(10, "Phone number is too short")
          .max(10, "Phone number is too long"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password is too short"),
        confirmpassword: Yup.string()
          .required("Confirm password is required")
          .min(8, "Confirm password is too short"),
      })}
      onSubmit={(values, actions) => {
        submitHandler(values);
        // actions.resetForm();
      }}
    >
      {formik => (

        <VStack
          as="form"
          spacing={'5px'}
          onSubmit={formik.handleSubmit}
        >
          <FormikInput name="username" label={"Name"} placeholder='Enter Your Name'
            variant='outline'
            focusBorderColor='#609966'
            _placeholder={{ opacity: 0.5, color: '#40513B' }}
            color="#609966"
            fontWeight={500}
            border="1px"
          />
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
          <FormikInput
            name="confirmpassword"
            type={show ? 'text' : 'password'}
            placeholder='Confirm Password'
            label={"Confirm Password"}
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
            style={{ marginTop: 15 }}
            type="submit"
            isLoading={loading}
            loadingText={`Please wait while we register you ${formik.values.username}...`}
          >
            Sign Up
          </CustomButton>

        </VStack>
      )}
    </Formik>
  )
}

export default Signup