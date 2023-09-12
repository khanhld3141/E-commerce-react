import React from "react";
import Discount from "../components/bigdiscount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrival from "../components/newarrivel/NewArrival";
import TopCate from "../components/topcate/TopCate";

const Pages = ({ ProductItems, addToCart, increaseLike}) => {
    return (
        <>
            <Home />
            <FlashDeals increaseLike={increaseLike} ProductItems={ProductItems} addToCart={addToCart} />
            <TopCate/>
            <NewArrival/>
            <Discount/>
        </>
    )
}

export default Pages