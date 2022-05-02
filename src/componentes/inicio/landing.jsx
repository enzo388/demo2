import React, { useEffect } from 'react';

import "../inicio/landing.css"

import food from "../../media/foodCapture.PNG";
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
import Efects from "./efects"

import robo1 from "../../media/robo1.png";
import robo2 from "../../media/robo2.png";
import robo3 from "../../media/robo3.png";
import robo4 from "../../media/robo4.png";

function Landing() {


  const [animacion, setAnimacion] = React.useState(0);




  useEffect(() => {

  }, [animacion])

  const data =
    [{
      image: robo1,
      caption: ""
    },
    {
      image: robo2,
      caption: ""
    },
    {
      image: robo3,
      caption: ""
    },
    {
      image: robo4,
      caption: ""
    }
    ]
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };








  return (
    <div className="Landing-Cointainer">
      {/*  <AnimatedCursor

    /> */}
      <Nav />

      <div className="cardCointainer">
        <GlassCard />


      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>

      <h3 >El cambio no está limitado a un negocio o industria. Está sucediendo en todo el mundo, cada momento de cada día. Para los líderes empresariales, la complejidad de la toma de decisiones nunca ha sido mayor. Competir y ganar requiere un socio de confianza con la experiencia y las habilidades para enfocarse en la oportunidad y poner el cambio positivo en funcionamiento rápidamente. Un socio que puede fomentar una toma de decisiones confiables, que lo mantenga por delante del mercado.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum adipisci, harum quae esse enim atque! Soluta omnis, facere veniam, magni eos dignissimos nulla delectus maiores dolorum aspernatur pariatur modi.</h3>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum adipisci, harum quae esse enim atque! Soluta omnis, facere veniam, magni eos dignissimos nulla delectus maiores dolorum aspernatur pariatur modi.</h3>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum adipisci, harum quae esse enim atque! Soluta omnis, facere veniam, magni eos dignissimos nulla delectus maiores dolorum aspernatur pariatur modi.</h3>

      </div>
      
      <Efects />
      <VariantCard />


      <Carousel

        data={data}
        time={3000}
        width="100vw"
        height="auto"
        captionStyle={captionStyle}
        radius="10px"

        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}


        slideBackgroundColor="darkgrey"



        style={{
          textAlign: "center",
          objectFit: "cover",
          padding: "5px",
          margin: "10px",
        }}
      />

      <Footer />
    </div>

  )
}

export default Landing;