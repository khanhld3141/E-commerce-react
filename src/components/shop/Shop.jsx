import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import './style.css'
const Shop = ({ShopData,addToCart}) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg />

                    <div className="contentWidth">
                        <div className="head-top d_flex">
                            <div className="heading f_flex arrivals">
                                <h1>Mobile Phones</h1>
                            </div>
                            <div className="view-all">
                                <span>View all</span>
                                <i className="fas fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content gird1">
                            <ShopCart addToCart={addToCart} ShopData={ShopData}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop