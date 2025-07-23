import React, { useContext, useState } from "react";
import { SignupUser } from "../api/axios.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import loginIMG from "../assets/logo_img.jpg";
import "../css/Auth.css";

const Signup = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const hangleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await SignupUser(userData);
      const data = res.data.user;
      setUser(data);
      navigate("/home")
      // console.log(data);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="authBox">
      <div class="authContainer">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name}
            onChange={hangleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={hangleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={hangleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          Already have an account?
          <Link to="/login" className="authLink">
            Login
          </Link>
        </p>
      </div>
      <img src={loginIMG} />
    </div>
  );
};

export default Signup;
