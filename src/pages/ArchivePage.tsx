import { Link } from 'react-router-dom'
import { ActLabel } from '../components/ActLabel'

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
      <section className="section relative aspect-[1440/600] bg-[url('/images/archive_banner.png')] bg-cover bg-center bg-no-repeat flex items-center">
        <div className="section-inner relative h-full flex items-center">
          <div className="mx-auto md:ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <ActLabel color="bg-primary">{'SO\nARCHIVE\nREACTIVATION'}</ActLabel>

            <h1 className="text-[clamp(36px,3.47vw,50px)] font-bold leading-[1.08] text-bg-primary">
              Archive
            </h1>

            <div>
              <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.08] text-bg-primary">
                An archive of structural
              </p>
              <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.08] text-bg-primary">
                propositions.
              </p>
            </div>

            <p className="text-[clamp(18px,1.67vw,24px)] leading-[1.08] text-bg-primary">
              It grows as each is proven.
            </p>
          </div>
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
                className="relative aspect-square border-4 border-accent flex items-center justify-center p-[clamp(24px,4vw,48px)] hover:bg-accent/10 transition-colors duration-300"
              >
                <div className="flex items-start justify-center">
                  <div className="text-[clamp(30px,3.5vw,50px)] font-bold text-accent leading-none">
                    #
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
                    <div className="flex items-center gap-1.5 mt-3 text-accent text-[clamp(7px,0.56vw,8px)]">
                      <span>Enter Object Page</span>
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" >
                        <path d="M6.5 1L9.5 3.5L6.5 6" stroke="#DDD4C1" strokeWidth="1" />
                        <line x1="0" y1="3.5" x2="9" y2="3.5" stroke="#DDD4C1" strokeWidth="1" />
                      </svg>
                    </div>
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
