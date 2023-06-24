import { Box, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const CustomerTable = (props) => {
  const { isUpdate, setIsUpdate } = props;
  return (
    <Box bg="#EDF1D6" w="100%" h="100%" p={3} borderWidth={"1px"} borderRadius={"lg"}>
      <TableContainer>
        <Table variant="simple" size={"sm"}>
          <TableCaption>Customer Information</TableCaption>
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
                  Govt/ Cust{" "}
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
                <CustomButton size="sm" bg="transparent" color="#609966" _hover={{ bg: "#4a875d", color: "#EDF1D6" }} onClick={() => setIsUpdate(!isUpdate)}>
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
  );
};

export default CustomerTable;
