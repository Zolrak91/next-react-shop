import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import btnAddToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (        
        <div className={styles["product-card"]}>
            <Image src={product.images[0]} alt={product.title} width={240} height={240} />
            {/* EXAMPLE - Varia el array por producto */}
            {/* product.images[0] = "https://api.lorem.space/image/furniture?w=640&h=480&r=1714" */}
            {/* product.images[1] = length: 1 */}
            <div className={styles["product-info"]}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)} aria-hidden="true">
                    <Image src={btnAddToCart} alt=""/>
                </figure>
            </div>
        </div>            
    );
};

export default ProductItem;