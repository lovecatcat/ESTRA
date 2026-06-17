import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen text-white font-sans bg-bg-primary">
      <Nav />
      <main className="pt-nav">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
