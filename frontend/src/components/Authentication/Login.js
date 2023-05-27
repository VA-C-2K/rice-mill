import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { config } from "../../api/auth.api";

const Login = () => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  axios.defaults.withCredentials = true;
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = async() => {
    setLoading(true);
    if (!password) {
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
       const data  = await axios.post(`http://127.0.0.1:5000/user/login`,{ password,phonenum:phoneNumber },config);
       console.log('data: ', data);
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
      <VStack
          spacing={'5px'}
      >
          <FormControl>
              <FormLabel id="phoneNumber" color="#40513B">Phone Number</FormLabel>
              <Input
                  type='tel'
                  placeholder='Enter Your Phone Number'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  variant='flushed'
                  focusBorderColor='#609966'
                  _placeholder={{ opacity: 1, color: '#609966' }}
                  color="#609966"
                  fontWeight={500}
              />
          </FormControl>
          <FormControl>
              <FormLabel id="password" isRequired color="#40513B"> Password </FormLabel>
              <InputGroup>
                  <Input
                      type={show ? 'text' : 'password'}
                      placeholder='Enter Your Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      variant='flushed'
                      focusBorderColor='#609966'
                      _placeholder={{ opacity: 1, color: '#609966' }}
                      color="#609966"
                      fontWeight={500}
                  />
                  <InputRightElement width={"4.5rem"}>
                      <Button backgroundColor="#609966"
                              color={"white"}
                              _hover={{ bg: "#4a875d" }}
                              h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                      </Button>
                  </InputRightElement>
              </InputGroup>
          </FormControl>
          <Button 
                backgroundColor="#609966"
                color={"white"}
                _hover={{ bg: "#4a875d" }}
                width="100%" style={{marginTop:15}} 
                onClick={submitHandler} 
                isLoading={loading}
                loadingText='Logging In Please Wait...'
                >
              Login
          </Button>

      </VStack>
    )
}

export default Login