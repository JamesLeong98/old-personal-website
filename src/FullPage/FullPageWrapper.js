import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./FullPageStyles.css";
import AboutMe from "../Sections/AboutMe"
import Home from "../Sections/Home";
import PhotoGallery from "../Sections/PhotoGallery";
import Contact from "../Sections/Contact";
import Resume from "../Sections/Resume";
import Projects from "../Sections/Projects";
import ParticleBackground from "../Sections/components/ParticleBackground";
import { Fade, Slide, Bounce } from "react-reveal";

class FullPageWrapper extends React.Component {

  render() {
      const width = window.screen.width
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["#2d4059", "#2d4059", "#2d4059", "#2d4059", "#2d4059", "#2d4059"]}
        menu={"#myMenu"}
        anchors={["Home", "About", "Resume", "Projects", "Gallery", "Contact"]}
        navigation={width > 767}
        navigationPosition={"right"}
        navigationTooltips={["Home", "About", "Resume", "Projects", "Gallery", "Contact"]}
        responsiveWidth={768}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <div className="section home-section">
                  <Bounce bottom duration={2000}>
                    <img className={"planet1"} src={"https://res.cloudinary.com/df95voyec/image/upload/v1598121068/Personal%20Website/Pngtree_planet_universe_hand-painted_planet_cartoon_3906298_eujwe7.png"}/>
                  </Bounce>
                  <Bounce left duration={2000}>
                      <img className={"ufo"} src={"https://res.cloudinary.com/df95voyec/image/upload/v1598120099/Personal%20Website/Pngtree_ufo_ufo_planet_alien_3951725_smawqn.png"}/>
                  </Bounce>
                  <Fade duration={3000}>
                      <Home/>
                  </Fade>
              </div>
              <div className="section about-section">
                <AboutMe/>
              </div>
              <div className="section resume-section">
                <img className={"spaceship"} src={"https://res.cloudinary.com/df95voyec/image/upload/v1598120101/Personal%20Website/Pngtree_spacecraft_spaceship_spacecraft_3929142_eacdlz.png"}/>
                <Resume/>
              </div>
              <div className="section projects-section">
                <Slide left duration={2000}>
                  <img className={"planet2"} src={"https://res.cloudinary.com/df95voyec/image/upload/v1598151247/Personal%20Website/Pngtree_cartoon_cartoon_stars_cartoon_planet_3919963_s4fbpu.png"}/>
                </Slide>
                <Projects/>
              </div>
              <div className="section gallery-section">
                <PhotoGallery/>
              </div>
              <div className="section contact-section">
                <img className={"astronaut"} src={"https://res.cloudinary.com/df95voyec/image/upload/v1598151248/Personal%20Website/Pngtree_astronauts_land_in_space_free_3924830_rkzqvc.png"}/>
                <Contact/>
              </div>
              <ParticleBackground/>
            </div>
          );
        }}
      />
    );
  }
}

export default FullPageWrapper;
