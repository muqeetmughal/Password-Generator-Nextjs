import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import NextProgress from "next-progress";
import { Toaster } from 'react-hot-toast';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function App({ Component, pageProps }: AppProps) {



  useEffect(() => {
    themeChange(false)
  }, [])

  return (


    <>


      <NextProgress delay={300} options={{ showSpinner: true }} />

      <MainLayout>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>

        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </MainLayout>
    </>
  )
}
