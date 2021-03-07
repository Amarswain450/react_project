import React from 'react';
import logoOne from '../assets/veg1.jpg';
import logoTwo from '../assets/veg2.jpg';
import logoThree from '../assets/veg3.jpg';

const Banner = () => {
    return (
        <div>
            <header>
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={logoOne} alt="veg1" />
                        </div>
                        <div class="carousel-item">
                            <img src={logoTwo} alt="veg2" />
                        </div>
                        <div class="carousel-item">
                            <img src={logoThree} alt="veg3" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Banner
