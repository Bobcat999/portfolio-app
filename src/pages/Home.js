import React, { useEffect } from 'react';
// import "./Home.css";

const bio = {
  title: "About Me",
  content: [
    "My name is Bruce Peters.",
    "I'm a developer with experience in Java, C#, React, Javascript, Python, and more.",
    "I am currently a student at Burlingame High School.",
    "I am also a member of the Burlingame Robotics Club, Iron Panthers."
]
}

 export const Home = () => {

  return (
    <div className="home">
      <div className="greeting-wrapper">
        <div className="greeting">
          <div>Hi,</div>
          <div>I'm Bruce</div>
        </div>
      </div>
      <div className="bio">
        <div className="bio-title fade-in">About Me</div>
        <div className="bio-content">
          {bio.content.map((line, index) => (
            <div className="fade-in" key={index}>
              {line}
            </div>
          ))}
        </div>
      </div>
      <div className="profile-pic">
        <img
          src="https://avatars.githubusercontent.com/u/73262340?v=4"
          alt="Bruce Peters"
        />
      </div>

      <div className="contact-info">
        <div className="contact-title fade-in">Contact Me</div>
        <div className="contact-content">
          <div className="fade-in">Email:</div>
          <div className="fade-in">brucebpeters@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
