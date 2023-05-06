import React, {useEffect} from 'react';
import {Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import Login from "../Components/Authentication/Login";
import SingUp from "../Components/Authentication/SingUp";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate  = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) navigate("/chats");
    }, [navigate]);

    return (
        <Container maxW="xl" centerContent>
          <Box
              d="flex"
              justifyContent={"center"}
              p={3}
              bg={"white"}
              w={"100%"}
              m={"40px 0 15px 0"}
              borderRadius={"lg"}
              borderWidth={"1px"}

          >
              <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"} textAlign={"center"}>Simple Chat</Text>
          </Box>
            <Box   bg={"white"} w={"100%"}  p={4} borderRadius={"lg"} borderWidth={"1px"} color={"black"} >
                <Tabs variant='soft-rounded' >
                    <TabList mb={"1em"}>
                        <Tab width={"50%"}>Login</Tab>
                        <Tab width={"50%"}>SingUp</Tab>
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
        </Container>
    );
};

export default HomePage;