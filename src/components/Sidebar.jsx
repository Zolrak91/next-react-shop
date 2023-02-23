import React from 'react';
import Link from 'next/link';
import '../styles/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="mobile-menu">
            <ul>
                <li>
                    <Link href="/">CATEGORIES</Link>
                </li>
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
                    <Link href="/">Other</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">My orders</Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/" className="email">platzi@example.com</Link>
                </li>
                <li>
                    <Link href="/" className="sign-out">Sign out</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;