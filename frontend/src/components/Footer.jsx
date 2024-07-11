import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 10:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "9:00 AM - 10:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr className="thick-line"/>
        <div className="content">
          <div>
            <img src="/healing-logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Visiting Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span> 1800-1801234</span>
            </div>
            <div>
              <MdEmail />
              <span>healingtouch@<br></br>gmail.com</span>
            </div>
            <div>
              <a href="https://maps.app.goo.gl/Z6k7SsPhV6bfmb8J7"><FaLocationDot />
              <span>Ambala, Haryana</span></a>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        Copyright &copy; 2024. All rights reserved.
      </div>
    </>
  );
};

export default Footer;