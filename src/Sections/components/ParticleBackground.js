import Particles from "react-particles-js";
import React from "react";

function ParticleBackground() {
  return (<Particles
    params={{
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 1500
          }
        },
        "line_linked": {
          "enable": true,
          "opacity": 0.02
        },
        "move": {
          "direction": "right",
          "speed": 0.05
        },
        "size": {
          "value": 1
        },
        "opacity": {
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.05
          }
        }
      },
      "retina_detect": true
    }} />);
}

export default ParticleBackground;
