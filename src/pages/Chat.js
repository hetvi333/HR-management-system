import React from "react";
import ChatProfile from "../components/chat/ChatProfile";
import ChatDashboard from "../components/chat/ChatDashboard";

const Chat = () => {
  return (
    <div className="grid grid-cols-6 p-5 gap-5">
      <div className="col-span-2">
        <ChatProfile />
      </div>
      <div className="col-span-4">
        <ChatDashboard />
      </div>
    </div>
  );
};

export default Chat;
