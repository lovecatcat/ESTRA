import { useState } from 'react'
import { Link } from 'react-router-dom'

export const NAV_LINKS = [
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'THE WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
] as const

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-nav bg-bg-primary/90 backdrop-blur-sm border-b border-border">
      <div className="section-inner flex items-center justify-between h-full px-20">
        <Link to="/" className="text-2xl font-medium text-white tracking-wide hover:text-accent transition-colors duration-300">
          ESTRA
        </Link>

        {/* 桌面导航 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm tracking-wider text-white/80 hover:text-accent transition-colors duration-200">
              {l.label}
            </Link>
          ))}
        </div>

        {/* 移动端汉堡 */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`md:hidden absolute top-nav left-0 right-0 bg-bg-elevated border-b border-border overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-inner py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm tracking-wider text-white/80 hover:text-accent py-2 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
