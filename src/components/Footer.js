import React from 'react';
import "../css/footer.scss";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import pinterest from "../img/icon-pinterest.svg";
import instagram from "../img/icon-instagram.svg";
import logo from "../img/logo.svg";

const Footer = () => 
{
    return (
        <section className="footer">
            <div className="container">
                <div className="flex_top">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="social_media">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
                <div className="flex_bottom">
                    <ul className="footer_links">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                    <div className="social_media_mobile">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />
                    </div>
                    <p>&copy; 2021 Loopstudiops. All rights reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
