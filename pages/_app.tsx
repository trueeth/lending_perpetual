import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { WagmiConfig, createConfig } from 'wagmi'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    // Required
    appName: 'Your App Name',

    // Optional
    appDescription: 'Your App Description',
    appUrl: 'https://family.co', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
)

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  console.log(Component)
  return (
    <Layout title="Lending and Borrowing">
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </Layout>
  )
}

export default MyApp
