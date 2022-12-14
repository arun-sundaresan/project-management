import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import UserProvider from '../contexts/user/provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp
