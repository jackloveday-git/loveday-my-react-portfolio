// React Footer by Jack Loveday

// Import dependencies
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Pull the icons we want to use
import {
    faInstagram,
    faGithub,
    faLinkedin,
    faCopyright
} from "@fortawesome/free-brands-svg-icons";

// Footer function
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        2021 Jack Loveday
                    </span>
                </div>
                <a
                    href="https://github.com/jackloveday-git"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.instagram.com/loveday.jt/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://www.linkedin.com/in/jack-loveday-2a847020a/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;