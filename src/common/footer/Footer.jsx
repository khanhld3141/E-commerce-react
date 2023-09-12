import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container gird2">
                    <div className="main-foot">
                        <div className='name-page'>Bonik</div>
                        <div className='text-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam dolorum aliquid laudantium. Vel quibusdam sed deleniti tempora a adipisci dolorem voluptate ipsam totam, ipsum reiciendis, tempore suscipit minus placeat?</div>
                        <div className="download f_flex">
                            <div className='icon-dl'>
                                <i class="fab fa-google-play"></i>
                                <span>Google Play</span>
                            </div>
                            <div className='icon-dl'>
                                <i class="fab fa-app-store"></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h2>About us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center</li>
                            <li>How To Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Hoa Khanh Nam, Lien Chieu, Da Nang, Viet Nam</li>
                            <li>Email: ledinhkhanh2004@gmail.com</li>
                            <li>Phone: +84 903 526 144</li>
                        </ul>
                    </div>
                </div>

            </footer>

        </>
    )
}
export default Footer