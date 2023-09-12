import React from 'react'
import NewArrivalCard from './NewArrivalCard'
const NewArrival = () => {
    return (
        <>
            <section className="top-cate background">
                <div className="container">
                    <div className="head-top">
                        <div className="heading f_flex arrivals">
                            <img src="./images/newarivel/new.png" alt="" />
                            <h1>New Arrivals</h1>
                        </div>
                        <div className="view-all">
                            <span>View all</span>
                            <i className="fas fa-caret-right"></i>
                        </div>
                    </div>
                    <div className="arrivals">
                        <NewArrivalCard/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NewArrival