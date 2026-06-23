import { useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ActLabel } from '../components/ActLabel'
import { VideoPlayer } from '../components/VideoPlayer'
import { ARCHIVE_ITEMS } from '../data/archive'

// ---- 数据 ----
const SPECS = [
  { label: 'CATEGORY', value: 'Tectonic Object' },
  { label: 'PRINCIPLE', value: 'The frame first.\nThat is the discipline.' },
  { label: 'MATERIAL SYSTEM', value: '6061 Aluminium\nFull-grain Leather' },
  { label: 'MADE IN', value: 'China' },
  { label: 'STATUS', value: 'Active Record' },
]

const EVIDENCE = [
  { title: 'Frame\nGeometry', desc: 'The structure is the argument.' },
  { title: 'Joinery', desc: 'Every connection\nis a decision.' },
  { title: 'Load\nPath', desc: 'Force flows.\nNothing is hidden.' },
  { title: 'Old/New\nDialogue', desc: 'The object enters\nexisting time.' },
]

// ================================================================
export function ArchiveDetailPage() {
  const { id } = useParams()
  const imageRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = imageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = (e.clientX - centerX) / (rect.width / 2)
    const dy = (e.clientY - centerY) / (rect.height / 2)
    setTilt({ x: dy * -12, y: dx * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative min-h-[clamp(400px,41.7vw,600px)] bg-[linear-gradient(262deg,#282827_23.07%,#47494A_54.86%,#6F6F6F_66.75%,#6A7275_98.07%)] flex items-center overflow-visible">
        <div
          ref={imageRef}
          className="absolute left-[clamp(60px,14.8vw,214px)]  translate-y-[10%] w-[clamp(240px,40vw,580px)] aspect-square "
          style={{ perspective: '800px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/images/archive_detail.png" alt="" />
        </div>

        {/* 右侧文字 */}
        <div className="section-inner relative">
          <div className="mx-auto md:ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col items-center md:items-start text-center md:text-left max-w-[clamp(280px,23vw,334px)]">
            <ActLabel>{'001\nOBJECT\nIDENTITY'}</ActLabel>

            <h1 className="text-[clamp(36px,3.96vw,57px)] my-6 font-bold leading-[1.08] text-accent">
              The Vertebra
            </h1>

            <p className="text-[clamp(18px,2vw,29px)] leading-[1.17] text-accent">
              The first Tectonic Object.
            </p>

            <p className="text-[clamp(14px,1.46vw,21px)] leading-[1.17] text-accent">
              Introduced 2026
            </p>
          </div>
        </div>
      </section>

      {/* ====== S1: Context Strip ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(48px,5vw,80px)]">{'S1\nCONTEXT\nSTRIP'}</ActLabel>

          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x text-white">
            {SPECS.map((spec, idx) => (
              <div key={spec.label}
                className={`flex-1 flex flex-col justify-center py-[clamp(16px,2vw,24px)] md:py-0 md:px-[clamp(16px,2vw,32px)] first:pt-0 last:pb-0 first:md:pl-0 last:md:pr-0 text-center`} >
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

      {/* ====== S2: Object Statement ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S2\nOBJECT\nSTATEMENT'}</ActLabel>

          <div className="text-[clamp(24px,2.9vw,42px)] leading-[1.17] text-accent text-center md:text-left">
            <p>
              The{' '}
              <span className="font-medium text-white">Vertebra</span>
              {' '}is a structural carrier built on a visible, load-bearing frame. The frame is the primary element. The surface is the last decision made.
            </p>
            <p className="mt-[clamp(12px,3vw,48px)]">Every element exists because the structure requires it.</p>
            <p>Nothing is applied for appearance.</p>
          </div>
        </div>
      </section>

      {/* ====== S3: A Closer Look ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S3\nA CLOSER\nLOOK'}</ActLabel>

          <VideoPlayer
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
            poster="/images/archive_detail_video.png"
          />
        </div>
      </section>

      {/* ====== S4: Evidence of Structure ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S4\nEVIDENCE\nOF STRUCTURE'}</ActLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[clamp(16px,2vw,32px)]">
            {EVIDENCE.map((item, index) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-[clamp(12px,1.5vw,24px)]">
                <div className="w-full aspect-square border-4 border-accent bg-bg-card flex items-center justify-center">
                  <img src={`/images/main_principleCard_${index + 1}.png`} alt="" className="w-full" />
                </div>
                <p className="text-[clamp(20px,2vw,29px)] text-accent whitespace-pre-line leading-[1.17]">
                  {item.title}
                </p>
                <p className="text-[clamp(11px,1.1vw,16px)] text-accent whitespace-pre-line leading-[1.17]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== S5: Specifications & Configuration ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S5\nSPECS &\nCONFIG'}</ActLabel>

          {/* PC 左右 / 手机 上下 */}
          <div className="flex flex-col md:flex-row gap-[clamp(32px,4vw,64px)]">
            {/* 左栏 — Specifications */}
            <div className="flex-1">
              <p className="text-[clamp(18px,1.8vw,26px)] font-medium text-accent mb-[clamp(20px,2vw,32px)] text-center md:text-left">
                Specifications
              </p>
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    ['Dimensions', '[L × W × H — mm / in]'],
                    ['Weight', '[grams / oz]'],
                    ['Frame material', '[Material specification]'],
                    ['Covering material', '[Leather type specification]'],
                    ['Closure mechanism', '[Mechanism type]'],
                    ['Interior', '[Interior specification]'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-white/20">
                      <td className="py-[clamp(10px,1vw,16px)] pr-[clamp(16px,2vw,32px)] text-xs text-accent/60 align-top text-center md:text-left">
                        {label}
                      </td>
                      <td className="py-[clamp(10px,1vw,16px)] text-xs text-accent align-top text-center md:text-left">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 右栏 — Configuration */}
            <div className="flex-1">
              <p className="text-[clamp(18px,1.8vw,26px)] font-medium text-accent mb-[clamp(20px,2vw,32px)] text-center md:text-left">
                Configuration
              </p>
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    ['Standard configuration', 'Object 001 in [finish name]. Single unit.'],
                    ['Includes', '[Ships with object]'],
                    ['Does not include', '[Commonly expected items not included]'],
                    ['Finish / colourway', '[Options or single option]'],
                    ['Release state', 'First production · Limited allocation'],
                    ['Pending fields', 'Subject to final production confirmation'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-white/20">
                      <td className="py-[clamp(10px,1vw,16px)] pr-[clamp(16px,2vw,32px)] text-xs text-accent/60 align-top text-center md:text-left">
                        {label}
                      </td>
                      <td className="py-[clamp(10px,1vw,16px)] text-xs text-accent align-top text-center md:text-left">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order 按钮 */}
          <div className="mt-[clamp(36px,4vw,56px)] flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-[clamp(32px,4vw,56px)] py-[clamp(14px,1.5vw,20px)] border border-accent text-[clamp(14px,1.2vw,18px)] text-accent font-medium hover:bg-accent hover:text-bg-primary transition-colors duration-300"
            >
              Order The Vertebra
              <svg width="12" height="9" viewBox="0 0 10 7" fill="none">
                <path d="M6.5 1L9.5 3.5L6.5 6" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="3.5" x2="9" y2="3.5" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ====== Bottom Navigation ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'OBJECT\nINDEX'}</ActLabel>

          <div className="flex flex-wrap gap-[clamp(12px,3vw,48px)]">
            {ARCHIVE_ITEMS.filter((item) => item.number !== id).map((item) => (
              <Link
                key={item.number}
                to={`/archive/${item.number}`}
                className="flex items-center gap-1 hover:bg-accent/5 transition-colors duration-300"
              >
                <span className="text-sm text-accent leading-none tracking-tighter">
                  {item.number}
                </span>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" >
                  <path d="M6.5 1L9.5 3.5L6.5 6" stroke="#DDD4C1" strokeWidth="1" />
                  <line x1="0" y1="3.5" x2="9" y2="3.5" stroke="#DDD4C1" strokeWidth="1" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
