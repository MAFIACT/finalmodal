import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Web3 Dashboard',
  description: 'Wallet + PNL on Base chain'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
