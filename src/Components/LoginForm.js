import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "2792daa7-c24c-48e6-9623-1156ee9412bb", 'User-Name': username, 'User-Secret': password,  }

        try {
            // username / password => chat-engine -> give message
           await axios.get('https://api.chatengine.io/chats', {headers: authObject });
           
           localStorage.setItem('username', username);
           localStorage.setItem('password', password);
           // work out -> logged in
           window.location.reload();

        } catch(error) {
            // error -> try with new username
            setError('Oops.. You provided an invalid data');
        }


    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error"> {error} </h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;