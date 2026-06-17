import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { HeroSection } from '../components/sections/HeroSection'
import { PrinciplesSection } from '../components/sections/PrinciplesSection'
import { ObjectSection } from '../components/sections/ObjectSection'
import { CaseStudyCard } from '../components/sections/CaseStudyCard'
import { CultureSection } from '../components/sections/CultureSection'

const CASE_STUDIES = [
  {
    actLabel: 'SCREEN 3.1\nFIRST CARRIER — PRACTICE 01',
    title: 'Restoration\nLondon\n2006',
    quote: '"I spend most of my time\nreading what was decided\nbefore I arrived."',
  },
  {
    actLabel: 'SCREEN 3.1\nFIRST CARRIER — PRACTICE 02',
    title: 'Casework\nLondon\n2006',
    quote: '"The argument has to hold\non its own."',
  },
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-white font-sans">
      <Nav />

      <main>
        {/* S1: Hero */}
        <HeroSection />

        {/* S2: 设计原则 */}
        <PrinciplesSection />

        {/* S3: 对象自述 */}
        <ObjectSection />

        {/* S4: 案例研究 */}
        <section className="section py-24 md:py-32">
          <div className="section-inner">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard
                key={cs.actLabel}
                actLabel={cs.actLabel}
                title={cs.title}
                quote={cs.quote}
              />
            ))}
          </div>
        </section>

        {/* S5: 文化宣言 */}
        <CultureSection />
      </main>

      <Footer />
    </div>
  )
}
