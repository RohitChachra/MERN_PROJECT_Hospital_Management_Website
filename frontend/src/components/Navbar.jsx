import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../index";
import { VscAccount, VscCircleSlash } from "react-icons/vsc";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [btn, setbtn] = useState(1);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    setbtn(4);
    navigateTo("/login");
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <img src="/healing-logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <div style={btn === 1 ? { textDecoration: "underline", textDecorationThickness: "2px", textDecorationColor: "#9d2243" } : { textDecoration: "none" }}>
              <Link to={"/"}
                onClick={() => {
                  setShow(!show);
                  setbtn(1);
                }}>
                Home
              </Link></div>
            <div style={btn === 2 ? { textDecoration: "underline", textDecorationThickness: "2px", textDecorationColor: "#9d2243" } : { textDecoration: "none" }}>
              <Link to={"/appointment"}
                onClick={() => {
                  setShow(!show);
                  setbtn(2);
                }}>
                Appointment
              </Link></div>
            <div style={btn === 3 ? { textDecoration: "underline", textDecorationThickness: "2px", textDecorationColor: "#9d2243" } : { textDecoration: "none" }}>
              <Link to={"/about"} onClick={() => {
                setShow(!show);
                setbtn(3);
              }}>
                About Us
              </Link></div>
          </div>
          <div>
            {isAuthenticated ? (<VscAccount className="account_icon" />) : (<VscCircleSlash className="account_icon" />)}
          </div>
          <div>
            {isAuthenticated ? (
              <button className="logoutBtn btn" onClick={handleLogout}
                style={btn === 4 ? { border: "3px solid #9d2243" } : {}}>
                LOGOUT
              </button>
            ) : (
              <button className="loginBtn btn" onClick={goToLogin}
                style={btn === 4 ? { border: "3px solid #9d2243" } : {}}>
                LOGIN
              </button>
            )}</div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
