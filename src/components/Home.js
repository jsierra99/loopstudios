import React, { useState } from 'react';
import "../css/home.scss";
import logo from "../img/logo.svg";
import hamburger from "../imgMobile/icon-hamburger.svg";
import close from "../imgMobile/icon-close.svg";

const Home = () => 
{
    const [show, setShow] = useState(false);

    return (
        <section className="home">
            <div className={show ? "show" : "container"}>
                <header>
                    <img src={logo} alt="logo" />
                    <nav>
                        <ul className="home_links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#support">Support</a></li>
                        </ul>
                    </nav>
                    <img onClick={() => setShow(!false)} className="hamburger" src={hamburger} alt="hamburger" />
                    <img onClick={() => setShow(!true)} className="close" src={close} alt="close" />
                </header>
                <div className="title">
                    <h1>immersive <br /> experiences <br /> that deliver</h1>
                </div>
            </div>
        </section>
    )
}

export default Home
