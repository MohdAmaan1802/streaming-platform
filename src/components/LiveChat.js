import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const [liveMessage, setLiveMssage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      //  liveMessages();
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);

  const liveMessages = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/liveChat/messages"
    );
    const json = await data.json();
    //console.log(json);
  };

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessages key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("message", liveMessage);
          dispatch(
            addMessages({
              name: "Moon",
              message: liveMessage,
            })
          );
          setLiveMssage("");
        }}
      >
        <input
          className="px-2 w-59 "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMssage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
