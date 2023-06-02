import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const AddNewPage = () => {
  return (
    <Tabs position="relative" isFitted variant="soft-rounded">
    <Box bg="#EDF1D6" w="100%" py={1} borderWidth={"1px"}>
      <TabList m='2px'
      >
        <Tab _selected={{ color: 'white', bg: '#609966' }}>Add Cutomer</Tab>
        <Tab _selected={{ color: 'white', bg: '#609966' }}>Add Vendor</Tab>
        <Tab _selected={{ color: 'white', bg: '#609966' }}>Add Employee</Tab>
        <Tab _selected={{ color: 'white', bg: '#609966' }}>Add Vehicle</Tab>
        <Tab _selected={{ color: 'white', bg: '#609966' }}>Add Daily Expenses</Tab>
      </TabList>
    </Box>
    <TabPanels>
      <TabPanel>
        "Hello1"
      </TabPanel>
      <TabPanel>
        "Hello2"
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default AddNewPage