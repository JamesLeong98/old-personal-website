import React from "react";
import { Carousel } from "react-bootstrap";

import "./styles/Projects.css";

function Projects() {
    const width = window.screen.width;
  return(
    <div className={"main-content"}>
      <h3>{`<Projects/>`}</h3>
        <Carousel className={"projects-carousel"} indicators={width < 768} controls={width > 767}>
            <Carousel.Item>
                <img
                    className="slide-image vibe"
                    alt="vibe"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1600516414/Personal%20Website/Screen_Shot_2020-09-19_at_7.53.05_PM_wqp7kx.png"
                />
                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/Vibe-PennAppsXXI"} target={"_blank"} rel={"noopener noreferrer"}><h4>{`<Vibe/> Mood Playlist Generator`}</h4></a>
                    <p>Web app designed in React and Flask, leveraging WolframAI, Beautiful Soup and vaderSentiment</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image covid-app"
                    alt="covid app"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1600515980/Personal%20Website/Screen_Shot_2020-09-19_at_7.40.58_PM_xjzdn1.png"
                />
                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/covid-app"} target={"_blank"} rel={"noopener noreferrer"}><h4>Covid Info App</h4></a>
                    <p>Simple iOS app built in Swift and Xcode</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image music-player"
                    alt="music player"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1599276640/Personal%20Website/Screen_Shot_2020-09-05_at_11.29.34_AM_aukpk0.png"
                />
                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/scotch-music-player"} target={"_blank"} rel={"noopener noreferrer"}><h4>Scotch Music Player</h4></a>
                    <p>Desktop music player built using React and Electron</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image personal-website"
                    alt="personal website"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1600516414/Personal%20Website/Screen_Shot_2020-09-19_at_7.51.53_PM_smqjge.png"
                />
                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/personal-website"} target={"_blank"} rel={"noopener noreferrer"}><h4>Personal Website</h4></a>
                    <p>Frontend web app designed in React and Bootstrap</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Projects;