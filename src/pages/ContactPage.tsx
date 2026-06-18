import { useState } from 'react'
import { ActLabel } from '../components/ActLabel'

// ---- 数据 ----
const SERVICES = [
  'Sign up for news updates',
  'Gallery collaboration',
  'Artwork purchase inquiry',
  'Artist representation',
  'Press or media interview',
  'Other',
]

// ================================================================
export function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    )
  }

  return (
    <>
      {/* ====== Hero ====== */}
      <section className="section relative min-h-[clamp(400px,41.7vw,600px)] bg-[linear-gradient(262deg,#282827_23.07%,#47494A_54.86%,#6F6F6F_66.75%,#6A7275_98.07%)] flex items-center overflow-visible">
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10 translate-y-[10%] w-[clamp(240px,40vw,560px)] aspect-square "
        >
          <img src="/images/archive_detail.png" alt="" />
        </div>
      </section>

      <section className="section ">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)] mt-[clamp(36px,3vw,48px)]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[clamp(280px,83vw,1200px)] mx-auto md:mx-0">
            <ActLabel>{'S1\nCOMPANY\nSTATEMENT'}</ActLabel>

            <h1 className="text-[clamp(32px,2.9vw,42px)] mt-[clamp(36px,4vw,50px)] font-medium leading-[1.17] text-white">
              Let&rsquo;s work together
            </h1>

            <p className="text-[clamp(14px,1.39vw,20px)] leading-[1.17] text-accent mt-4 max-w-[clamp(280px,55vw,800px)]">
              Interested in working together? Fill out some info and we will be in touch shortly! We can&rsquo;t wait to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* ====== Form ====== */}
      <section className="section py-[clamp(48px,5vw,80px)] mb-[clamp(48px,5vw,80px)]">
        <div className="section-inner md:px-[clamp(48px,8.33vw,120px)]">
          <form
            className=" flex flex-col gap-[clamp(24px,2.5vw,36px)]"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* ---- Name: First + Last ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(16px,1.5vw,24px)]">
              <label className="flex flex-col gap-2">
                <span className="flex items-baseline gap-2 text-accent text-[clamp(14px,1.39vw,20px)] font-medium">
                  First name
                </span>
                <input
                  type="text"
                  required
                  className="w-full h-[clamp(44px,3.9vw,56px)] px-[clamp(16px,1.5vw,24px)] bg-[#313131] border border-accent/15 text-accent text-[clamp(14px,1.39vw,20px)] placeholder:text-accent/30 focus:border-accent outline-none transition-colors"
                />
              </label>

              {/* ---- Email ---- */}
              <label className="flex flex-col gap-2">
                <span className="flex items-baseline gap-2 text-accent text-[clamp(14px,1.39vw,20px)] font-medium">
                  Email
                </span>
                <input
                  type="email"
                  required
                  className="w-full h-[clamp(44px,3.9vw,56px)] px-[clamp(16px,1.5vw,24px)] bg-[#313131] border border-accent/15 text-accent text-[clamp(14px,1.39vw,20px)] placeholder:text-accent/30 focus:border-accent outline-none transition-colors"
                />
              </label>
            </div>



            {/* ---- Phone ---- */}
            <label className="flex flex-col gap-2">
              <span className="text-accent text-[clamp(14px,1.39vw,20px)] font-medium">Phone</span>
              <input
                type="tel"
                className="w-full h-[clamp(44px,3.9vw,56px)] px-[clamp(16px,1.5vw,24px)] bg-[#313131] border border-accent/15 text-accent text-[clamp(14px,1.39vw,20px)] placeholder:text-accent/30 focus:border-accent outline-none transition-colors"
              />
            </label>

            {/* ---- Comment ---- */}
            <label className="flex flex-col gap-2">
              <span className="text-accent text-[clamp(14px,1.39vw,20px)] font-medium">Comment</span>
              <textarea
                rows={4}
                className="w-full min-h-[clamp(80px,8vw,120px)] px-[clamp(16px,1.5vw,24px)] py-[clamp(12px,1vw,16px)] bg-[#313131] border border-accent/15 text-accent text-[clamp(14px,1.39vw,20px)] placeholder:text-accent/30 focus:border-accent outline-none transition-colors resize-y"
              />
            </label>

            {/* ---- Submit ---- */}
            <button
              type="submit"
              className="w-[clamp(120px,11vw,160px)] h-[clamp(42px,3.9vw,56px)] bg-accent text-bg-primary font-medium text-[clamp(14px,1.39vw,20px)] hover:bg-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
