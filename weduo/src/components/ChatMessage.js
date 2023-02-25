import React from "react";

const ChatMessage = ({ name, msg }) => {
  return (
    <>
      <div className="bg-slate-300 rounded-lg m-2">
        <div className="flex">
          <img
            className="h-8 rounded-xl m-2"
            alt="user"
            src="https://yt4.ggpht.com/ytc/AL5GRJUcvbsY3SeIvtoDwwHilwvRucCU0vucmq7x9zQrKQ=s32-c-k-c0x00ffffff-no-rj"
          />
          <h3 className="font-bold m-2 ml-1">{name}</h3>
        </div>
        <p className="p-2 -mt-6 ml-10">{msg}</p>
      </div>
    </>
  );
};

export default ChatMessage;
