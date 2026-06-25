import { Link } from 'react-router-dom'
import { ActLabel } from '../components/ActLabel'

// ---- 数据 ----
const PROJECTS = [
  { id: '001', status: 'LONDON DESIGN WEEK', desc: 'The first Tectonic Object.' },
  { id: '002', status: 'IN PRODUCTION', desc: 'The first Tectonic Object.' },
  { id: '003', status: 'PRE ORDERS OPEN', desc: 'The first Tectonic Object.' },
]

const STATEMENT = `ESTRA creates enduring objects where engineering and craftsmanship meet. Built from aluminium and leather, each piece is defined by clarity, precision, and a commitment to material honesty.`

// ---- 项目卡片 ----
function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <Link key={project.id} to={`/work/${project.id}`} className="group block">
      <div className="relative aspect-[3/5] bg-bg-card border-4 border-accent overflow-hidden">
        <img
          src={`/images/work_card_${index + 1}.png`}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* 底部文字叠加层 */}
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-start justify-center">
          {/* 序号 */}
          <div className="flex">
            <span className="text-[clamp(30px,3.5vw,50px)] font-bold text-accent leading-none">#</span>
          </div>
          {/* 标题 & 描述 */}
          <div className="flex flex-col">
            <span className="text-[clamp(60px,7.6vw,110px)] text-accent leading-none tracking-tighter">
              {project.id}
            </span>
            <div className="text-[clamp(14px,1.4vw,20px)] text-accent whitespace-nowrap">
              {project.status}
            </div>
            <div className="text-[clamp(8px,0.76vw,11px)] text-accent mt-[-2px]">
              {project.desc}
            </div>
            {/* Enter 提示 */}
            <div className="flex items-center gap-1.5 mt-3 text-accent text-[clamp(7px,0.56vw,8px)]">
              <span>Enter Object Page</span>
              <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M6.5 1L9.5 3.5L6.5 6" stroke="#DDD4C1" strokeWidth="1" />
                <line x1="0" y1="3.5" x2="9" y2="3.5" stroke="#DDD4C1" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>

  )
}

function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,32px)]">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  )
}

// ================================================================
export function WorkPage() {
  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative -mt-nav h-screen md:h-auto md:aspect-[1440/600] md:mt-0">
        <img
          src="/images/work_banner.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />
        <div className="section-inner relative h-full flex items-end md:items-center pb-[clamp(40px,8vw,80px)] md:pb-0">
          <div className="md:ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col items-start text-left gap-4 md:gap-6">
            <ActLabel>{'SO\nARCHIVE\nREACTIVATION'}</ActLabel>

            <h1 className="text-[clamp(36px,3.47vw,50px)] font-bold leading-[1.08] text-accent">
              The Work
            </h1>

            <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.17] text-accent">
              An archive of structural propositions.
            </p>

            <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.17] text-accent">
              It grows as each is proven.
            </p>
          </div>
        </div>
      </section>
      {/* ====== S1: Company Statement ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S1\nCOMPANY\nSTATEMENT'}</ActLabel>

          <p className="text-[clamp(24px,2.9vw,42px)] leading-[1.17] text-accent text-center md:text-left">
            {STATEMENT}
          </p>
        </div>
      </section>

      {/* ====== S2: On Structure ====== */}

      <section className="section py-[clamp(48px,5vw,80px)]">

        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S2\nON\nSTRUCTURE'}</ActLabel>
          <ProjectGrid />
        </div>
      </section>

      {/* ====== S3: Carriers ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S3\nCARRIERS'}</ActLabel>
          <ProjectGrid />
        </div>
      </section>


    </>
  )
}
