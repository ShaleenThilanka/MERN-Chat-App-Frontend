import React from 'react';
import {Box, Container, Text} from '@chakra-ui/react'

const HomePage = () => {
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
              <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"}>Simple Chat</Text>
          </Box>
            <Box>
                <Text>Simple Chat</Text>
            </Box>
        </Container>
    );
};

export default HomePage;