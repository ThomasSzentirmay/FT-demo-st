import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/Instagram.png';
import LinkedIn from '../../assets/LinkedIn.png';
import Logo from '../../assets/Logo.png';

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default Footer;