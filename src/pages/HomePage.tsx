
import { ActLabel } from '../components/ActLabel'
import { Link, NavLink } from 'react-router-dom'
// ---- 数据 ----

const PRINCIPLES = [
  {
    title: 'Industrial\nHonesty',
    description: 'The structure is exposed. Nothing is hidden to pretend.',
  },
  {
    title: 'Somatic\nRespect',
    description: 'The body is not an obstacle. It is the starting point.',
  },
  {
    title: 'Binary\nTension',
    description: 'Control and wildness\nexist in the same breath.',
  },
  {
    title: 'Sonic\nIdentity',
    description: 'What you hear is the material speaking truthfully.',
  },
]

const CASE_STUDIES = [
  {
    actLabel: 'SCREEN 3.1\nFIRST CARRIER —\n PRACTICE 01',
    title: 'Restoration\nLondon\n2006',
    quote: '"I spend most of my time reading what was decided before I arrived."',
  },
  {
    actLabel: 'SCREEN 3.1\nFIRST CARRIER —\n PRACTICE 02',
    title: 'Casework\nLondon\n2006',
    quote: '"The argument has to hold on its own."',
  },
]

const MANIFESTO = [
  'We believe in the intelligence of materials, the honesty of construction, and the necessity of restraint.',
  'We work slowly so the object can remain honest.',
  'We exist outside trends, outside seasons, outside commerce cycles.',
  'We build for those who think in decades, not quarters.',
  'This is not a brand. This is a position. This is not decoration. This is structure made visible.'
]


function Hairline({ width = '200px', className = '' }: { width?: string; className?: string }) {
  return <div className={`hairline ${className}`} style={{ maxWidth: width }} />
}

function Btn({
  variant = 'primary',
  className = '',
  children,
  href,
  ...rest
}: {
  variant?: 'primary' | 'ghost'
  className?: string
  children: React.ReactNode
  href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const variantClass =
    variant === 'primary'
      ? 'border border-accent/40 text-accent hover:bg-accent hover:text-bg-primary active:bg-accent/90 transition-all duration-300'
      : 'text-accent hover:text-white hover:underline underline-offset-4 transition-all duration-200'
  const base =
    'inline-flex items-center gap-2 px-5 py-2 text-sm font-medium tracking-wider uppercase cursor-pointer'

  if (href) {
    return (
      <a href={href} className={`${base} ${variantClass} ${className}`}>
        {children}
      </a>
    )
  }
  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  )
}

// ---- 原则卡片 ----

function PrincipleCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <div className="group relative transition-all duration-500">
      {/* 遮罩层 — hover 淡出 */}
      <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-200"/>
      <img src={`/images/main_principleCard_${index}.png`} alt="" className="w-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 p-6">
        <h3 className="text-[clamp(26px,2.5vw,36px)] leading-[1.17] text-accent whitespace-pre-line ">
          {title}
        </h3>
        <p className="text-[clamp(13px,1.25vw,18px)] leading-[1.17] text-accent whitespace-pre-line max-w-[clamp(120px,13.9vw,200px)] ">
          {description}
        </p>
      </div>
    </div>
  )
}

// ---- 案例卡片 ----

