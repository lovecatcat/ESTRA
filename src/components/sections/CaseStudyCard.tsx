import { ActLabel } from '../common/ActLabel'
import { DecorativeLine } from '../common/DecorativeLine'
import { Button } from '../common/Button'

interface CaseStudyCardProps {
  actLabel: string
  title: string
  quote: string
}

export function CaseStudyCard({ actLabel, title, quote }: CaseStudyCardProps) {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-5 gap-8 items-center py-12 border-t border-border first:border-t-0">
      {/* 文字区域 — 占 3 列 */}
      <div className="lg:col-span-3 flex flex-col gap-4">
        <ActLabel>{actLabel}</ActLabel>

        <h3 className="text-2xl leading-[1.17] text-accent whitespace-pre-line">
          {title}
        </h3>

        <h4 className="text-[44px] leading-[1.17] text-accent/70 max-w-[550px] whitespace-pre-line transition-colors duration-300 group-hover:text-accent">
          {quote}
        </h4>

        <DecorativeLine width="550px" className="my-2" />

        <div>
          <Button variant="ghost" href="#">
            View story
          </Button>
        </div>
      </div>

      {/* 图片区域 — 占 2 列 */}
      <div className="lg:col-span-2 relative aspect-[16/10] bg-bg-card rounded-sm overflow-hidden border border-border group-hover:border-border-strong transition-all duration-500">
        <svg
          viewBox="0 0 540 334"
          className="w-full h-full text-accent/8"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <rect x="20" y="20" width="500" height="294" rx="4" />
          <line x1="20" y1="167" x2="520" y2="167" />
          <line x1="270" y1="20" x2="270" y2="314" />
          <rect x="80" y="70" width="380" height="194" opacity="0.3" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-accent/10 text-xs tracking-[0.3em] uppercase">
            Case Image
          </span>
        </div>
      </div>
    </div>
  )
}
