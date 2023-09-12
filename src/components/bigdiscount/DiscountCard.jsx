import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TData from './DiscountData'

const DiscountCard = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    return (
        <>
            <Slider {...settings}>
                {
                    TData.map((value, index) => (
                        <div className="box arrivals" key={index}>
                            <div className="product top-card">
                                <div className="img">
                                    <img src={value.cover} alt="" />
                                </div>
                                <div className="new-arrivals">
                                    <div className="name-arrival">
                                        {value.name}
                                    </div>
                                    <div className="price-arrival">
                                        $ {value.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default DiscountCard