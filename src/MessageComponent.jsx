import React, { useState, useEffect } from 'react';

const fetchMessage = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello, welcome to site!");
      }, 3000); 
    });
  };
  
const MessageComponent = () => {
    const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMessage().then(setMessage);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default MessageComponent
