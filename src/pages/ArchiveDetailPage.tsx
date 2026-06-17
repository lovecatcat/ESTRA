import { useRef, useState } from 'react'
import { ActLabel } from '../components/ActLabel'

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoToggle = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative min-h-[clamp(400px,41.7vw,600px)] bg-gradient-to-br from-[#282827] via-[#47494a] to-[#6a7275] flex items-center">
        {/* 左侧图片占位 */}
        <div className="absolute left-[clamp(60px,14.8vw,214px)] top-1/2 -translate-y-1/2 w-[clamp(240px,40vw,580px)] aspect-square rounded-full bg-accent/5" />

        {/* 右侧文字 */}
        <div className="section-inner relative">
          <div className="ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col gap-6 max-w-[clamp(280px,23vw,334px)]">
            <ActLabel>{'001\nOBJECT\nIDENTITY'}</ActLabel>

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
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(48px,5vw,80px)]">{'S1\nCONTEXT\nSTRIP'}</ActLabel>

          <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x text-white mx-[-30px]">
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

          <div className="text-[clamp(24px,2.9vw,42px)] leading-[1.17] text-accent max-w-[clamp(280px,83vw,1200px)] ">
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

          <div
            className="relative aspect-[16/9] max-h-[clamp(340px,47vw,678px)] bg-black border-4 border-accent overflow-hidden group cursor-pointer"
            onClick={handleVideoToggle}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
              poster="/images/archive_banner.png"
              playsInline
              preload="metadata"
              onEnded={handleVideoEnded}
            />

            {/* 自定义播放按钮覆盖层 */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-[clamp(80px,11vw,160px)] h-[clamp(80px,11vw,160px)] rounded-full border-2 border-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                  <svg width="40%" height="40%" viewBox="0 0 160 160" fill="none">
                    <polygon points="65,48 65,112 115,80" fill="#DDD4C1" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ====== S4: Evidence of Structure ====== */}
      <section className="section py-[clamp(48px,5vw,80px)] mb-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S4\nEVIDENCE\nOF STRUCTURE'}</ActLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[clamp(16px,2vw,32px)]">
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
