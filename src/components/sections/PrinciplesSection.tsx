import { ActLabel } from '../common/ActLabel'
import { PrincipleCard } from './PrincipleCard'

const PRINCIPLES = [
  {
    title: 'Sonic\nIdentity',
    description:
      'What you hear is the\nmaterial speaking\ntruthfully.',
  },
  {
    title: 'Binary\nTension',
    description:
      'Control and wildness\nexist in the same\nbreath.',
  },
  {
    title: 'Somatic\nRespect',
    description:
      'The body is not an\nobstacle. It is the\nstarting point.',
  },
  {
    title: 'Industrial\nHonesty',
    description:
      'The structure is exposed.\nNothing is hidden\nto pretend.',
  },
]

export function PrinciplesSection() {
  return (
    <section className="section ">
      <div className="section-inner flex flex-col items-center text-center ">

        <h2 className="color-[#DDD4C1] ">
          This is not <span className='color-white font-bold'>heavy</span> . This is dense.
        </h2>

        <p className="text-[25px] leading-[1.17]  color-[#DDD4C1]">
          Density is presence — an object that carries its own reasons for being.
          Every gram is a decision. You can feel the difference.
        </p>
      </div>

      {/* 深色条 + 4 卡片网格 */}
      <div className="relative">
        {/* 背景条 */}
        <div className="absolute inset-0 bg-black h-[160px] top-1/2 -translate-y-1/2" />

        <div className="section-inner relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-4">
          {PRINCIPLES.map((p) => (
            <PrincipleCard key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
