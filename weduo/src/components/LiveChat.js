import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  // Dispatch
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    //Api Polling
    const interval = setInterval(() => {
      console.log("ApI Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          msg:
            makeRandomMessage(5) +
            "👉🏽 My patience is waining, this entertaining. Oye aye oO yo!... Aai aa iee aa aaaaa... ❤️‍🔥🔥🧑🏻‍🚒🎸🥁",
        })
      );
    }, 1000);

    // Garbage Collection
    return () => clearInterval(interval);
  }, []);

  const [liveMessage, setLiveMessage] = useState("");

  return (
    <>
      <div className="m-2 mt-0 bg-slate-100 rounded-lg w-full h-[450px] p-2 border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage name={chat["name"]} msg={chat["msg"]} key={index} />
          ))}
        </div>
      </div>
      <form
        className="rounded-lg bg-slate-100 p-2 ml-2 -mt-2 w-full p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Akash Meme Dealer 🤖",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="ml-2 w-[60%] px-2"
          placeholder="Enter Message here"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200 rounded-md w-[25%]">
          Sent
        </button>
      </form>
    </>
  );
};

export default LiveChat;
