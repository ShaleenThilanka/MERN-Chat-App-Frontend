import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ChatState} from "../Context/ChatProvider";
import SideDrawer from "../Components/SubComponent/SideDrawer";
import {Box} from "@chakra-ui/layout";
import MyChats from "../Components/MyChats";
import ChatBox from "../Components/ChatBox";


const ChatPage = () => {
    const {user}=ChatState();
    return (
        <div style={{width:"100%"}}>
            {user && <SideDrawer/>}
            <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && <MyChats/>}
                {user && <ChatBox/>}
            </Box>
        </div>
    );
};

export default ChatPage;