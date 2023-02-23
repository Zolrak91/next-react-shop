import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    {/* CUANDO CORRA BIEN, PROBAR QUTANDOLE LA CLASE TITLE */}
                    <Link href="/" className={styles.title}>My orders</Link>
                </li>            
                <li>
                    <Link href="/">My account</Link>
                </li>            
                <li>
                    <Link href="/">Sign out</Link>
                </li>
            </ul>
      </div>
    );
};

export default Menu;