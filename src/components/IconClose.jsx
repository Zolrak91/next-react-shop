import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import iconArrowClose from '@icons/icon_close.png';

const IconClose = ({ indexValue }) => {
    const { removeFromCart } = useContext(AppContext);
    const handleRemove = index => {
        removeFromCart(index);
    };

    return (
        <Image src={iconArrowClose} alt="close" onClick={() => handleRemove(indexValue)} />
    );
};

export default IconClose;