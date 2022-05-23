import React, { useEffect } from "react";
import {
  Container,
  Form,
  Button,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { BrowserRouter as Switch, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { logoutUser } from "../../redux/Action/EventAction";
import Logo from "../../Logo.png";
import { getuserinfo } from "../../redux/Action/UserAction";


function NavbarConnect() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
const token =localStorage.getItem("token")
 const { Loading, users, error } = useSelector((state) => state.User_Select);
 let [Data, setData] = useState(users);
 useEffect(() => {
  dispatch(getuserinfo(token))
 }, [])

  // const history = useHistory();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
    //  <Navigate to="/" />;
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      width="100%"
      className="d-flex justify-content-around"
      
    >
      <div className="wrapper">
        <Link to={"/"}>
          <Navbar.Brand>      <img
            src={Logo}
            alt=""
            width="130"
            height="55"
          /></Navbar.Brand>
        </Link>

        <Form className="d-flex ">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <div className="dropdown" text-align="center">
          <div className="d-flex ">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle "
              height={25}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={users.Username}
            >
              <NavDropdown.Item > <Link to="/Profile" style={{ textDecoration: "none" }}> Profile </Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Parametre</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>déconnexion</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarConnect;
