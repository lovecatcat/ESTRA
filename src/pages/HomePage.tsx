
import { ActLabel } from '../components/ActLabel'
import { Link, NavLink } from 'react-router-dom'
// ---- 数据 ----

const PRINCIPLES = [
  {
    title: 'Industrial\nHonesty',
    description: 'The structure is exposed.\nThere is nothing to conceal.',
  },
  {
    title: 'Somatic\nRespect',
    description: 'The structure serves the body.\nPrecise to the eye.\nForgiving to the hand.',
  },
  {
    title: 'Binary\nTension',
    description: 'The frame holds its form.\nThe leather receives time.',
  },
  {
    title: 'Sonic\nIdentity',
    description: 'Low. Certain. Resolved.\nThe sound is the making,\nmade audible.',
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
  'Materials have a nature. We respect it and work with it.',
  'The construction is honest. What is absent was decided as carefully as what remains.',
  'We work slowly so the object can remain honest.',
  'We build for the decades on the horizon, not the season under our nose.',
  'The work is the position. The structure is the evidence.'
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
    <div className="shrink-0 snap-center w-[65vw] md:w-auto group transition-all duration-500">
      {/* 移动端：图片在上，文字在下 — 无遮罩 */}
      <div className="md:hidden flex flex-col">
        <img src={`/images/main_principleCard_${index}.png`} alt="" className="w-full" />
        <div className="flex flex-col items-center text-center gap-2 px-4 py-5 ">
          <h3 className="text-[clamp(20px,5vw,26px)] leading-[1.17] text-accent whitespace-pre-line">
            {title}
          </h3>
          <p className="text-[clamp(12px,3vw,16px)] leading-[1.17] text-accent-muted whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* 桌面端：遮罩 + hover 淡出（保持原设计） */}
      <div className="hidden md:block relative">
        <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-200 z-10" />
        <img src={`/images/main_principleCard_${index}.png`} alt="" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 p-6 z-20">
          <h3 className="text-[clamp(26px,2.5vw,36px)] leading-[1.17] text-accent whitespace-pre-line">
            {title}
          </h3>
          <p className="text-[clamp(13px,1.25vw,18px)] leading-[1.17] text-accent whitespace-pre-line max-w-[clamp(120px,13.9vw,200px)]">
            {description}
          </p>
        </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[clamp(48px,8.33vw,120px)] px-6 md:pl-[clamp(48px,8.33vw,120px)] md:pr-[clamp(48px,8.33vw,120px)] items-end">
        {/* 图片 — 左 */}
        <div className="relative w-full aspect-square md:aspect-auto md:min-h-[clamp(200px,23.2vw,334px)] rounded-sm overflow-hidden border-4 border-accent md:order-1">
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
        <section className="section relative -mt-nav h-screen md:h-auto md:aspect-[1440/730] md:mt-0">
          {/* 背景图片 — 移动端满屏，桌面端按比例 */}
          <img
            src="/images/main_banner.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 移动端底部渐变遮罩 — 保证文字可读 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />

          {/* 文字 — 移动端底部左对齐，桌面端垂直居中右对齐 */}
          <div className="section-inner relative h-full flex items-end md:items-center pb-[clamp(40px,8vw,80px)] md:pb-0">
            <div className="md:ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col items-start text-left gap-4 md:gap-6">
              <ActLabel>{'ACT 1\nOPENING'}</ActLabel>
              <h1 className="text-[clamp(32px,3.47vw,50px)] text-accent leading-[1.08]">
                <span className="text-white relative inline-block before:absolute before:bottom-2 before:left-0 before:w-full before:h-0.5 before:bg-white before:translate-y-1">Structure</span>  is
                <br />
                the evidence.
              </h1>
              <p className="text-[clamp(16px,1.67vw,24px)] text-[#E7DECB] leading-[1.08]">
                The frame first.
                <br />
                Everything else then emerges.
              </p>
              <p className="text-[clamp(16px,1.67vw,24px)] text-[#E7DECB] leading-[1.08]">
                The first Tectonic Object.
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
              The weight is not incidental.
            </h2>
            <p className="text-[clamp(14px,1.67vw,24px)] leading-[1.17] text-accent mt-4">
              Every gram earned its place.
              It is the substance in your hand.
              Dense. Honest. Present.
            </p>
          </div>
        </section>

        {/* 原则卡片 — 移动端水平滑动，桌面端四列网格 */}
        <div className="section-inner flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-4 md:gap-0 scrollbar-hide">
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
                Some will recognise it immediately. <br/>
                That is enough.
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
                  We make objects where structure comes first and surface comes last, justified by everything decided before it.
                </div>
                {MANIFESTO.map((line, i) => {
                  const isLast = i === MANIFESTO.length - 1
                  return (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className={`mt-[0.55em] w-10 md:w-16 h-px shrink-0 ${isLast ? 'bg-transparent' : 'bg-accent'}`} />
                      <p
                        className={`text-accent text-sm`}
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
            <div className='flex justify-between py-[clamp(48px,5vw,80px)] md:px-[clamp(48px,8.33vw,120px)] '>
                <Link to="/archive" className=' '>
                  <p className='text-accent leading-[1.17] text-[clamp(16px,1.53vw,22px)]'>The Vertebra</p>
                  <div className='text-sm'>First proof of a Tectonic Object. Indicative price and availability.</div>
                </Link>
                <div>
                <Link to="/work" className=' '>
                  <p className='text-accent leading-[1.17] text-base'>The Work</p>
                  <div className='text-sm'>The argument behind the object.</div>
                </Link>
                </div>
               
            </div>
                
          </div>
        </section>
    </>
  )
}
