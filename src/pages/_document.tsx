import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  if (typeof window !== "undefined") {
    const isDarkThemeSet = localStorage.theme === 'dark';
    const isThemeStored = 'theme' in localStorage;
    const isDarkPrefered = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkThemeSet || (!isThemeStored && isDarkPrefered)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
