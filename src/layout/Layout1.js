import React, { useState, useEffect } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Head from 'next/head'
import Script from "next/script";

function Layout1(props) {
  const [ bgLogoSize, setBgLogoSize ] = useState("800px 600px");

  const handleResize = () =>{
    if(window.innerWidth <= 800){
      setBgLogoSize("550px 400px");
    }
    else if(window.innerWidth <= 600){
      setBgLogoSize("400px 400px");
    }
  }
  useEffect(()=>{
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="../originalNimbusIcon48x48.png" />
        <meta name="description" content={props.description}/>
        <meta name="google-site-verification" content="f76X_xtWRU4U6DBsbb1rb7m78DC5PdqLxMzSyiNRWho" />
       
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EV5RB6XF8Q"></script>
        <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EV5RB6XF8Q');
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
          <div className={`relative bg-background-logo bg-no-repeat mt-20 pb-10`} style={{backgroundPosition: "top", backgroundSize: bgLogoSize }}>
              {props.children}
          </div>
      <Footer />
    </>
  )
}

export default Layout1