import Head from 'next/head';
import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>React/Next Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
