import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    HStack,
    useDisclosure,
    IconButton,
    Text,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
  } from "@chakra-ui/icons";
  import "./Navbar.css";
import { useNavigate } from "react-router-dom";
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
  
    const logouthandler = () => {
        localStorage.removeItem("userInfo");
        navigate("/")
    }
  
    return (
      <div id="navFix">
        <Box
          bg={useColorModeValue("gray.100", "gray.900")}
          px={9}
          width={["100%"]}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack w="42%">
                <Text as="b" fontSize="lg" fontFamily="Work sans" color="#40513B">
                    Mahaveer Rice Mill
                </Text>
            </HStack>
  
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  id="myDIV"
                >
                  <Button className="btnRes" onClick={()=>navigate("/home")}>
                      <Text as="b" fontSize="lg" fontFamily="Work sans" color="#40513B">
                        Home
                      </Text>
                  </Button>
  
                  <Button className="btnRes" onClick={()=>navigate("/customer")}>
                    <Text as="b" fontSize="lg" fontFamily="Work sans" color="#40513B">
                        Customer
                      </Text>
                  </Button>
  
                </HStack>
              </HStack>
            </Flex>
              
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button
                 backgroundColor="#609966"
                 color={"white"}
                 _hover={{ bg: "#4a875d" }}
                  variant="solid"
                  onClick={logouthandler}
                  size={["sm", "md"]}
                  id="logoutBtn"
                > Logout
                </Button>
              </Stack>
            </Flex>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#About">
                      <b>About</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Skills">
                      {" "}
                      <b>Skills</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Projects">
                      <b>Projects</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Contact">
                      <b>Contact</b>
                    </a>
                  </Button>
                </Stack>
              </Box>
            ) : null}
          </Flex>
        </Box>
      </div>
    );
  }