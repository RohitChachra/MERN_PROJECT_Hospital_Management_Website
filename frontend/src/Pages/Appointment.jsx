import React from "react";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>Schedule Your Appointment</h1>
          <p>Booking your appointment at Healing Touch is quick and easy. Simply fill out the form given below, and our dedicated team will ensure you receive the care you need when you need it.</p>
          <table className="visit-hours">
            <tbody>
            <h4>Visiting Hours</h4>
            <tr><td>Monday</td><td>9:00 AM - 10:00 PM</td></tr>
            <tr><td>Tuesday</td><td>9:00 AM - 10:00 PM</td></tr>
            <tr><td>Wednesday</td><td>10:00 AM - 10:00 PM</td></tr>
            <tr><td>Thursday</td><td>9:00 AM - 9:00 PM</td></tr>
            <tr><td>Friday</td><td>9:00 AM - 9:00 PM</td></tr>
            <tr><td>Saturday</td><td>9:00 AM - 3:00 PM</td></tr>
            </tbody>
          </table>
        </div>
        <div className="banner">
          <img src="/appointment.webp" alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
