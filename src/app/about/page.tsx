'use client'

import Link from 'next/link'
import { ActLabel } from '@/components/ActLabel'

// ---- 数据 ----
const SPECS = [
  { label: 'PASSION',         value: 'Tectonic Object' },
  { label: 'PERFORMANCE',     value: 'The frame first.\nThat is the discipline.' },
  { label: 'MATERIAL SYSTEMS', value: '6061 Aluminium\nFull-grain Leather' },
  { label: 'MADE IN',         value: 'China' },
  { label: 'STATUS',          value: 'Active Record' },
]

export default function AboutPage() {
  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative -mt-nav h-screen md:h-auto md:aspect-[1440/600] md:mt-0 ">
      <img
          src="/images/about_banner.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />
        <div className="section-inner relative h-full flex items-end md:items-center pb-[clamp(40px,8vw,80px)] md:pb-0">
        <div className="md:ml-auto md:mr-[clamp(40px,8vw,80px)] flex flex-col items-start text-left gap-4 md:gap-6">
            <ActLabel>{'SO\nARCHIVE\nREACTIVATION'}</ActLabel>

            <h1 className="text-[clamp(36px,3.47vw,50px)] font-bold leading-[1.08] text-accent">
              About
            </h1>

            <div>
              <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.08] text-accent">
                An archive of structural propositions.
              </p>
            </div>

            <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.08] text-accent">
              It grows as each is proven.
            </p>
          </div>
        </div>
      </section>

      {/* ====== S2: Object Statement ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(40px,8vw,80px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S2\nOBJECT\nSTATEMENT'}</ActLabel>

          <div className="text-[clamp(24px,2.5vw,36px)] leading-[1.17] text-accent space-y-[clamp(24px,3vw,48px)] pr-0 md:pr-[clamp(24px,3vw,48px)] text-center md:text-left">
            <p><span className="font-medium text-white">ESTRA</span> {' '}
            creates objects defined by structure, material, and permanence.
            Designed and assembled in London, each piece combines precision-machined aluminium with full-grain leather to create products that feel architectural, tactile, and enduring.</p>
            <p>
              We believe the frame comes first.
              Everything else follows with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ====== S1: Context Strip ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(40px,8vw,80px)]">
          <ActLabel className="mb-[clamp(48px,5vw,80px)]">{'S1\nCONTEXT\nSTRIP'}</ActLabel>

          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x text-white">
            {SPECS.map((spec) => (
              <div key={spec.label}
                className={`flex-1 flex flex-col justify-center py-[clamp(16px,2vw,24px)] md:py-0 md:px-[clamp(16px,2vw,32px)] first:pt-0 last:pb-0 first:md:pl-0 last:md:pr-0 text-center`} >
                <p className="text-[clamp(16px,1.6vw,24px)] font-medium text-accent mb-1">
                  {spec.label}
                </p>
                <p className="text-[clamp(12px,1.1vw,16px)] text-accent whitespace-pre-line">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