function CaseCard({
  actLabel,
  title,
  quote,
}: {
  actLabel: string
  title: string
  quote: string
}) {
  return (
    <div className="group mb-24 md:mb-32">
      <div className="mb-[clamp(24px,4.17vw,60px)] flex justify-center md:justify-start md:pl-[clamp(48px,8.33vw,120px)]">
        <ActLabel>{actLabel}</ActLabel>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[clamp(48px,8.33vw,120px)] md:pl-[clamp(48px,8.33vw,120px)] md:pr-[clamp(48px,8.33vw,120px)] items-end">
        {/* 图片 — 左 */}
        <div className="relative w-full h-full min-h-[clamp(200px,23.2vw,334px)] rounded-sm overflow-hidden border-4 border-accent md:order-1">
        </div>
        {/* 文字 — 右 */}
        <div className="flex flex-col gap-4 order-1 md:order-2 justify-between h-full items-center md:items-start text-center md:text-left">
          <div>
            <h3 className="text-[clamp(18px,1.67vw,24px)] leading-[1.17] text-accent whitespace-pre-line">{title}</h3>
            <Hairline width="550px" className="my-[clamp(8px,1.39vw,20px)] h-[2px]" />
            <h4 className="text-[clamp(24px,3.06vw,44px)] leading-[1.17] text-accent whitespace-pre-line">
              {quote}
            </h4>
          </div>

          <a className="flex items-center gap-2 w-fit" href="#">
            <span className="text-[clamp(18px,1.67vw,24px)] leading-[1.17] text-accent whitespace-pre-line">View story</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
              <line y1="6.95117" x2="20.8203" y2="6.95117" stroke="#DDD4C1" />
              <path d="M15.0059 0.325195L20.6641 6.92505L15.0059 13.9962" stroke="#DDD4C1" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

// ================================================================
// 页面主体
// ================================================================

export function HomePage() {
  return (
    <>
        {/* ====== S1: Hero ====== */}
        <section
          className="section aspect-[1440/730] relative bg-[url('/images/main_banner.png')] bg-cover bg-center bg-no-repeat">
          <div className="section-inner relative h-full flex items-center">
            <div className="mx-auto md:ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col items-center md:items-start text-center md:text-left gap-6">
              <ActLabel>{'ACT 1\nOPENING'}</ActLabel>
              <h1 className="text-[clamp(32px,3.47vw,50px)] text-accent leading-[1.08] ">
                <span className="text-white relative inline-block before:absolute before:bottom-2 before:left-0 before:w-full before:h-0.5 before:bg-white before:translate-y-1">Structure</span>  is
                <br />
                the argument.
              </h1>
              <p className="text-[clamp(16px,1.67vw,24px)] text-[#E7DECB] leading-[1.08] ">
                The frame first.
                <br />
                That is the discipline.
              </p>

              <p className="text-[clamp(16px,1.67vw,24px)] text-[#E7DECB] leading-[1.08] ">
                The first proof of a
                <br />
                Tectonic Object.
              </p>
            </div>
          </div>
        </section>

        {/* ====== S2: 设计原则 ====== */}
        <section
          className="section group aspect-[1440/842] relative bg-[url('/images/main_principles.png')] bg-cover bg-center bg-no-repeat flex items-center"
        >
          {/* 遮罩层 — hover 淡出 */}
          <div
            className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
          />

          {/* 文字居中 */}
          <div className="w-full flex flex-col items-center justify-center text-center px-6 py-8 bg-black/50">
            <h2 className="text-accent text-[clamp(24px,3.47vw,50px)] leading-[1.08]">
              This is not <span className="text-white font-bold line-through">heavy</span>. This is dense.
            </h2>
            <p className="text-[clamp(14px,1.67vw,24px)] leading-[1.17] text-accent mt-4">
              Density is presence — an object that carries its own reasons for being.
              Every gram is a decision. You can feel the difference.
            </p>
          </div>
        </section>

        {/* 原则卡片 */}
        <div className="section-inner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard key={p.title} title={p.title} description={p.description} index={i + 1} />
          ))}
        </div>

        {/* ====== S3: 对象自述 ====== */}
        <section className="section py-[clamp(48px,5vw,80px)] md:py-[clamp(80px,8vw,128px)]">
          <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="flex flex-col gap-6 md:pl-[clamp(48px,8.33vw,120px)] items-center md:items-start text-center md:text-left">
              <ActLabel>{'ACT 4\nTHE OBJECT FINDS\nITS PEOPLE'}</ActLabel>
              <h2 className="text-[clamp(24px,2.8vw,40px)] leading-[1.17] text-accent max-w-[clamp(280px,31.8vw,458px)]">
                The object finds the <span className='text-white font-bold'>people</span>  who were already living by its logic.
              </h2>
              <p className="text-[clamp(24px,2.8vw,40px)] leading-[1.17] text-accent max-w-[clamp(220px,25.35vw,365px)]">
                This is not marketing. This is recognition.
              </p>
            </div>
            <div className="">
              <img src="/images/main_object.png" alt="" className="w-full" />
            </div>


          </div>
        </section>

        {/* ====== S4: 案例研究 ====== */}
        <section className="section">
          <div className="section-inner">
            {CASE_STUDIES.map((cs) => (
              <CaseCard key={cs.actLabel} actLabel={cs.actLabel} title={cs.title} quote={cs.quote} />
            ))}
          </div>
        </section>

        {/* ====== S5: 文化宣言 ====== */}
        <section className="section ">
          <div className="section-inner">
            <div className="mb-[clamp(24px,4.17vw,60px)] flex justify-center md:justify-start md:pl-[clamp(48px,8.33vw,120px)]">
              <ActLabel>{'ACT 4\nTHE CULTURAL\nSTATEMENT'}</ActLabel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* 图片 — 左 */}
              <div className="order-2 md:order-1">
                <img src="/images/main_footer.png" alt="" className="w-full" />
              </div>

              {/* 宣言文字 — 右 */}
              <div className="flex flex-col gap-6 order-1 md:order-2 md:pr-[clamp(48px,8.33vw,120px)] items-center md:items-start text-center md:text-left">
                <div className='text-accent leading-[1.17] text-[clamp(16px,1.53vw,22px)] mt-[clamp(16px,1.53vw,24px)]'>
                  We make objects that carry structure as their primary element and surface as their last decision.
                </div>
                {MANIFESTO.map((line, i) => {
                  const isLast = i === MANIFESTO.length - 1
                  return (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className={`mt-[0.55em] w-10 md:w-16 h-px shrink-0 ${isLast ? 'bg-transparent' : 'bg-accent'}`} />
                      <p
                        className={`text-accent leading-[1.17] ${i === 0
                            ? 'text-[clamp(16px,1.53vw,22px)]'
                            : 'text-[clamp(14px,1.32vw,19px)]'
                          }`}
                      >
                        {line}
                      </p>
                    </div>
                  )
                })}
              
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner ">
            <div className='grid grid-cols-1 md:grid-cols-2 py-[clamp(48px,5vw,80px)] md:pl-[clamp(48px,8.33vw,120px)] '>
                <Link to="/archive" className=' '>
                  <p className='text-accent leading-[1.17] text-[clamp(16px,1.53vw,22px)]'>The Vertebra</p>
                  <div>First proof of a Tectonic Object. Indicative price and availability.</div>
                </Link>
                <Link to="/work" className=' '>
                  <p className='text-accent leading-[1.17] text-[clamp(16px,1.53vw,22px)]'>The Work</p>
                  <div>
                  The argument behind the object.
                  </div>
                </Link>
            </div>
                
          </div>
        </section>
    </>
  )
}
