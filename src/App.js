import './App.css';
import React from "react";
import Sidebar from './Sidebar';
import Chat from './Chat';


function App() {
  return (
    <div className="app">

      {/* Sidebar comp. */}
      <Sidebar />

      {/* Chat comp. */}
      <Chat />

    </div>
  );
}

export default App;
