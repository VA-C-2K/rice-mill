import React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import CutomerTable from '../components/CutomerComponent/CutomerTable';

const HomePage = () => {
  return (
    <Tabs position="relative" isFitted variant="soft-rounded">
      <Box mx="4">
      <Box bg="#EDF1D6" w="100%" py={1} px={10} borderRadius={"3xl"}>
        <TabList m='2px'>
          <Tab _selected={{ color: 'white', bg: '#609966' }}>Cutomer</Tab>
          <Tab _selected={{ color: 'white', bg: '#609966' }}>Vendor</Tab>
          <Tab _selected={{ color: 'white', bg: '#609966' }}>Products</Tab>
          <Tab _selected={{ color: 'white', bg: '#609966' }}>Employee</Tab>
          <Tab _selected={{ color: 'white', bg: '#609966' }}>Vehicle</Tab>
          <Tab _selected={{ color: 'white', bg: '#609966' }}>Daily Expenses</Tab>
        </TabList>
      </Box>
      </Box>
      <TabPanels>
        <TabPanel>
         <CutomerTable />
        </TabPanel>
        <TabPanel>
          "Hello2"
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
export default HomePage