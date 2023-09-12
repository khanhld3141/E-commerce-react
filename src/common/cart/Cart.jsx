import React from 'react';

import './Cart.css'

const Cart = ({ cardItem, addToCart, deleteOne, deleteProduct }) => {
    let totalPrice = 0;
    if (cardItem.length > 0) {
        cardItem.map((item) => {
            totalPrice = totalPrice + item.price * item.total
        })
    }
    
    return (
        <>
            <section className="cart-item">
                <div className="container d_flex">

                    <div className="cart-detail">
                        {cardItem.length === 0 && <h1 className='product no-item'>No Items are added in Cart</h1>}
                        {cardItem.length > 0 && cardItem.map((value, index) => (
                            <div className='cart-list product d_flex' key={index}>
                                <div className="left">
                                    <img src={value.cover} alt='' />
                                </div>
                                <div className="right">
                                    <div className="name-product">
                                        {value.name}
                                    </div>
                                    <div className="price-product">
                                        <span className='cal-price'>{value.price}.00 * {value.total}</span>
                                        <span className='total'>{value.price * value.total}.00</span>
                                    </div>
                                </div>
                                <div className='control-btn-cart'>
                                    <button className='btn-times' onClick={()=>deleteProduct(value)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                    <button className='btn-plus' onClick={() => addToCart(value)}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <button className='btn-minus' onClick={() => deleteOne(value)}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className="cart-summary product">
                        <div className="header">Cart Summary</div>
                        <div className="footer">
                            <span className="total-text">Total price:</span>
                            <span className='total-price'>$ {totalPrice}.00</span>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Cart