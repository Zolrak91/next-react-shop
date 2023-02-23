import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const Products = () => {
    const products = useGetProducts(API);

    return (
        <section className={styles["product-list-container"]}>
            <div className={styles["cards-container"]}>
                {products.map(product => {
                    if (product.images.length > 0 && product.images[0] !== '' && product.images[0].startsWith('https://')) {
                        return <ProductItem product={product} key={`productItem-${product.id}`} />;
                    }
                })}
            </div>
        </section>
    );
};

export default Products;