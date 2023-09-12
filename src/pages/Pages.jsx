import React from "react";
import Banner from "../components/banner/Banner";
import Discount from "../components/bigdiscount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrival from "../components/newarrivel/NewArrival";
import Shop from "../components/shop/Shop";
import TopCate from "../components/topcate/TopCate";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ ProductItems, addToCart, increaseLike, ShopData}) => {
    return (
        <>
            <Home />
            <FlashDeals increaseLike={increaseLike} ProductItems={ProductItems} addToCart={addToCart} />
            <TopCate/>
            <NewArrival/>
            <Discount/>
            <Shop ShopData={ShopData} addToCart={addToCart}/>
            <Banner/>
            <Wrapper/>
        </>
    )
}

export default Pages