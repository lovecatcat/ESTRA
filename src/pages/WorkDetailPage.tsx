import { ActLabel } from '../components/ActLabel'
import { VideoPlayer } from '../components/VideoPlayer'

// ---- 数据 ----
const SPECS = [
  { label: 'WHEN', value: 'Sept. 2026' },
  { label: 'WHERE', value: 'London, EC12 9ET' },
  { label: 'WHAT', value: 'Launch Event' },
  { label: 'MADE IN', value: 'China' },
  { label: 'STATUS', value: 'Concluded' },
]

const EVIDENCE = [
  { title: 'Frame\nDiscovery', desc: 'The structure is the argument.' },
  { title: 'Material\nTruth', desc: 'Every connection\nis a decision.' },
  { title: 'Spatial\nDialogue', desc: 'Force flows.\nNothing is hidden.' },
  { title: 'Time\nPresence', desc: 'The object enters\nexisting time.' },
]

const STATEMENT = ``

// ================================================================
export function WorkDetailPage() {
  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative aspect-[1440/600] bg-[url('/images/work_detail_banner.png')] bg-cover bg-center bg-no-repeat flex items-center overflow-visible">
        <div className="section-inner relative">
          <div className="mx-auto md:ml-auto md:mr-[clamp(48px,8.33vw,120px)] flex flex-col items-center md:items-start text-center md:text-left max-w-[clamp(280px,27vw,383px)]">
            <ActLabel>{'001\nOBJECT\nIDENTITY'}</ActLabel>

            <h1 className="text-[clamp(36px,3.96vw,57px)] my-6 font-bold leading-[1.08] text-accent">
              London Design Festival&rsquo;26
            </h1>

            <p className="text-[clamp(18px,2vw,29px)] leading-[1.17] text-accent">
              The first Tectonic Object.
            </p>

            <p className="text-[clamp(14px,1.46vw,21px)] leading-[1.17] text-accent/60 mt-2">
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

      {/* ====== S2: Object Statement ====== */}
      <section className="section py-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S2\nOBJECT\nSTATEMENT'}</ActLabel>

          <p className="text-[clamp(24px,2.9vw,42px)] leading-[1.17] text-accent text-center md:text-left">
            Launching at London Design Festival 2026, <span className='text-white'>ESTRA</span> {' '}  introduces a new category of contemporary objects where engineering and craftsmanship exist in equal measure.
          </p>
          <p className="text-[clamp(24px,2.9vw,42px)] leading-[1.17] text-accent text-center md:text-left mt-[clamp(12px,3vw,48px)]">
            Combining aluminium and leather in a distinctive structural system, the collection explores permanence, precision, and the beauty of construction.
          </p>
        </div>
      </section>

      {/* ====== S3: A Closer Look ====== */}
      <section className="section py-[clamp(48px,5vw,80px)] mb-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <ActLabel className="mb-[clamp(36px,3vw,48px)]">{'S3\nA CLOSER\nLOOK'}</ActLabel>

          <VideoPlayer
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
            poster="/images/work_detail_video.png"
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
                <div className="w-full aspect-square border-4 border-accent bg-bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src={`/images/main_principleCard_${index + 1}.png`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>




    </>
  )
}
