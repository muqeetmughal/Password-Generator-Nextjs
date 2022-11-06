import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import NextProgress from "next-progress";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
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
