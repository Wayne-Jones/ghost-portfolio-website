import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
