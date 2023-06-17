import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton";
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

const CutomerTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex alignItems="end" flexDirection={"row-reverse"}>
        <Box py="3" px="1">
          <CustomButton onClick={onOpen} leftIcon={<AddIcon />}>
            Add Customer
          </CustomButton>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Customer</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>"ashkhjfhahafjf"</ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
      <Box bg="#EDF1D6" w="100%" h="100%" p={3} borderWidth={"1px"} borderRadius={"lg"}>
        <TableContainer>
          <Table variant="simple" size={"sm"}>
            <TableCaption>Cutomer Information</TableCaption>
            <Thead bg={"#9DC08B"} borderRadius={"lg"} h={"12"}>
              <Tr>
                <Th w={"12"}>
                  <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                    No.
                  </Text>
                </Th>
                <Th w={"lg"}>
                  {" "}
                  <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                    {" "}
                    Name
                  </Text>
                </Th>
                <Th w={"lg"}>
                  {" "}
                  <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                    {" "}
                    Address{" "}
                  </Text>
                </Th>
                <Th w={"2xs"}>
                  {" "}
                  <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                    {" "}
                    Phone No.{" "}
                  </Text>
                </Th>
                <Th w={"xs"}>
                  {" "}
                  <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                    {" "}
                    Cutomer/Goverment{" "}
                  </Text>
                </Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody justifyContent={"center"}>
              <Tr>
                <Td>1</Td>
                <Td>Viraj Anil Agharkar </Td>
                <Td>Viraj Anil Agharkar Viraj Anil Agharkar Viraj Anil Agharkar </Td>
                <Td>+91 9284680743</Td>
                <Td>Govt.</Td>
                <Td>
                  <CustomButton size="sm" bg="transparent" color="#609966" _hover={{ bg: "#4a875d", color: "#EDF1D6" }}>
                    {<EditIcon w={5} h={5} />}
                  </CustomButton>
                </Td>
                <Td>
                  <CustomButton size="sm" bg="transparent" color={"#D57E7E"} _hover={{ bg: "#D25959", color: "#EDF1D6" }}>
                    {<DeleteIcon w={5} h={5} />}
                  </CustomButton>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default CutomerTable;
