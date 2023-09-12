import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <section className="banner background">
                <div className="container d_flex">
                    <div className="banner-left">
                        <img src="./images/banner/banner-1.png" alt="" />
                    </div>
                    <div className="banner-right">
                        <img src="./images/banner/banner-2.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner