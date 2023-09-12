import React from 'react'
import DiscountCard from './DiscountCard'
const Discount = () => {
    return (
        <>
            <section className="top-cate big-discount background">
                <div className="container">
                    <div className="head-top">
                        <div className="heading f_flex arrivals">
                            <i className="fas fa-gift"></i>
                            <h1>New Arrivals</h1>
                        </div>
                        <div className="view-all">
                            <span>View all</span>
                            <i className="fas fa-caret-right"></i>
                        </div>
                    </div>
                    <div className="arrivals">
                        <DiscountCard />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Discount