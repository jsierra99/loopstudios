import React from 'react';
import vr from "../img/image-interactive.jpg"; 
import "../css/about.scss";

const About = () => 
{
    return (
        <section className="about">
            <div className="container">
                <div className="grid_about">
                    <img src={vr} alt="vrImage" />
                    <div className="about1">
                        <h1>the leader in interactive vr</h1>
                        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best 
                        companies around the globe. Our award-winning creations have transformed businesses through digital experiences 
                        that bind to their brand.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
