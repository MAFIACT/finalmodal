'use client'

import { Web3Modal } from '@web3modal/wagmi/react'
import { WagmiProvider } from 'wagmi'
import { config } from '../lib/wallet'

export default function Providers({ children }) {
  return (
    <WagmiProvider config={config}>
      {children}
      <Web3Modal />
    </WagmiProvider>
  )
}
