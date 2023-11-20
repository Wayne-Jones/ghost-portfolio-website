import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { montserrat } from '@/helper/util'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={`${montserrat.className}`}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
  )
}
