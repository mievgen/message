import React from "react";
import {FormControl, FormLabel, Input, VStack} from "@chakra-ui/react";

const login = () => {
    return (
        <VStack>
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        < Input
            placeholder='Enter Your Email'
        />
    </FormControl>

    <FormControl id='Password' isRequired>
        <FormLabel>Password</FormLabel>
        < Input
            placeholder='Enter Your Password'
        />
    </FormControl>
  </VStack>
 )
}

export default login