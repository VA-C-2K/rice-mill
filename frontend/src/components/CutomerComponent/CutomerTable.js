import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../CustomButton'
import { AddIcon,EditIcon,DeleteIcon} from "@chakra-ui/icons"; 

const CutomerTable = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Flex alignItems='end' flexDirection={'row-reverse'} >
        <Box p='4' mx='24'>
            <CustomButton onClick={onOpen} leftIcon={<AddIcon />}>
                Customer
            </CustomButton>     
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            "ashkhjfhahafjf"
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
        </Flex>  
        <Box bg="#EDF1D6" w="100%" h="100%" p={4} borderWidth={"1px"} borderRadius={"lg"}>
            <TableContainer>
                <Table variant="simple" size={'sm'}>
                    <TableCaption>Cutomer Information</TableCaption>
                    <Thead bg={'#9DC08B'} borderRadius={"lg"} >
                        <Tr>
                            <Th w={"12"}>No.</Th>
                            <Th w={"lg"}>Name</Th>
                            <Th w={"lg"}>Address</Th>
                            <Th w={"2xs"}>Phone No.</Th>
                            <Th w={"xs"}>Cutomer/Goverment</Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody justifyContent={"center"}>
                        <Tr>
                            <Td>1</Td>
                            <Td >Viraj Anil Agharkar </Td>
                            <Td>Viraj Anil Agharkar Viraj Anil Agharkar Viraj Anil Agharkar </Td>
                            <Td >+91 9284680743</Td>
                            <Td>Govt.</Td>
                            <Td>
                                <CustomButton
                                    size="sm"
                               >
                                {<EditIcon w={4} h={4} />}
                                </CustomButton>
                            </Td>
                            <Td>
                                <CustomButton 
                                    size="sm"
                                    bg="#D57E7E"
                                    _hover={{ bg: "#D25959" }}
                                >
                                    {<DeleteIcon w={4} h={4} />}
                                </CustomButton>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    </>
    )
}

export default CutomerTable