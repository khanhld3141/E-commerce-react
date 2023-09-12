import React from "react";

const ShopCart = ({ ShopData, addToCart }) => {
    return (
        <>
    
                {
                    ShopData.map((value, index) => (
                        <div className="box" key={index}>
                            <div className="product mtop">
                                <div className="img">
                                    <div className="header">
                                        <span className="discount">{value.discount}% Off</span>
                                        <div className="product-like">
                                            <label htmlFor="">{value.like}</label>
                                            <br />
                                            <i className="fas fa-heart "></i>
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
      
        </>
    )
}

export default ShopCart