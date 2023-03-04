import Script from 'next/script';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';
import '@styles/Header.module.scss';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5TLXYC84GH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7T9ZEH5GNQ');
          `}
        </Script>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}
