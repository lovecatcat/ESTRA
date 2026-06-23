import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NAV_LINKS = [
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'THE WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
  // { label: 'CONTACT', href: '/contact' },
] as const

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-nav bg-bg-primary/90 backdrop-blur-sm border-b border-border">
      <div className="section-inner flex items-center justify-between h-full px-[clamp(16px,4vw,80px)]">
        <Link to="/" className="text-[clamp(18px,1.67vw,24px)] font-medium text-white tracking-wide hover:text-accent transition-colors duration-300">
          ESTRA
        </Link>

        {/* 导航链接 — 仅桌面端显示 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `text-sm leading-4 transition-colors duration-200 border-b ${
                  isActive
                    ? 'border-white'
                    : 'text-white hover:text-accent border-transparent'
                }`
              }
            >
              {l.label}
            </NavLink>
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

      {/* 移动端下拉菜单 */}
      <div
        className={`md:hidden absolute top-nav left-0 right-0 bg-bg-elevated border-b border-border overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-inner py-4 flex flex-col gap-3 px-[clamp(16px,4vw,80px)]">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `text-sm tracking-wider py-2 transition-colors duration-200 border-b-2 ${
                  isActive
                    ? 'text-accent border-accent'
                    : 'text-white/80 hover:text-accent border-transparent'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
