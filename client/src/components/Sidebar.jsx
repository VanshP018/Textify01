import React, { useContext,useState } from "react";
import appLogo from "../assets/app_Logo.png";
import {
  LogOut,
  MessageCircleMore,
  Moon,
  Sun,
  UserRoundCog,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import "../css/Sidebar.css";
import PersonalDetails from "./PersonalDetails.jsx";
import { UserContext } from "../context/UserContext.jsx";

const Sidebar = () => {
  const {setUser} = useContext(UserContext)
  const { theme,setTheme } = useContext(ThemeContext);
  const [toShow, setToShow] = useState(false)
  return (
    <>
    <div className="sidebar" style={{
        backgroundColor : theme ? "#ffffff" : "#121212",
        color : !theme ? "#ffffff" : "#121212",
        borderRight:`1px solid ${!theme ? "#ffffff" : "#121212"}` ,
    }}>
      <div>
        <img src={appLogo} className="sideBarIMG"/>
        <ul className="navBtn">
          <li>
            <MessageCircleMore size={28}/>
          </li>
          <li>
            <UserRoundCog size={28} onClick={() => setToShow(prev => !prev)}/>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navBtn">
          <li onClick={() => setTheme(!theme)}>{theme? <Sun size={28}/> : <Moon size={28}/>}</li>
          <li>
            <LogOut onClick={() => setUser(null)} size={28} color="red"/>
          </li>
        </ul>
      </div>
    </div>
    {toShow && <PersonalDetails setToShow={setToShow}/>}
    </>
  );
};

export default Sidebar;
