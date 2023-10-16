import {FormControl, FormLabel} from "@chakra-ui/react";
import {Input} from "@chakra-ui/react";
import { VStack } from '@chakra-ui/react'
import React from "react";


const  singUp = () => {


    return (
        <VStack spacing='5px'>
            <FormControl>
                <FormLabel color='black'>
                    < Input
                        placeholder='Enter Youe Name'
                        // onRateChange={() =>}
                    />
                </FormLabel>
            </FormControl>
        </VStack>

    )
}
export default singUp