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
                    className="slide-image personal-assistant"
                    alt="pa-2"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1605513379/Personal%20Website/Screen_Shot_2020-11-16_at_2.55.16_AM_mmqkra.png"
                />
                <img
                    className="slide-image personal-assistant img-hide"
                    alt="pa-1"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1605513469/Personal%20Website/Screen_Shot_2020-11-16_at_3.55.37_PM_buuvtz.png"
                />
                <img
                    className="slide-image personal-assistant img-hide"
                    alt="pa-3"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1605513379/Personal%20Website/Screen_Shot_2020-11-16_at_2.55.33_AM_m3dppr.png"
                />
                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/duke-personal-assistant"} target={"_blank"} rel={"noopener noreferrer"}><h4>Duke Assistant</h4></a>
                    <p>iOS app integrated with Duke curriculum APIs</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image amazon"
                    alt="amazon"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1605512574/Personal%20Website/Screen_Shot_2020-11-16_at_3.41.28_PM_zdcyti.png"
                />

                <Carousel.Caption>
                    <a href={"https://github.com/JamesLeong98/miniamazon-cs316"} target={"_blank"} rel={"noopener noreferrer"}><h4>Amazon Clone Webapp</h4></a>
                    <p>Full-stack web app built in MERN stack, with user authentication and database fully integrated</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image covid-app"
                    alt="covid app"
                    src="https://res.cloudinary.com/df95voyec/image/upload/v1600569559/Personal%20Website/Screen_Shot_2020-09-20_at_10.38.54_AM_v5alzc.png"
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