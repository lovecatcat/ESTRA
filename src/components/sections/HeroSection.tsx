import { ActLabel } from '../common/ActLabel'
import { DecorativeLine } from '../common/DecorativeLine'

export function HeroSection() {
  return (
    <section className="section min-h-screen flex items-center pt-nav">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

         {/* 右侧 — 文字区域 */}
        <div className="flex flex-col gap-6">
          <ActLabel>{'ACT 1\nOPENING'}</ActLabel>

          <h1 className="text-hero text-white leading-[1.08] max-w-[310px]">
            Structure is
            <br />
            the argument.
          </h1>

          <DecorativeLine width="200px" />

          <p className="text-hero-sub text-accent leading-[1.08] max-w-[226px]">
            The frame first.
            <br />
            That is the discipline.
          </p>

          <p className="text-hero-sub text-accent leading-[1.08] max-w-[198px]">
            The first proof of a
            <br />
            Tectonic Object.
          </p>
        </div>
      </div>
    </section>
  )
}
