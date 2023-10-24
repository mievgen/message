import {FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Stack, VStack} from "@chakra-ui/react";
import React from "react";


const singUp = () => {


    return (
        <VStack spacing='5px'>
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                < Input
                    placeholder='Enter Your Name'
                />
            </FormControl>

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
export default singUp