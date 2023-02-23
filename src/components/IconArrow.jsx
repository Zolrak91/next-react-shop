import React from 'react';
import Image from 'next/image';
import flechita from '@icons/flechita.svg';

const IconArrow = () => {
    return (
        <Image src={flechita} alt="arrow"/>
    );
};

export default IconArrow;