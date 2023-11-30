import axios from 'axios';
import React, { useEffect } from 'react';


const ChatPage = () => {
    
    const fetchchats = async () => {
        const data = await axios.get('/api/chat');
        console.log(data);
    };

    useEffect(() => {
        fetchchats();
    },[]);
 
 
    return (
            <div>ChatPage</div>
    );
};

export default ChatPage