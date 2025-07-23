import React from "react";
import ChatWindow from "./ChatWindow/ChatWindow";
import Sidebar from "./Sidebar/Sidebar";
import ChatList from "./ChatList/ChatList";

const ChatApp = () => {
  return (
    <>
    <div className="container">
      <Sidebar />
      <ChatList />
      <ChatWindow />
    </div>
    </>
  );
};

export default ChatApp;
