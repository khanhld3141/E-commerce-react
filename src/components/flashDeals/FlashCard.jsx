import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fas fa-arrow-left"></i>
            </button>
        </div>
    )
}

const FlashCard = ({ ProductItems, addToCart, increaseLike}) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <Slider {...settings}>
                {
                    ProductItems.map((value, index) => (
                        <div className="box" key={index}>
                            <div className="product mtop">
                                <div className="img">
                                    <div className="header">
                                        <span className="discount">{value.discount}% Off</span>
                                        <div className="product-like">
                                            <label htmlFor="">{value.like}</label>
                                            <br />
                                            <i className="fas fa-heart " onClick={() => increaseLike(value)}></i>
                                        </div>
                                    </div>
                                    <img src={value.cover} alt="" />
                                </div>

                                <div className="product-detail">
                                    <h3>{value.name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <h4>{value.price}.00</h4>
                                        <button onClick={() => addToCart(value)}>
                                            <i className="fa fa-plus" ></i>
                                        </button>
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

export default FlashCard