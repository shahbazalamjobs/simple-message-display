import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Hello from React</h1>
      <ul className="message-list">
        {Array.isArray(messages) && messages.map((message, index) => (
          <li key={index} className="message-item">{message.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
