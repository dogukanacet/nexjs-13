import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Sidepanel from '@components/Sidepanel'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='app'>
          <Sidepanel />
          {children}
        </main>
    </body>
  </html>
  )
}
