import React from "react";
import {Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text,} from "@chakra-ui/react";
import Login from '../components/Authentication/login';
import SingUp from '../components/Authentication/singUp';

const Homepage = () => {
    return (
        <Container maxW='xl'>
            <Box
                d='flex'
                justifyContent='center'
                p={3}
                bg={"#343a40"}
                w='100%'
                m='40px 0 15px 0'
                borderRadius='lg'
            >

                <Center>
                    <Text fontSize='4xl' fontFamily='Work Sans' color='#6c757d'>
                        Faton</Text>
                </Center>
            </Box>

            <Box
                bg='#343a40'
                w='100%'
cd frontend

                p={4}
                borderRadius='lg'
                color='black'

            >
                <Tabs variant='soft-rounded' colorScheme='gray'>
                    <TabList>
                        <Tab width='50%' textColor='#6c757d'>Login</Tab>
                        <Tab width='50%' textColor='#6c757d'>Sing Up</Tab>
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





