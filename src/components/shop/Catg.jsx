import React, { useState } from "react";


const Catg = () => {
    const [isActive, setActive] = useState(true);
    const setIsActive = (name) => {
        if (isActive && name === 'brands') {
            return;
        } else if (!isActive && name === 'shops') {
            return;
        } else {
            setActive(!isActive);
        }
    }
    const All = {
        brands: [
            {
                cateImg: "./images/catg/cat-1.png",
                cateName: "Apple",
            },
            {
                cateImg: "./images/catg/cat-2.png",
                cateName: "Samasung",
            },
            {
                cateImg: "./images/catg/cat-1.png",
                cateName: "Oppo",
            },
            {
                cateImg: "./images/catg/cat-2.png",
                cateName: "Vivo",
            },
            {
                cateImg: "./images/catg/cat-1.png",
                cateName: "Redimi",
            },
            {
                cateImg: "./images/catg/cat-2.png",
                cateName: "Sony",
            },
        ],
        shops: [
            {
                cateImg: "./images/catg/cat-1.png",
                cateName: "AppleStore",
            },
            {
                cateImg: "./images/catg/cat-2.png",
                cateName: "Thế giới di động",
            },
            {
                cateImg: "./images/catg/cat-1.png",
                cateName: "Techcare",
            },
            {
                cateImg: "./images/catg/cat-2.png",
                cateName: "VNG",
            },
            {
                cateImg: "./images/catg/cat-1.png",
                cateName: "Xaoimi",
            },
            {
                cateImg: "./images/catg/cat-2.png",
                cateName: "Sony",
            },
        ]
    }
    let data = isActive ? All.brands : All.shops;
    return (

        <>
            <div className="category">
                <div className="chead d_flex">
                    <h1 className={isActive ? "active" : ''} onClick={() => setIsActive('brands')}>Brands</h1>
                    <h1 className={isActive ? "" : "active"} onClick={() => setIsActive('shops')}>Shops</h1>
                </div>
                {

                    data.map((value, index) => (
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    ))
                }
                <div className="box box2">
                    <button>View all {isActive ? "Brands" : "Shops"}</button>
                </div>
            </div>
        </>
    )
}

export default Catg