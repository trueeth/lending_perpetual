import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

// import { WagmiConfig, createConfig } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
// import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

// const config = createConfig(
//   getDefaultConfig({
//     appName: 'ConnectKit Next.js demo',
//     //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
//     //alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
//     chains: [mainnet, polygon, optimism, arbitrum],
//     walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
//   })
// );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Lending and Borrowing">
      {/* <WagmiConfig config={config}>
        <ConnectKitProvider> */}
      <Component {...pageProps} />
      {/* </ConnectKitProvider>
      </WagmiConfig> */}
    </Layout>
  )
}

export default MyApp
