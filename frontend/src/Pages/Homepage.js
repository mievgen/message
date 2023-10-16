import React from "react";
import {Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text,} from "@chakra-ui/react";
import Login from '../components/Authentication/login';
import SingUp from '../components/Authentication/singUp';

const Homepage = () => {
    return (<Container maxW='xl'>
        <Box
            d='flex'
            justifyContent='center'
            p={3}
            bg={"gray"}
            w='100%'
            m='40px 0 15px 0'
            borderRadius='lg'

        >
            <Center>
                <Text fontSize='4xl' fontFamily='Work sans' color='black'>
                    Fantom</Text>
            </Center>
        </Box>
        <Box
            bg='gray'
            w='100%'
            p={4}
            borderRadius='lg'
            color='black'

        >
            <Tabs variant='soft-rounded' colorScheme="gray">
                <TabList>
                    <Tab width='50%'>Login</Tab>
                    <Tab width='50%'>Sing Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login/>
                    </TabPanel>
                    <TabPanel>
                        <SingUp/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Container>)

}

export default Homepage





