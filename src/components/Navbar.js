import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        
        <div className='navbar'>
            <nav>
                <div className="arrow"><box-icon type='solid' name='left-arrow-alt'></box-icon></div>  
                <div className="input-search" ><input type="text" placeholder='search...' /><box-icon name='x'></box-icon></div>
                <div className="mic"><box-icon name='microphone' ></box-icon></div>
                <div className="cast"><box-icon name='cast'></box-icon></div>
                <div className="filter"><box-icon name='slider'></box-icon></div>
                <div className="sidebar">
                    <Link to='/'>Data list</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
