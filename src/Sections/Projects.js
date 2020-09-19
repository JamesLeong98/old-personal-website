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
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1600482928/Personal%20Website/Screen_Shot_2020-09-13_at_7.22.01_PM_sy9brk.png"
                />
                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/Vibe-PennAppsXXI"} target={"_blank"} rel={"noopener noreferrer"}><h4>{`<Vibe/> Mood Playlist Generator`}</h4></a>
                    <p>Web app designed in React and Flask, leveraging WolframAI, Beautiful Soup and vaderSentiment</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image personal-website"
                    alt="personal website"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1599217845/Personal%20Website/Screen_Shot_2020-09-04_at_6.39.41_PM_shqipz.png"
                />
                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/personal-website"} target={"_blank"} rel={"noopener noreferrer"}><h4>Personal Website</h4></a>
                    <p>Frontend web app designed in React and Bootstrap</p>
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
        </Carousel>
    </div>
  )
}

export default Projects;