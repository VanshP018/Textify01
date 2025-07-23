import React, { useContext, useEffect, useState } from "react";
import { Search, Send } from "lucide-react";
import { SelectedPersonContext } from "../context/SelectedPersonContext";
import { addMessages, getMessages } from "../api/axios";
import { UserContext } from "../context/UserContext";
import "../css/ChatWindow.css";
import appLOGO from "../assets/app_logo.png";

const ChatWindow = () => {
  const [messagesArr, setMessagesArr] = useState([]);
  const [value, setValue] = useState("")
  const [trigger, setTrigger] = useState(false)

  const { user } = useContext(UserContext);
  const { person } = useContext(SelectedPersonContext);

  useEffect(() => {
    if (!person) return
    console.log("asdjfalsdfasdfs");
    
    const fetchMessages = async () => {
      try {
        const res = await getMessages(user.id, person.id);
        setMessagesArr(res.data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [trigger,person]);
  
  if (!person) {
    return (
      <div className="appIntro">
        <img src={appLOGO} />
        <h1>PandaGram</h1>
        <p>When pandas don't hibernate, they vibe and relate 🐼🎶</p>
      </div>
    );
  }
  const { contactName } = person;


  const handelSend = async () => {
    const message = value.trim()
    setValue("")
    if (message == "") return
    try {
        const res = await addMessages(user.id,person.id,{message})
        setTrigger(!trigger)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="chatWrapper">
      <div className="window-nav">
        <div className="window-person">
          <div className="user-avatar">
            <h3>{contactName.trim()[0].toUpperCase()}</h3>
          </div>
          <h3>{contactName}</h3>
        </div>
        <Search />
      </div>

      <div className="box">
        {messagesArr.map((ele, idx) => (
          <p key={idx} className="myMSG">
            {ele.content}
          </p>
        ))}
      </div>

      <div className="inputContainer">
        <input
          type="text"
          className="chatTEXT"
          placeholder="Write a message..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if(e.key == "Enter"){
                handelSend()
            }
          }}
        />
        <div
          className="sendBtn"
          onClick={handelSend}
        >
          <Send />
        </div>
      </div>


    </div>
  );
};

export default ChatWindow;
