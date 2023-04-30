import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSun, faMoon, faClone } from "@fortawesome/free-regular-svg-icons";
import logo from '../../public/logo.svg';
import cart from '../../public/cart.svg';

import style from './Navbar.module.scss';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

const searchQuery = (e : any) => {
    e.preventDefault();
}

    return (
        <div className={style.navbar}>
            <Image priority src={logo} alt="Logo" width={291} height={57} />

            <form onSubmit={searchQuery} className={style.searchForm}>
                <input type='text' placeholder='Search here' />
                <input type='submit' value='Search' />
            </form>

            <div className={style.topRight}>
                {theme === 'light' ? 
                <button className={style.topRightIcons}> <FontAwesomeIcon icon={faMoon} /></button> 
                : 
                <button className={style.topRightIcons}><FontAwesomeIcon icon={faSun} /></button> }
                
                <button className={style.topRightIcons}><FontAwesomeIcon icon={faHeart} /></button>
                <button className={style.topRightIcons}> <Image loading='lazy' src={cart} alt="Cart" width={25} height={25} /> </button>
            </div>
        </div>
    )
};

export default Navbar;