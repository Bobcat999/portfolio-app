import React from 'react';
import "./Home.css";

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
      <div className="basic-info">
        <div className="greeting">
          <div>Hi,</div>
          <div>I'm Bruce</div>
        </div>
        <div className="bio">
          <div className="bio-title fade-in">About Me</div>
          <div className="bio-content">
            {bio.content.map((line, index) => (
              <div className="fade-in" key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
