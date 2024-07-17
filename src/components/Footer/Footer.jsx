import React from 'react';
import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sri</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/" className="footer__social-icon" target="_blank" rel="noopener noreferrer" cursor="pointer">
                    <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://x.com/invic_maneo" className="footer__social-icon" target="_blank" rel="noopener noreferrer" cursor="pointer">
                    <i class="uil uil-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sri-kailaash-kumar-s-7751b1260/" className="footer__social-icon" target="_blank" rel="noopener noreferrer" cursor="pointer"> 
                    <i class="uil uil-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; maximistic. All Rights Reserved</span>
            </div>
        </footer>
    )
}
export default Footer;