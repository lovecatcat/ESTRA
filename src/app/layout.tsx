import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ESTRA — Structure is the argument.',
  description: 'ESTRA brand website — Structure is the evidence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-primary text-white font-sans min-h-screen">
        <Nav />
        <main className="pt-nav">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
