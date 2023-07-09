import React from "react";
import { Box, TableContainer, Table, Thead, Tr, Th, Td, Tbody, Text } from "@chakra-ui/react";

const CustomerTableSkeleton = () => {
  const breathingEffectStyle = {
    animation: "breathing 2s infinite",
    background: "linear-gradient(-45deg, #EDF1D6, #F6F9E3, #EDF1D6)",
    backgroundSize: "400% 400%",
    borderRadius: "10px",
    animationName: {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  };

  return (
    <Box bg="#EDF1D6" w="100%" h="100%" p={3} borderWidth="1px" borderRadius="lg">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead bg="#9DC08B" borderRadius="lg" h="12">
            <Tr>
              <Th w="12">
                <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                  No.
                </Text>
              </Th>
              <Th w="lg">
                <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                  Name
                </Text>
              </Th>
              <Th w="lg">
                <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                  Address
                </Text>
              </Th>
              <Th w="2xs">
                <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                  Phone No.
                </Text>
              </Th>
              <Th w="xs">
                <Text as="b" fontSize="sm" fontFamily="Work sans" color="#40513B">
                  Govt/ Cust
                </Text>
              </Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
              <Tr key={index} style={breathingEffectStyle}>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerTableSkeleton;
