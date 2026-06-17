const NAV_LINKS = [
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'THE WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border">
      <div className="section-inner flex flex-col md:flex-row items-center justify-between gap-4 py-5">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-medium text-white tracking-wide hover:text-accent transition-colors duration-300"
        >
          ESTRA
        </a>

        {/* 导航链接 */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider text-white/60 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 版权 */}
        <span className="text-[8px] font-medium tracking-wider text-white/40 uppercase">
          © ESTRA 2026
        </span>
      </div>
    </footer>
  )
}
