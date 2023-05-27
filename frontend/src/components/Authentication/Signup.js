import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { config } from "../../api/auth.api";


const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [loading, setPicLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const handleClick = () => setShow(!show); 

    const submitHandler = async () => {
        setPicLoading(true)
        if (!name || !password || !confirmpassword || !phoneNumber) {
            toast({
              title: "Please Fill all the Feilds",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            setPicLoading(false);
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
            return;
          }
          try {
            const { data } = await axios.post(
              "http://127.0.0.1:5000/user",
              {
                name,
                password,
                phonenum:phoneNumber
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
            toast({
              title: "Error Occured!",
              description: error.response.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
          }
    }
    return (
        <VStack
            spacing={'5px'}
        >
            <FormControl>
                <FormLabel id="first-name" isRequired color="#40513B"> Name </FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                    variant='flushed'
                    focusBorderColor='#609966'
                    _placeholder={{ opacity: 1, color: '#609966' }}
                    color="#609966"
                    fontWeight={500}
                />
            </FormControl>
            <FormControl>
              <FormLabel id="phoneNumber" color="#40513B"> Phone Number</FormLabel>
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
                        onChange={(e) => setPassword(e.target.value)}
                        variant='flushed'
                        focusBorderColor='#609966'
                        _placeholder={{ opacity: 1, color: '#609966' }}
                        color="#609966"
                        fontWeight={500}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button h="1.75rem" size="sm" onClick={handleClick} backgroundColor="#609966"
                                color={"white"}
                                _hover={{ bg: "#4a875d" }}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="confirm-password" isRequired color="#40513B"> Confirm Password </FormLabel>
                <InputGroup>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        variant='flushed'
                        focusBorderColor='#609966'
                        _placeholder={{ opacity: 1, color: '#609966' }}
                        color="#609966"
                        fontWeight={500}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button h="1.75rem" size="sm" onClick={handleClick} backgroundColor="#609966"
                                color={"white"}
                                _hover={{ bg: "#4a875d" }}>
                            {show ? "Hide" : "Show"} 
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button backgroundColor="#609966"
                    color={"white"}
                    _hover={{ bg: "#4a875d" }}
                    width="100%"
                    style={{ marginTop: 15 }} 
                    onClick={submitHandler} 
                    isLoading={loading}
                    loadingText={`Please wait while we register you ${name}...`}
                    >
                Sign Up
            </Button>

        </VStack>
    )
}

export default Signup