import React from "react";
import { FaFacebook, FaTwitter, FaSnapchat } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Servicios</h3>
                            <ul>
                                <li><a href="#">Consultas</a></li>
                                <li><a href="#">Ventas</a></li>
                                <li><a href="#">Asesoramiento</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Sobre Nosotros</h3>
                            <ul>
                                <li><a href="#">Empresa</a></li>
                                <li><a href="#">Equipo</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>ligthing .net</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item social">
                            <a href="#"><FaFacebook/></a>
                            <a href="#"><FaTwitter/></a>
                            <a href="#"><FaSnapchat/></a>
                            <a href="#"><RiInstagramFill/></a>
                        </div>
                    </div>
                    <p className="copyright">Main IT © 2022</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;