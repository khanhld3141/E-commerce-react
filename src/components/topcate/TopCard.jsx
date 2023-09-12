import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TData from './TData.js'

const TopCard = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <>
            <Slider {...settings}>
                {
                    TData.map((value, index) => (
                        <div className="box" key={index}>
                            <div className="product top-card">
                                <div className="img">
                                    <img src={value.cover} alt="" />
                                </div>
                                <div className="name-top f_flex">
                                    <span className="tleft">{value.cate}</span>
                                    <span className="tright">{value.des}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default TopCard