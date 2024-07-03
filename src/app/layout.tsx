import '@assets/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import Container from '@components/organisms/Container'

const inter = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Hierarchy Frontend',
    template: '',
  },
  description: 'Generated by create next app',
  icons: [{ url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  )
}
