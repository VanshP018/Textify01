import React, { useContext, useState } from "react";
import { addContact } from "../api/axios";
import { UserContext } from "../context/UserContext";

const AddContact = ({setToShow,setSomethingChange}) => {
    const {user} = useContext(UserContext)
    const [contact,setContact] = useState({contactName:"",contactEmail:""}) 

    const handelOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value        
        setContact(prev => {
            return {...prev,[name]:value}
        })
    }
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await addContact(user.id,contact)
            alert(res.data.message)
            // console.log(res);
            setToShow(prev => !prev)
            setSomethingChange(prev => !prev)
            setContact({ contactName: "", contactEmail: "" }) 
        } catch (error) {
            alert(error.response.data.message)
            console.log(error);
        }
    }
  return (
    <div className="overlay">
      <div className="AddContainer">
        <h2>Add Contact</h2>
        <form onSubmit={handelSubmit}>
          <input type="text" name="contactName" placeholder="Name"  
          value={contact.name}
          onChange={handelOnChange}
          required 
          />
          <input type="email" name="contactEmail" placeholder="Email" 
          value={contact.email}
          onChange={handelOnChange}
          required 
          />
          <div className="actions">
            <button type="submit">Add</button>
            <button type="button" onClick={() => setToShow(prev => !prev)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
