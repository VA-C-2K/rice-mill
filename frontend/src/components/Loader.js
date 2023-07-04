import { Progress } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <div style={{ marginTop:"5rem" }}>
        <Progress size='lg' isIndeterminate hasStripe colorScheme="green" />
    </div>
  )
}

export default Loader