import React from "react"
import "./styles/AboutMe.css"

function AboutMe() {
  return (
    <div className={"main-content"}>
      <img className={"profile-pic"} src={"https://res.cloudinary.com/df95voyec/image/upload/v1598075318/Personal%20Website/profilepic_zwp5df.jpg"} alt={"profile-pic"} />
      <div className={"about-text"}>
        <h3 className={"introduction-title"}>{`<About Me/>`}</h3>
        <div className={"introduction-text"}>
          <p>Hi! My name is James, and I'm from the sunny island of Singapore.</p>
          <p>I'm a current sophomore at Duke University, double majoring in Computer Science and Economics. I have a deep interest in full-stack development, and am passionate about the downstream applications of technology in tackling real world problems.</p>
          <p>Outside of class, I immensely enjoy traveling and singing. Below, you'll find a gallery showcasing some of the many landscapes and places I've documented during my trips.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;