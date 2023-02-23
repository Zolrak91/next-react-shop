import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import CartItem from '@components/CartItem';
import IconArrow from '@components/IconArrow';
import styles from '@styles/Cart.module.scss';

const Cart = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        let sum = 0;

        state.cart.forEach(item => {
            sum += item.price;
        });
        return sum;
    };

    return (        
        <aside className={styles["product-detail"]}>
            <div className={styles["title-container"]}>
                <IconArrow/>
                <p className={styles.title}>My order</p>
            </div>    
            <div className={styles["my-order-content"]}>
                {state.cart.map((item, index) => (
                    <CartItem product={item} key={index} indexValue={index} />
                ))}
                <div className={styles.order}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>    
                <Link className={styles["primary-button"]} href="/checkout">
                    Checkout
                </Link>
            </div>
        </aside>        
    );
};

export default Cart;