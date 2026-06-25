import { Link } from 'react-router-dom'
export const NAV_LINKS = [
  { label: 'Legal/Privacy', href: '/' },
  { label: 'Shipping/Returns', href: '/' },
  { label: 'Care&Service', href: '/' },
  { label: 'Contact', href: '/contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border">
      <div className="section-inner flex flex-col items-center gap-6 py-6 px-4 md:flex-row md:justify-between md:gap-4 md:py-5 md:px-20">
        <Link to="/" className="text-xl md:text-2xl font-medium text-white tracking-wide hover:text-accent transition-colors duration-300">
          ESTRA
        </Link>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-12">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} to={l.href} className="text-xs text-white hover:text-accent transition-colors duration-200 whitespace-nowrap">
              {l.label}
            </Link>
          ))}
        </div>
        <span className="text-[clamp(6px,0.56vw,8px)] font-medium tracking-wider text-white/60 uppercase">© ESTRA 2026</span>
      </div>
    </footer>
  )
}
