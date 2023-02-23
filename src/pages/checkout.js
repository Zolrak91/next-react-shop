import React, { useContext } from 'react';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import Order from '@components/Order';
import CartItem from '@components/CartItem';
import styles from '@styles/Checkout.module.scss';

const Chekout = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.checkout}>
        <div className={styles['checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['checkout-content']}>
            {/* Probablemente elimine Order y lo pase a codigo y use variables envez de texto plano */}
            <Order />
            {state.cart.map((item, index) => (
              <CartItem product={item} key={index} indexValue={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chekout;
