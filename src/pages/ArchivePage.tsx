import { Link } from 'react-router-dom'

const ARCHIVE_ITEMS = [
  { number: '001', title: 'THE VERTEBRA', desc: 'The first Tectonic Object.', status: 'active' },
  { number: '002', title: 'IN DEVELOPMENT', desc: 'The first Tectonic Object.', status: 'pending' },
  { number: '003', title: 'RESERVED', desc: 'The first Tectonic Object.', status: 'reserved' },
  { number: '004', title: 'MINIMAL CONTEXT', desc: 'The first Tectonic Object.', status: 'active' },
  { number: '005', title: 'IN DEVELOPMENT', desc: 'The first Tectonic Object.', status: 'pending' },
  { number: '006', title: 'RESERVED', desc: 'The first Tectonic Object.', status: 'reserved' },
]

export function ArchivePage() {
  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative aspect-[1440/600] bg-[url('/images/archive_banner.png')] bg-cover bg-center bg-no-repeat">
        {/* 文字 — 右侧 */}
        <div className="absolute right-0 top-[clamp(150px,14vw,202px)] md:right-[clamp(48px,8.33vw,120px)] flex flex-col gap-6 md:pl-[clamp(48px,8.33vw,120px)]">
          <div className="flex flex-col gap-2">
            <span className="act-label whitespace-pre-line text-bg-primary">
              {'SO\nARCHIVE\nREACTIVATION'}
            </span>
            <div className="w-[28px] h-px bg-bg-primary" />
          </div>

          <h1 className="text-hero text-bg-primary leading-[1.08]">
            Archive
          </h1>

          <div>
            <p className="text-hero-sub text-bg-primary leading-[1.08]">
              An archive of structural
            </p>
            <p className="text-hero-sub text-bg-primary leading-[1.08]">
              propositions.
            </p>
          </div>

          <p className="text-hero-sub text-bg-primary leading-[1.08]">
            It grows as each is proven.
          </p>
        </div>
      </section>

      {/* ====== Archive Grid ====== */}
      <section className="section py-[clamp(40px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(20px,2vw,40px)]">
            {ARCHIVE_ITEMS.map((item) => (
              <Link
                key={item.number}
                to={`/archive/${item.number}`}
                className="relative aspect-square border-4 border-accent flex items-start justify-center p-[clamp(24px,4vw,48px)] hover:bg-accent/10 transition-colors duration-300"
              >
                {/* 序号 */}
                <div className="flex">
                  <span className="text-[clamp(30px,3.5vw,50px)] font-bold text-accent leading-none">#</span>
                </div>

                {/* 标题 & 描述 */}
                <div className="flex flex-col">
                <span className="text-[clamp(60px,7.6vw,110px)] text-accent leading-none tracking-tighter">
                    {item.number}
                  </span>
                  <div className="text-[clamp(14px,1.4vw,20px)] text-accent whitespace-nowrap">
                    {item.title}
                  </div>
                  <div className="text-[clamp(8px,0.76vw,11px)] text-accent mt-[-2px]">
                    {item.desc}
                  </div>
                   {/* Enter 提示 */}
                <div className="flex items-center mt-10">
                  <span className="text-[clamp(6px,0.56vw,8px)] text-accent uppercase tracking-wider">
                    Enter Object Page
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    className="text-accent"
                  >
                    <line y1="3.5" x2="9.5" y2="3.5" stroke="currentColor" />
                    <path d="M6.5 0.5L10 3.5L6.5 6.5" stroke="currentColor" />
                  </svg>
                </div>
                </div>

               
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
