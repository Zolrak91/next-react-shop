import React from 'react';
import Order from '@components/Order';
import CartItem from '@components/CartItem';
import styles from '@styles/Checkout.module.scss';

const Chekout = () => {
    return (
        <div className={styles.checkout}>
            <div className={styles["checkout-container"]}>
                <h1 className={styles.title}>My order</h1>
                <div className={styles["checkout-content"]}>
                    <Order/>                
                    <CartItem/>                  
                    <CartItem/>                  
                    <CartItem/>                  
                    <CartItem/>                  
                </div>
            </div>
        </div>
    );
};

export default Chekout;

// OBSOLETA. AHORA USA CHECKOUT.JS