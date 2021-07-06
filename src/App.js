import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';


const projectID = "2792daa7-c24c-48e6-9623-1156ee9412bb"

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />



    return (
        <ChatEngine 
            height = "100vh"
            projectID = {projectID}
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;