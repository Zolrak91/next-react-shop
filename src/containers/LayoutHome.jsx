import React from 'react';
import styles from '@styles/LayoutHome.module.scss';

const LayoutHome = ({children}) => {
    return (
        <div className={styles.LayoutHome}>
            {children}
        </div>
    );
};

export default LayoutHome;