import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/ThomasSzentirmay">
                        <img className='logo-img' src={Github} alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img className='logo-img' src={Instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-szentirmay/">
                        <img className='logo-img' src={LinkedIn} alt="LinkedIn" />
                    </a>
                </div>

                <div className="real-logo">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur-f-l"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer;