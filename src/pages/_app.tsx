import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <main>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>

  )
}
