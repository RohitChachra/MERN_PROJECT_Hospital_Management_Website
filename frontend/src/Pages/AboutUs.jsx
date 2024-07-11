import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us"}
        quote={"Healing Touch Hospital, Ambala"}
        imageUrl={"/aboutus.jpg"}
        para={"At Healing Touch, where compassionate care meets advanced medical expertise. Our hospital has been a cornerstone of the community for over 25 years, dedicated to providing exceptional healthcare services to patients and their families. We envision a healthier future for our community, where every individual has access to top-notch medical care. Our goal is to lead the way in medical innovation, patient satisfaction, and community health initiatives, making a lasting impact on the lives we touch."}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
