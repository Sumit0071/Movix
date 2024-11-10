import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Enjoy a world of movies and shows at your fingertips. From classics to the latest hits, stream anytime, anywhere, on any device. Personalized recommendations and 24/7 support ensure an effortless viewing experience tailored just for you.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/sonic_blizard/" target="_blank" >
                            <FaInstagram />
                        </a>

                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/sad2004/" target="_blank">
                            <FaLinkedin />
                        </a>
                    </span>
                </div>
                <div style={{ marginTop: "5px", fontSize: "12px", color: "#666" }}>
                    <img href="assets/logo.png" />
                    © Sumit 2024 All Rights Reserved
                </div>
            </ContentWrapper>
        </footer>
    );
};


