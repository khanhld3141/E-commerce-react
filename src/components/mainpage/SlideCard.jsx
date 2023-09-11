import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sdata from './SlideData'
const SlideCard = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots:(dots)=>{
            return <ul style={{margin:0}}>
                {dots}
            </ul>
        }
    };
    return (
        <>
            <Slider {...settings}>
                {Sdata.map((data, index) => (
                    <div className="box d_flex top" key={index}>
                        <div className="left">
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                            <button className="btn-primary">Visit Collection</button>
                        </div>
                        <div className="right">
                            <img src={data.cover} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default SlideCard