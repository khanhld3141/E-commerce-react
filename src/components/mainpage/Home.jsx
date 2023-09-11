import React from "react";
import Categories from "./Categories";

import './Home.css'
import Slide from "./Slider";
const Home = () =>{
    return (
        <>
            <section className="home"> 
                <div className="container d_flex">
                    <Categories/>
                    <Slide/>
                </div>
            </section>
        </>
    )
}

export default Home