import React from 'react';
import logo from '../assets/images/logo.svg';
import {Link} from 'react-router-dom'
const Search = ({cardItem}) => {

    window.addEventListener('scroll', () =>{
        const search=document.querySelector('.search');
        search.classList.toggle('active',window.scrollY > 100)
    })

    return (
        <>
            <section className='search'>
                <div className="container c_flex">
                    <Link to='/' className="logo width">
                        <img src={logo} alt='' />
                    </Link>
                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder='Search and hit enter ...' />
                        <span>All Categories</span>
                    </div>

                    <div className="icon f_flex width">
                        <i className="fa fa-user icon-circle"></i>
                        <div className="cart">
                            <Link to='/cart'> 
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span>{cardItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Search;