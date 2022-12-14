import React from "react";
import "../styles/global.scss";

import Header  from '../components/Header';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
