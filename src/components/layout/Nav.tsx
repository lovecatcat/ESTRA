import { useState } from 'react'

const NAV_LINKS = [
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'THE WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
] as const

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-nav bg-bg-primary/90 backdrop-blur-sm border-b border-border">
      <div className="section-inner flex items-center justify-between h-full">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-medium text-white tracking-wide hover:text-accent transition-colors duration-300"
        >
          ESTRA
        </a>

        {/* 桌面导航 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-white/80 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 移动端汉堡 */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-white transition-transform duration-300 ${
              open ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-white transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-white transition-transform duration-300 ${
              open ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`md:hidden absolute top-nav left-0 right-0 bg-bg-elevated border-b border-border overflow-hidden transition-all duration-300 ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-inner py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-white/80 hover:text-accent py-2 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
