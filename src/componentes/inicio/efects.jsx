import * as React from 'react';
import "../inicio/efects.css"
import ParticlesBg from 'particles-bg'
import icon from "../../images/favicon3.png"
const Efetcs = () => {
    let config = {
        num: [4, 2],
        rps: 1,
        radius: [5, 5],
        life: [1.5, 25],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 1],
        scale: [0.1, 0.1],
        body: icon,
        position: "all",
        //color: ["random", "#ff0000"],
        cross: "dead",
        random: 1
      };

    return (

        
<ParticlesBg type="custom"  bg={true} config={config} ></ParticlesBg>

    );
};
export default Efetcs;