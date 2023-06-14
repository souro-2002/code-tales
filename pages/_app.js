import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <Analytics/>
  </>
}
