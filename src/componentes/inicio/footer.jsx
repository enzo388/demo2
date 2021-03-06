import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "./footer.css";
import WhatsappIcon from "../../images/WhatsappIcon.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "../../images/InstagramIcon.png";
import FacebookIcon from "../../images/FacebookIcon.png";
import TwitterIcon from "../../images/TwitterIcon.png";


export default function Footer() {
    return (
        <div className="footerContainer">
            <footer sx={{ bgcolor: "yellow" }}>
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 2 }}
                    bgcolor='text.secondary'
                    color='white'
                    sx={{ bgcolor: "#000027" }}
                    width={{ width: "99.1vw"}}
                >
                    <Container className="footerContainer">
                        <div className="footerContainer2">
                            <div className="footerContainer3">
                                <div className='footerName'>
                                    <div className='footerTitle'>
                                        <Box>Flight Academy</Box>
                                    </div>
                                    <Box mt={2} sm={10}>
                                        Escuela de Vuelo y servicios aéreos, Aeródromo de Morón (SADM / MOR), Buenos Aires, Argentina.
                                    </Box>
                                    <Box mt={4}>
                                        Centro de Instrucción y Entrenamiento (CIAC) Tipo 3 certificado por ANAC.
                                    </Box>
                                </div>
                            </div>
                        {/*     <div className="footerContainer3">
                                <div className="footerTitle">
                                    <Box>Contacto</Box>
                                </div>
                                <Box mt={2}>
                                    <div>
                                        <div className="btnLogin">
                                            <img src={WhatsappIcon} width={20} />
                                            <Link href="https://wa.me/5492213554594?text=Me%20interesa%20volar%20con%20ustedes,%20¿Me%20pasaría%20más%20información%20acerca%20de%20la%20escuela?" target="_blank">
                                                +54 9 11 5481 2986
                                            </Link>
                                        </div>
                                    </div>
                                </Box>
                                <Box mt={1}>
                                    <div>
                                        < MailOutlineIcon />
                                        <Link href='mailto:gastondigilio@gmail.com' color='inherit'>
                                            gastondigilio@gmail.com
                                        </Link>
                                    </div>
                                </Box>
                            </div> */}
                            <div className="footerContainer3">
                                <div className="footerTitle">
                                    <Box>Más información</Box>
                                </div>
                                <Box mt={2}>
                                    <Link href='https://cad.anac.gob.ar/' target='_blank' color='inherit'>
                                        CAD ANAC
                                    </Link>
                                </Box>
                                <Box mt={1}>
                                    <Link href='http://ais.anac.gov.ar/notam' target='_blank' color='inherit'>
                                        NOTAMs
                                    </Link>
                                </Box>
                                <Box mt={1}>
                                    <Link href='https://skyvector.com/' target='_blank' color='inherit'>
                                        Sky Vector
                                    </Link>
                                </Box>
                                <Box mt={1}>
                                    <Link href='https://yovuelo.com.ar/' target='_blank' color='inherit'>
                                        Yo vuelo
                                    </Link>
                                </Box>
                                <Box mt={1}>
                                    <Link href='https://www.smn.gob.ar/' target='_blank' color='inherit'>
                                        SMN
                                    </Link>
                                </Box>
                            </div>
                            <div className="footerContainer3">
                                <div className="footerTitle">
                                    <Box>Seguinos en</Box>
                                </div>
                                <Box mt={2}>
                                    <div className="footerPrueba">
                                        <div className="footerPrueba">
                                            <Link href='https://www.instagram.com' target="_blank" color='inherit'>
                                                <img src={InstagramIcon} width={25} />
                                            </Link>
                                        </div>
                                        <div className="footerPrueba">
                                            <Link href='https://www.facebook.com' target="_blank" color='inherit'>
                                                <img src={FacebookIcon} width={25} />
                                            </Link>
                                        </div>
                                        <div className="footerPrueba">
                                            <Link href='https://www.twitter.com' target="_blank" color='inherit'>
                                                <img src={TwitterIcon} width={25} />
                                            </Link>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </div>
                        <Box textAlign='center' pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
                            <Link href="/politica-privacidad" color="inherit">
                                {' Política de privacidad |'}
                            </Link>
                            <Link href="/politica-cookies" color="inherit">
                                {' Política de cookies |'}
                            </Link>
                            <Link href="/aviso-legal" color="inherit">
                                {' Aviso legal '}
                            </Link>
                        </Box>
                    </Container>
                </Box>
            </footer >
        </div >
    );
}
