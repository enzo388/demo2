import React, { useEffect } from 'react';

import "../inicio/home.css"

import space from "../../media/space.gif";
import pf from "../../media/Pf.PNG";
import flight from "../../media/Flyght.PNG";
import pokemon from "../../media/pokemon.png";
import aluxion from "../../media/aluxion.PNG";
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import selfControl from "../../media/selfControl.mp3"
import Success from "../../media/Success.mp3"
import mix from "../../media/mix.mp3"
import Push from "../../media/Push.mp3"
import Shake_It_Up from "../../media/Shake_It_Up.mp3"
import Take from "../../media/Take.mp3"
import Shes_On_Fire from "../../media/Shes_On_Fire.mp3"
import Right_Combination from "../../media/Right_Combination.mp3"
import ReactAudioPlayer from 'react-audio-player';
import Typewriter from 'typewriter-effect';
import Nav from ".//boton"
import GlassCard from "./glasscard"
import VariantCard from "./VariantCard"
import Link from "@mui/material/Link";
import { gsap } from "gsap";
import AnimatedCursor from "react-animated-cursor"
import Card from "react-animated-3d-card";
import { Carousel } from "react-carousel-minimal";
import Footer from "./footer"


/* import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; */


function Home() {

   /*  const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      }; */
  

    return (
        <div className="space">
      
     {/*  <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    /> */}
            </div>

    )
}

export default Home;