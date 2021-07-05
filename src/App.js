import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './Components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "2792daa7-c24c-48e6-9623-1156ee9412bb"
            userName = "sarwarputul"
            userSecret = "123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;