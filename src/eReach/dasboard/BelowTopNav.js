import React from 'react';
import { Text } from '@chakra-ui/react';

const BelowTopNav = () => {
  return (
    <div style={{display: "flex",}}>
        <hr style={{ width: "25%", marginTop: "4px"}}></hr>
        <Text as="h5" fontSize="2xl" color="gray.800" fontWeight="bold" style={{marginLeft: "5%", fontSize: "x-large", marginTop: "-1%"}}>Dashboard</Text>

    </div>
  )
}

export default BelowTopNav