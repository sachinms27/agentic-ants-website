import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}