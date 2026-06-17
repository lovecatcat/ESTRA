import { ActLabel } from '../common/ActLabel'

const MANIFESTO = [
  'We make objects that carry structure as their primary element and surface as their last decision.',
  'We believe in the intelligence of materials, the honesty of construction, and the necessity of restraint.',
  'We work slowly so the object can remain honest.',
  'We exist outside trends, outside seasons, outside commerce cycles.',
  'We build for those who think in decades, not quarters.',
  'This is not a brand. This is a position. This is not decoration. This is structure made visible.',
]

export function CultureSection() {
  return (
    <section className="section py-24 md:py-32">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* 左侧 — 宣言文字 */}
        <div className="flex flex-col gap-4">
          <ActLabel className="mb-4">{'ACT 4\nTHE CULTURAL\nSTATEMENT'}</ActLabel>

          {MANIFESTO.map((line, i) => (
            <div key={i} className="flex items-start gap-3 group">
              {/* 装饰短线 */}
              <div className="mt-[0.55em] w-10 md:w-16 h-px bg-accent/15 group-hover:bg-accent/40 transition-colors duration-300 shrink-0" />
              <p
                className={`text-accent/70 leading-[1.17] transition-colors duration-300 group-hover:text-accent ${
                  i === 0
                    ? 'text-[22px]'
                    : 'text-[19px]'
                }`}
              >
                {line}
              </p>
            </div>
          ))}
        </div>

        {/* 右侧 — 图片 */}
        <div className="relative aspect-[16/10] bg-bg-card rounded-sm overflow-hidden border border-border lg:sticky lg:top-28">
          <svg
            viewBox="0 0 720 456"
            className="w-full h-full text-accent/8"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <rect x="24" y="24" width="672" height="408" rx="4" />
            <line x1="24" y1="228" x2="696" y2="228" />
            <line x1="360" y1="24" x2="360" y2="432" />
            <rect x="100" y="80" width="520" height="296" opacity="0.2" />
            <rect x="160" y="140" width="400" height="176" opacity="0.15" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-accent/10 text-xs tracking-[0.3em] uppercase">
              Culture Image
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
