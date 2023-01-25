import GalleryContextProvider from '../src/context/GalleryContext'
import TeamProfileContextProvider from '../src/context/TeamProfileContext'
import '../styles/globals.css';
import '../styles/Login.css';
import '../styles/Skeleton.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/CountDownSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-slideshow-image/dist/styles.css';
import Script from "next/script";
import AidProjectContextProvider from '../src/context/AidProjectContext';
import { AuthProvider } from '../src/context/AuthContext';
import  CookieConsent,{ getCookieConsentValue } from "react-cookie-consent"
import { useRouter } from 'next/router';
import cookieCutter from 'cookie-cutter'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [ isPopupActive, setIsPopupActive ] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const acceptCookieConscent = () =>{
    return Boolean(getCookieConsentValue("nm-cookie-conscent"))
  }

  const showPopup = () =>{
    return(
      !(pathname.includes("/admin")) && !acceptCookieConscent()
    )
  }
  useEffect(()=>{
    const popupTimeout = setTimeout(() => {
      setIsPopupActive(showPopup())
    }, 3000);
  },[])
  return (
    <>
      <Script 
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-EV5RB6XF8Q"}
      />
      <Script
      strategy="lazyOnload"
      >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EV5RB6XF8Q');
        `}
      </Script>
      <div className='xxl:w-75% mx-auto'>
      <AuthProvider>
        <AidProjectContextProvider>
          <GalleryContextProvider>
            <TeamProfileContextProvider>
              <Component {...pageProps} />
            </TeamProfileContextProvider>
          </GalleryContextProvider>
        </AidProjectContextProvider>
      </AuthProvider>
      </div>
      {
        isPopupActive &&
        <CookieConsent 
          enableDeclineButton
          buttonText="Accept" 
          declineButtonText="Decline"
          setDeclineCookie={false}
          cookieName="nm-cookie-conscent"
          style={{ background: "rgba(22, 164, 222, 1)" }}
          buttonStyle={{ color: "#1E52AE", fontSize: "13px" }}
        >
          We use cookies to improve user experience and analyze website traffic. By clicking “Accept,“ you agree to our website's cookie use as described in our <a href='/cookie-policy' target='_blank' rel='noreferrer noopener' className='text-charity-color1 underline'>Cookie Policy</a>.
        </CookieConsent>
      }

      
    </>
  )
}

export default MyApp
