import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout'
import Providers from '../Providers'
import store from '../store/store'



    
    // Optional
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
)

function MyApp(props: AppProps<{ initialReduxState: any }>) {
  const { pageProps, Component } = props


  return (
    <Providers store={store}>
      <Layout title="Lending & Borrowing">
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default MyApp
