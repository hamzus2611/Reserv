import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuserinfo, login } from "../../redux/Action/UserAction";
import "./Login.css";
import { BrowserRouter as Switch, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.usereducer);
  const { Loading, users, err } = useSelector((state) => state.User_Select);
  const token = localStorage.getItem("token");
  // console.log(users.UserRole);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ Email, Password }));
  };
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);
  return (
    <div>
      {Loading ? (
        <div>Lading</div>
      ) : token ? (
        users.UserRole == "Admin" ? (
          <Navigate to="/Admin" />
        ) : users.UserRole == "Organisateur" ? (
          <Navigate to="/organisateur" />
        ) : (
          <Navigate to="/" />
        )
      ) : (
        <div className="body">
          <div className="containerS">
            <form onSubmit={handleLogin} className="formL">
              <h1 className="titreL">Sign in</h1>
              <label className="labelL">Email</label>
              <input
                type="email"
                className="inputL"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="labelL">Password</label>
              <input
                type="password"
                className="inputL"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                {error ? (
                  <div style={{ color: "red" }}>wrong password or email</div>
                ) : (
                  " "
                )}
              </div>
              <button className="buttonL">submit</button>
              Vous n'avez pas encore de compte ?{" "}
              <Link to="/register">Créez-en un !</Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
