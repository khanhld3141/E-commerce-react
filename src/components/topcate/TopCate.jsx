import React from 'react'
import TopCard from './TopCard'
import './TopCate.css'
const TopCate = () => {
    return (
        <>
            <section className="top-cate background">
                <div className="container">
                    <div className="head-top">
                        <div className="heading f_flex">
                            <span className="fas fa-border-all"></span>
                            <h1>Top Categories</h1>
                        </div>
                        <div className="view-all">
                            <span>View all</span>
                            <i className="fas fa-caret-right"></i>
                        </div>
                    </div>
                    <TopCard />
                </div>
            </section>
        </>
    )
}
export default TopCate