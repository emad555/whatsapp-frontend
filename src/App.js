import './App.css';
import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js"
import axios from "./axios";



function App() {

const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}messages/sync`)
    .then(Response=>{
      setMessages(Response.data)
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('c39e28862a2ef47ec631', {
    cluster: 'eu'
  });
    
  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) =>{
  // alert(JSON.stringify(newMessage));
  setMessages([...messages, newMessage])
  });  
return () => {
  channel.unbind_all();
  channel.unsubscribe();
};

}, [messages])

  
  
  return (
    <div className="app">
      <div className="app__body">

      {/* Sidebar comp. */}
      <Sidebar />

      {/* Chat comp. */}
      <Chat messages = {messages}/>
      </div>
    </div>
  );
}

export default App;
