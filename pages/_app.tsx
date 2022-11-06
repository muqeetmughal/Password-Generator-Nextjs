import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import NextProgress from "next-progress";
import { Toaster } from 'react-hot-toast';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';




export default function App({ Component, pageProps }: AppProps) {

  

  useEffect(()=>{
    themeChange(false)
  },[])

  return (


    <>
      <NextProgress delay={3000} options={{ showSpinner: true }} />

      <MainLayout>

        <Component {...pageProps} />


        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </MainLayout>
    </>
  )
}
