import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Head from 'next/head'
import Script from "next/script";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="../originalNimbusIcon48x48.png" />
        <meta name="description" content={props.description}/>
        <meta name="google-site-verification" content="f76X_xtWRU4U6DBsbb1rb7m78DC5PdqLxMzSyiNRWho" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1TBQ24EZX6"></script>
        <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1TBQ24EZX6');
        `}
        </script>
      </Head>
      <Head>
        <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
              `}
        </Script>
      </Head>
        <Header />
        {props.children}
        {
          props?.footerStatus &&
          <Footer />
        }
    </>
  )
}

export default Layout