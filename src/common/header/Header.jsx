import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

import "./Header.css"
const Header=({cardItem})=>{
    return (
        <div>
            <Head/>
            <Search cardItem={cardItem}/>
            <Navbar/>
        </div>
    )
}

export default Header;