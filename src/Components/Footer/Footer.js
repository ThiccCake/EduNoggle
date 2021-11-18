import "./Footer.css"

import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer ">
                     <div >
                                {/* <img src="images/Logo.png" alt="footer-image"> */}
                                
                                <div class="social-link">
                                {/* <a href="#"><i class="fab fa-2x fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-2x fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-2x fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-2x fa-twitter"></i></a> */}

                                <a href="https://www.youtube.com/watch?v=XqZsoesa55w"  target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon  className="icon" icon={faFacebook}></FontAwesomeIcon></a>
                                <a href="https://www.youtube.com/watch?v=J---aiyznGQ"  target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon></a>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon></a>
                    
                                <p className='text-white'>copyright @ EduNoggle</p>
                                
                                </div>
            </div>

            
        </div>
    );
};

export default Footer;