import { ActLabel } from '../common/ActLabel'

export function ObjectSection() {
  return (
    <section className="section py-24 md:py-32">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* 左侧 — 大图 */}
        <div className="relative aspect-[9/8] bg-bg-card rounded-sm overflow-hidden border border-border order-2 lg:order-1">
          {/* 结构线框占位 */}
          <svg
            viewBox="0 0 720 640"
            className="w-full h-full text-accent/8"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <rect x="40" y="40" width="640" height="560" rx="4" />
            <line x1="40" y1="320" x2="680" y2="320" />
            <line x1="360" y1="40" x2="360" y2="600" />
            <circle cx="360" cy="320" r="120" opacity="0.5" />
            <circle cx="360" cy="320" r="200" opacity="0.3" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-accent/10 text-xs tracking-[0.3em] uppercase">
              Object Study
            </span>
          </div>
        </div>

        {/* 右侧 — 文字 */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <ActLabel>{'ACT 4\nTHE OBJECT FINDS\nITS PEOPLE'}</ActLabel>

          <h2 className="text-[38px] leading-[1.17] text-accent max-w-[458px]">
            The object finds the people who were already living by its logic.
          </h2>

          <p className="text-[38px] leading-[1.17] text-accent/50 max-w-[365px]">
            This is not marketing. This is recognition.
          </p>
        </div>
      </div>
    </section>
  )
}
