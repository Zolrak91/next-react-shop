import Script from 'next/script';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';
import '@styles/Header.module.scss';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
      // IMPORTAR SCRIPT DE GOOGLE ANALYTICS AQUI PARA PROBAR (Despues del deploy)
      // Script de googletagmanager
      // El otro script
    <AppContext.Provider value={initialState}>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5TLXYC84GH" />
    <Script id="google-analytics">
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5TLXYC84GH');`}
    </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
