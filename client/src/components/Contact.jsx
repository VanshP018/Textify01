import React, { useContext } from "react";
import "../css/ChatList.css"
import { ThemeContext } from "../context/ThemeContext.jsx";
import { Trash } from "lucide-react";
import { UserContext } from "../context/UserContext.jsx";
import { deleteContact } from "../api/axios.jsx";
import { SelectedPersonContext } from "../context/SelectedPersonContext.jsx";


const Contact = ({contactName,id,setSomethingChange}) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext)
  const {setPerson} = useContext(SelectedPersonContext)

  const handelPerson = () => {
    setPerson({id,contactName})
  }


  const handelClick = async (id) => {
    try {
      const res = await deleteContact(user.id,id)
      setSomethingChange(prev => !prev)
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="user-row" key={id}>
      <div className="user-info" onClick={handelPerson}>
        <div className="user-avatar">
          <h3>{contactName.trim()[0].toUpperCase()}</h3>
        </div>
        <h3
          className="user-name"
          style={{ color: !theme ? "#ffffff" : "#2d3748" }}
        >
          {contactName}
        </h3>
      </div>
      <Trash onClick={() => handelClick(id)} className="trash-icon" color="red" />
    </div>
  );
};

export default Contact;
