import React from 'react';
import profile from '../../media/prueba.jpg';
import ilustracion from '../../media/baner.webm';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Carousel } from "react-carousel-minimal";

import robo1 from "../../media/robo1.png";
import robo2 from "../../media/robo2.png";
import robo3 from "../../media/robo3.png";
import robo4 from "../../media/robo4.png";
import zIndex from '@mui/material/styles/zIndex';

const Container = styled(animated.div)`
display: inline-block;

/* background-color: #0061b5; */
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);

background-clip: border-box;
cursor: pointer;
width: 100%;
height: 100%;
background-size: cover;
box-shadow: inset 200px 200px 200px #003B89,
	0px 0px 40px rgba(255, 255, 255, 0); 
transition: all 0.2s;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;


const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;

`;

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
    color: white;
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
    color: white;
`;
const StyledH6 = styled.h6`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 5px;
    color: white;
`;





 const calc = (x, y) => [-(y - window.innerHeight / 2) / 80, (x - window.innerWidth / 2) / 700, 0.98]
  const trans = (x, y, s) => `perspective(1900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))



  
    return (





        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans),

            }}
        >   
            <div className="container-info">
            {/* <StyledImg src={profile} /> */}
        
            
                <video autoPlay loop muted preload='none' id='ilustracion' >
                    <source src={ilustracion} type="video/webm"   preload='auto' alt="cargando"/>
         
                </video>



                  {/*     video/webm */}
                




            </div>
            <h1 className="h1-baner">AmpersLab</h1>
        <h6  className="h3-baner">Imagine, cree, mida, itere y escale soluciones sin problemas con nuestro marco integral de prácticas de design thinking, Agile y DevOps. Acelere la creación de valor y adopte las tecnologías innovadoras a través de una asociación entre su equipo y un grupo diverso de expertos de IBM en negocios, diseño y tecnología.</h6> 
        
        </Container>



      
    );
}

export default GlassCard;