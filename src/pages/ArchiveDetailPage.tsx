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
  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative min-h-[clamp(400px,41.7vw,600px)] bg-gradient-to-br from-[#282827] via-[#47494a] to-[#6a7275] flex items-center">
        {/* 左侧图片占位 */}
        <div className="absolute left-[clamp(60px,14.8vw,214px)] top-1/2 -translate-y-1/2 w-[clamp(240px,40vw,580px)] aspect-square rounded-full bg-accent/5" />

        {/* 右侧文字 */}
        <div className="section-inner relative">
          <div className="ml-auto lg:mr-[clamp(48px,8.33vw,120px)] flex flex-col gap-6 max-w-[clamp(280px,23vw,334px)]">
            <div className="flex flex-col gap-2">
              <span className="act-label whitespace-pre-line text-accent">
                {'001\nOBJECT\nIDENTITY'}
              </span>
              <div className="w-[28px] h-px bg-accent" />
            </div>

            <h1 className="text-[clamp(36px,3.96vw,57px)] font-bold leading-[1.08] text-accent">
              The Vertebra
            </h1>

            <p className="text-[clamp(18px,2vw,29px)] leading-[1.17] text-accent">
              The first Tectonic Object.
            </p>

            <p className="text-[clamp(14px,1.46vw,21px)] leading-[1.17] text-accent/60">
              Introduced 2026
            </p>
          </div>
        </div>
      </section>

      {/* ====== S1: Context Strip ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner lg:px-[clamp(48px,8.33vw,120px)]">
          <div className="flex flex-col gap-2 mb-[clamp(48px,5vw,80px)]">
            <span className="act-label whitespace-pre-line text-accent">
              {'S1\nCONTEXT\nSTRIP'}
            </span>
            <div className="w-[28px] h-px bg-accent" />
          </div>

          <div className="flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-accent/20">
            {SPECS.map((spec) => (
              <div key={spec.label} className="flex-1 py-[clamp(16px,2vw,24px)] lg:py-0 lg:px-[clamp(16px,2vw,32px)] first:lg:pl-0 last:lg:pr-0 text-center">
                <p className="text-[clamp(16px,1.6vw,23px)] font-medium text-accent mb-2">
                  {spec.label}
                </p>
                <p className="text-[clamp(12px,1.25vw,18px)] text-accent/60 whitespace-pre-line">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== S2: Object Statement ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner lg:px-[clamp(48px,8.33vw,120px)]">
          <div className="flex flex-col gap-2 mb-[clamp(36px,3vw,48px)]">
            <span className="act-label whitespace-pre-line text-accent">
              {'S2\nOBJECT\nSTATEMENT'}
            </span>
            <div className="w-[28px] h-px bg-accent" />
          </div>

          <div className="text-[clamp(24px,2.9vw,42px)] leading-[1.17] text-accent max-w-[clamp(280px,83vw,1200px)] space-y-[clamp(12px,1vw,16px)]">
            <p>
              The{' '}
              <span className="font-medium text-white">Vertebra</span>
              {' '}is a structural carrier built on a visible, load-bearing frame. The frame is the primary element. The surface is the last decision made.
            </p>
            <p>Every element exists because the structure requires it.</p>
            <p>Nothing is applied for appearance.</p>
          </div>
        </div>
      </section>

      {/* ====== S3: A Closer Look ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner lg:px-[clamp(48px,8.33vw,120px)]">
          <div className="flex flex-col gap-2 mb-[clamp(36px,3vw,48px)]">
            <span className="act-label whitespace-pre-line text-accent">
              {'S3\nA CLOSER\nLOOK'}
            </span>
            <div className="w-[28px] h-px bg-accent" />
          </div>

          <div className="relative aspect-[16/9] max-h-[clamp(340px,47vw,678px)] bg-bg-card border-4 border-accent flex items-center justify-center">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
              <circle cx="80" cy="80" r="78" stroke="#DDD4C1" strokeWidth="2" />
              <polygon points="65,48 65,112 115,80" fill="#DDD4C1" />
            </svg>
          </div>
        </div>
      </section>

      {/* ====== S4: Evidence of Structure ====== */}
      <section className="section py-[clamp(48px,5vw,80px)] mb-[clamp(48px,5vw,80px)]">
        <div className="section-inner lg:px-[clamp(48px,8.33vw,120px)]">
          <div className="flex flex-col gap-2 mb-[clamp(36px,3vw,48px)]">
            <span className="act-label whitespace-pre-line text-accent">
              {'S4\nEVIDENCE\nOF STRUCTURE'}
            </span>
            <div className="w-[28px] h-px bg-accent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,32px)]">
            {EVIDENCE.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-[clamp(12px,1.5vw,24px)]">
                <div className="w-full aspect-square border-4 border-accent bg-bg-card flex items-center justify-center">
                  <span className="text-accent/20 text-[clamp(18px,2vw,29px)]">+</span>
                </div>
                <p className="text-[clamp(20px,2vw,29px)] text-accent whitespace-pre-line leading-[1.17]">
                  {item.title}
                </p>
                <p className="text-[clamp(11px,1.1vw,16px)] text-accent/60 whitespace-pre-line leading-[1.17]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
