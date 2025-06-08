import './globals.css'
import { ReactNode } from 'react'
import Page from './page'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

export const metadata = {
  title: 'Portofolio Keren 🔥',
  description: 'Dibuat dengan Next.js dan Tailwind',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="">
        <Header />
       <Page/>
       <Footer/>
      </body>
    </html>
  )
}