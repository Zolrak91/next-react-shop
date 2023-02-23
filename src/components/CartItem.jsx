import React from 'react';
import Image from 'next/image';
import IconClose from '@components/IconClose';
import styles from '@styles/CartItem.module.scss';

const CartItem = ({ product, indexValue }) => {
    return (        
        <div className={styles["shopping-cart"]}>
            <figure>
                <Image src={product.images[0]} alt={product.title} width={240} height={240} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <IconClose indexValue={indexValue} />
        </div>    
    );
};

export default CartItem;