import * as React from 'react';

import Button from '@mui/material/Button';
import "../inicio/boton.css"
import Link from "@mui/material/Link";
import logo from "../../images/logo2022.png"

const ResponsiveAppBar = () => {


    return (

        <div className="appbar" >
            <img src={logo} alt="logo" className="logo" />

            <div>
                <Button className="btn1" >
                    <Link className="btn1" href="https://wa.me/5492213554594?text=Hola%20Enzo%20Vazquez,%20me%20comunico%20con%20usted%20porque%20me%20interesó%20su%20perfil.%20Hazme%20saber%20en%20que%20horario%20lo%20puedo%20contactar.%20Muchas%20gracias.%20" target="_blank">
                        <h5 className="btn1"> Productos</h5>
                    </Link>

                </Button>
                <Button className="btn1" >
                    <Link href='mailto:enzo.vazquez.388@gmail.com' color='inherit'>
                        <h5 className="btn1">Serivicios</h5>
                    </Link>
                </Button>

           




                <Button className="btn1">
                    <Link className="btn1" href="https://github.com/enzo388" target="_blank">
                        <h5 className="btn1">Nosotros</h5>
                    </Link>
                </Button>

                <Button >
                    <Link className="btn1" href="https://www.linkedin.com/in/enzo-vazquez/" target="_blank">
                        <h5 className="btn1">Contacto</h5>
                    </Link>
                </Button>
            </div>

        </div>

    );
};
export default ResponsiveAppBar;