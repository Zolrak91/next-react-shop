import React from 'react';
import Layout from '@containers/Layout';
import Order from '@components/Order';
import IconArrow from '@atoms/IconArrow';
import styles from '@styles/OrderHistory.module.scss';

const OrderHistory = () => {
    return (        
        <div className={styles["my-order"]}>
          <div className={styles["my-order-container"]}>
            <h1 className={styles.title}>My orders</h1>    
            <div className={styles["my-order-content"]}>
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
              <Layout>
                <Order/>
                <IconArrow/>
              </Layout>
            </div>
          </div>
        </div>
    );
};

export default OrderHistory;