import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Healing Touch Hospital, Ambala"
        }
        imageUrl={"/hospital.jpg"}
        quote={`"Healing you With a Touch of Care"`}
        para={"Healing Touch Hospital is a state-of-the-art 300+ beds Multispecialty Hospital dedicated to providing comprehensive healthcare services with compassion and expertise. Our team of skilled professionals is committed to delivering personalized care tailored to each patient's needs. At Healing Touch, we prioritize your well-being, ensuring a harmonious journey towards optimal health and wellness."}
      />
      <Biography imageUrl={"/who-we-are.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
