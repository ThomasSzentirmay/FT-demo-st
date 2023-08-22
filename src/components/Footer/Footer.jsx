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
                    <img className='logo-img' src={Github} alt="" />
                    <img className='logo-img' src={Instagram} alt="" />
                    <img className='logo-img' src={LinkedIn} alt="" />
                </div>
                <div className="real-logo">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="vlur blur-f-l"></div>
            <div className="vlur blur-f-2"></div>
        </div>
    )
}

export default Footer;