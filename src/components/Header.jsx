import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import Cart from '@containers/Cart';
import Menu from '@components/Menu';
import logo from '@logos/logo_yard_sale.svg';
import iconMenu from '@icons/icon_menu.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);

    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className={styles.nav}>
            <Image src={iconMenu} alt="menu" className={styles.menu} />
            <div className={styles["navbar-left"]}>
                <Link href="/">
                    <Image src={logo} alt="logo" className={styles["nav-logo"]}/>
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link> 
                    </li>
                    <li>
                        <Link href="/">Clothes</Link> 
                    </li>
                    <li>
                        <Link href="/">Electronics</Link> 
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>  
                    </li>
                    <li>
                        <Link href="/">Toys</Link>    
                    </li>
                    <li>
                        <Link href="/">Others</Link>  
                    </li>
                </ul>
            </div>
            <div className={styles["navbar-right"]}>
                <ul>
                    <li className={styles["navbar-email"]} onClick={handleToggle} aria-hidden="true">
                        platzi@example.com
                    </li>
                    {/* SIN EL "() =>" SALIA UN ERROR POR EXCEDER LIMITE DE RENDERS */}
                    <li className={styles["navbar-shopping-cart"]} onClick={() => setToggleCart(!toggleCart)} aria-hidden="true">
                        <Image src={iconShoppingCart} alt="shopping cart"/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            {toggleCart && <Cart/>}
        </nav>
    );
};

export default Header;