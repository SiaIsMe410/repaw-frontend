import type { Metadata } from 'next'
import './globals.css'
import Nav    from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import Cursor from '@/components/shared/Cursor'

export const metadata: Metadata = {
  title: 'REPAW — Do It Together',
  description: '将宠物定义为主人的运动搭子，打造专属运动装备',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
