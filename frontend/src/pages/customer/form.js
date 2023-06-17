import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { AddIcon } from '@chakra-ui/icons'

const Form = (props) => {
    const { isUpdate,setIsUpdate } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex alignItems="end" flexDirection={"row-reverse"}>
          <Box py="3" px="1">
            <CustomButton onClick={onOpen} leftIcon={<AddIcon />}>
              Add Customer
            </CustomButton>
            <Modal closeOnOverlayClick={false} isOpen={isOpen || isUpdate}  onClose={onClose}>
              <ModalOverlay />
              <ModalContent bg="#EDF1D6">
                <ModalHeader>{isUpdate ? "Update Customer" : "Add Customer"}</ModalHeader>
                {!isUpdate && <ModalCloseButton />}
                <ModalBody pb={6}>
                <h2> Form </h2>
                </ModalBody>
                <ModalFooter>
                  {!isUpdate && <CustomButton onClick={()=>{}} style={{ marginRight: 10 }}> Save </CustomButton>}
                  {isUpdate && <CustomButton onClick={()=>{}} style={{ marginRight: 10 }}> Update </CustomButton> }
                  {isUpdate && <CustomButton border='1px' bg="transparent" color={"#D57E7E"} _hover={{ bg: "#D25959", color: "#EDF1D6" }} onClick={()=>setIsUpdate(!isUpdate)} style={{}}> Cancel </CustomButton>}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
  )
}

export default Form