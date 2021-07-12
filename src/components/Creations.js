import React from 'react';
import "../css/creations.scss";
import earth from "../img/image-deep-earth.jpg";
import arcade from "../img/image-night-arcade.jpg";
import soccer from "../img/image-soccer-team.jpg";
import grid from "../img/image-grid.jpg";
import vr from "../img/image-from-above.jpg";
import borealis from "../img/image-pocket-borealis.jpg";
import curiosity from "../img/image-curiosity.jpg";
import fisheye from "../img/image-fisheye.jpg";

import earthMobile from "../imgMobile/image-deep-earth.jpg";
import arcadeMobile from "../imgMobile/image-night-arcade.jpg";
import soccerMobile from "../imgMobile/image-soccer-team.jpg";
import gridMobile from "../imgMobile/image-grid.jpg";
import vrMobile from "../imgMobile/image-from-above.jpg";
import borealisMobile from "../imgMobile/image-pocket-borealis.jpg";
import curiosityMobile from "../imgMobile/image-curiosity.jpg";
import fisheyeMobile from "../imgMobile/image-fisheye.jpg";

const Creations = () => 
{
    return (
        <section className="creations">
            <div className="container">
                <div className="flex_creations">
                    <h1>our creations</h1>
                    <button>see all</button>
                </div>
                <div className="grid_creations">
                    <div className="creations1">
                        <img src={earth} alt="earth" />
                        <p>deep <br /> earth</p>
                    </div>
                    <div className="creations1">
                        <img src={arcade} alt="arcade" />
                        <p>night <br /> arcade</p>
                    </div>
                    <div className="creations1">
                        <img src={soccer} alt="soccer" />
                        <p>soccer <br /> team vr</p>
                    </div>
                    <div className="creations1">
                        <img src={grid} alt="grid" />
                        <p>the <br /> grid</p>
                    </div>
                    <div className="creations1">
                        <img src={vr} alt="vr" />
                        <p>from up <br /> above vr</p>
                    </div>
                    <div className="creations1">
                        <img src={borealis} alt="borealis" />
                        <p>pocket <br /> borealis</p>
                    </div>
                    <div className="creations1">
                        <img src={curiosity} alt="curiosity" />
                        <p>the <br /> curiosity</p>
                    </div>
                    <div className="creations1">
                        <img src={fisheye} alt="fisheye" />
                        <p>make it <br /> fisheye</p>
                    </div>
                </div>

                <div className="grid_creations_mobile">
                    <div className="creations1">
                        <img src={earthMobile} alt="earth" />
                        <p>deep <br /> earth</p>
                    </div>
                    <div className="creations1">
                        <img src={arcadeMobile} alt="arcade" />
                        <p>night <br /> arcade</p>
                    </div>
                    <div className="creations1">
                        <img src={soccerMobile} alt="soccer" />
                        <p>soccer <br /> team vr</p>
                    </div>
                    <div className="creations1">
                        <img src={gridMobile} alt="grid" />
                        <p>the <br /> grid</p>
                    </div>
                    <div className="creations1">
                        <img src={vrMobile} alt="vr" />
                        <p>from up <br /> above vr</p>
                    </div>
                    <div className="creations1">
                        <img src={borealisMobile} alt="borealis" />
                        <p>pocket <br /> borealis</p>
                    </div>
                    <div className="creations1">
                        <img src={curiosityMobile} alt="curiosity" />
                        <p>the <br /> curiosity</p>
                    </div>
                    <div className="creations1">
                        <img src={fisheyeMobile} alt="fisheye" />
                        <p>make it <br /> fisheye</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Creations
