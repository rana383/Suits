import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <Navbar />
            
            <div className='intro'>
                <p>CHECK BACK FOR DAILY DEALS .!</p>
                <h1><span>Memorial Day Sale</span></h1>
                <p className='details'>Today's deal: Get 20% Off Select Blue Suits </p>
                <p className='details'>With Code: MySuit1998 </p>
                 <a href='#' className='header-btn'>Details</a>
            </div>
        </div>
    )
}

export default Header;
