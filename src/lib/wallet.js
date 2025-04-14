'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { base } from 'wagmi/chains'

export const projectId = 'YOUR_PROJECT_ID' // Replace with your WalletConnect project ID

const metadata = {
  name: 'Web3 Dashboard',
  description: 'Wallet & PNL on Base chain',
  url: 'https://my-web3-dashboard.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  projectId,
  metadata,
  chains: [base]
})

createWeb3Modal({ projectId, chains: [base], wagmiConfig: config })
