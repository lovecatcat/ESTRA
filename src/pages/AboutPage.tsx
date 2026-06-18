import { ActLabel } from '../components/ActLabel'

// ---- 数据 ----
const SPECS = [
  { label: 'PASSION',         value: 'Tectonic Object' },
  { label: 'PERFORMANCE',     value: 'The frame first.\nThat is the discipline.' },
  { label: 'MATERIAL SYSTEMS', value: '6061 Aluminium\nFull-grain Leather' },
  { label: 'MADE IN',         value: 'China' },
  { label: 'STATUS',          value: 'Active Record' },
]

export function AboutPage() {
  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative aspect-[1440/360] bg-[url('/images/about_banner.png')] bg-cover bg-center bg-no-repeat flex items-center overflow-visible">
        <div className="section-inner relative">
          <div className="mx-auto md:ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col items-center md:items-start text-center md:text-left max-w-[clamp(280px,23vw,334px)]">
            <ActLabel color="bg-primary">{'SO\nARCHIVE\nREACTIVATION'}</ActLabel>

            <h1 className="text-[clamp(36px,3.47vw,50px)] my-6 font-bold leading-[1.08] text-bg-primary">
              About
            </h1>

            <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.17] text-bg-primary">
              An archive of structural
            </p>
            <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.17] text-bg-primary">
              propositions.
            </p>
          </div>
        </div>
      </section>

      {/* ====== S2: Object Statement ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S2\nOBJECT\nSTATEMENT'}</ActLabel>

          <div className="text-[clamp(24px,2.9vw,42px)] leading-[1.17] text-accent space-y-[clamp(24px,3vw,48px)] pr-0 md:pr-[clamp(24px,3vw,48px)] text-center md:text-left">
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
      <section className="section py-[clamp(48px,5vw,80px)] mb-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(48px,5vw,80px)]">{'S1\nCONTEXT\nSTRIP'}</ActLabel>

          <div className="flex flex-nowrap divide-x divide-accent mx-[-30px]">
            {SPECS.map((spec) => (
              <div key={spec.label}
                className="flex-1 flex flex-col items-center justify-center py-[clamp(16px,2vw,24px)] md:py-0 md:px-[clamp(16px,2vw,32px)] first:pt-0 last:pb-0 text-center"
              >
                <p className="text-[clamp(16px,1.6vw,23px)] font-medium text-accent mb-1">
                  {spec.label}
                </p>
                <p className="text-[clamp(12px,1.25vw,18px)] text-accent whitespace-pre-line">
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
