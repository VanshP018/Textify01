import React, { useContext, useState } from "react";
import { LoginUser } from "../api/axios.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import loginIMG from "../assets/logo_img.jpg";
import "../css/Auth.css";

const Login = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({ email: "", password: "" });

  const { setUser } = useContext(UserContext);

  const hangleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginUser(userData);
      // console.log(res);
      const data = res.data.user;
      setUser(data);
      navigate("/home")
      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="authBox">
      <div className="authContainer">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
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
          Don't have an account?
          <Link to="/signup" className="authLink">
            Sign up
          </Link>
        </p>
      </div>
      <img src={loginIMG} />
    </div>
  );
};

export default Login;
