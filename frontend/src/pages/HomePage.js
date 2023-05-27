import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const AuthPage = () => {

   return (
        <Box bg="#EDF1D6" w="100%" p={4} mx="0px 0 40px 50px"   borderRadius="lg" borderWidth={"1px"}>
            <FormControl>
              <FormLabel id="phoneNumber" color="#40513B">Phone Number</FormLabel>
              <Input
                  type='tel'
                  placeholder='Enter Your Phone Number'
                //   onChange={(e) => setPhoneNumber(e.target.value)}
                //   value={phoneNumber}
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
                    //   type={show ? 'text' : 'password'}
                      placeholder='Enter Your Password'
                    //   value={password}
                    //   onChange={(e) => setPassword(e.target.value)}
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
                            //   h="1.75rem" size="sm" onClick={handleClick}
                            >
                          {/* {show ? "Hide" : "Show"} */}
                      </Button>
                  </InputRightElement>
              </InputGroup>
          </FormControl>
          <Button 
                backgroundColor="#609966"
                color={"white"}
                _hover={{ bg: "#4a875d" }}
                width="100%" style={{marginTop:15}} 
                // onClick={submitHandler} 
                // isLoading={loading}
                loadingText='Logging In Please Wait...'
                >
              Login
          </Button>
      </Box>
    )
}

export default AuthPage