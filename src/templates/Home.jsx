import React from 'react';
import Layout from '@containers/Layout';
import Header from '@components/Header';
import ProductList from '@containers/ProductList';
import Sidebar from '@components/Sidebar';
import LayoutHome from '@containers/LayoutHome';

const Home = () => {
    return (
        <Layout>
            <Header/>
            <LayoutHome>
                <Sidebar/>
                <ProductList/>
            </LayoutHome>         
        </Layout>
    );
};

export default Home;

// OBSOLETA. AHORA USA INDEX.JS